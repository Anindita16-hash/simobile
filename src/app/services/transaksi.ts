import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Transaksi {

  history: any[] = [];
  private counter: number = 1001;

  constructor() { }

  getNextId(): string {
    return `#${this.counter}`;
  }

  saveTransaction(items: any[], total: number) {
    // Menggunakan Spread Operator standar Angular (Week 5)
    const newTransaction = {
      id: this.getNextId(),
      date: this.currentDateFormat(),
      item: [...items],
      total: total
    };

    this.history.unshift(newTransaction);
    this.counter++;
    return newTransaction;
  }

  getHistory(): any[] {
    return this.history;
  }

  getTransactionId(id: any): any {
    const formattedInputId = id.toString().replace('#', '');
    return this.history.find(h => h.id.toString().replace('#', '') === formattedInputId);
  }

  private currentDateFormat(): string {
    const now = new Date();
    const tanggal = now.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const jam = now.toLocaleTimeString('id-ID', {
      hour: '2-digit', minute: '2-digit'
    });
    return `${tanggal}, ${jam}`;
  }
}