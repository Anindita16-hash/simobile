import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Transaksi {

  history: any[] = [
  {
    id: '1001',
    date: '1 Oktober 2026, 08:15',
    item: [
      {
        name: 'Indomie Goreng',
        quantity: 3,
        price: 3500
      },
      {
        name: 'Aqua 600ml',
        quantity: 2,
        price: 3000
      }
    ],
    total: 16500
  },
  {
    id: '1002',
    date: '1 Oktober 2026, 10:30',
    item: [
      {
        name: 'Beras 5kg',
        quantity: 1,
        price: 75000
      },
      {
        name: 'Minyak Goreng 1L',
        quantity: 2,
        price: 18000
      }
    ],
    total: 111000
  },
  {
    id: '1003',
    date: '1 Oktober 2026, 13:20',
    item: [
      {
        name: 'Teh Botol Sosro',
        quantity: 4,
        price: 4000
      },
      {
        name: 'Roti Tawar',
        quantity: 1,
        price: 15000
      },
      {
        name: 'Chitato',
        quantity: 2,
        price: 12000
      }
    ],
    total: 55000
  },
  {
    id: '1004',
    date: '2 Oktober 2026, 09:05',
    item: [
      {
        name: 'Gula Pasir 1kg',
        quantity: 2,
        price: 17000
      },
      {
        name: 'Kopi Sachet',
        quantity: 5,
        price: 2500
      }
    ],
    total: 46400
  },
  {
    id: '1005',
    date: '2 Oktober 2026, 11:45',
    item: [
      {
        name: 'Telur Ayam',
        quantity: 1,
        price: 28000
      },
      {
        name: 'Susu UHT 1L',
        quantity: 2,
        price: 19000
      }
    ],
    total: 66000
  },
  {
    id: '1006',
    date: '3 Oktober 2026, 08:40',
    item: [
      {
        name: 'Indomie Goreng',
        quantity: 5,
        price: 3500
      },
      {
        name: 'Teh Botol Sosro',
        quantity: 3,
        price: 4000
      },
      {
        name: 'Aqua 600ml',
        quantity: 3,
        price: 3000
      }
    ],
    total: 41500
  },
  {
    id: '1007',
    date: '3 Oktober 2026, 15:10',
    item: [
      {
        name: 'Sabun Mandi',
        quantity: 2,
        price: 5000
      },
      {
        name: 'Shampoo Sachet',
        quantity: 4,
        price: 2500
      },
      {
        name: 'Pasta Gigi',
        quantity: 1,
        price: 12000
      }
    ],
    total: 32000
  },
  {
    id: '1008',
    date: '4 Oktober 2026, 10:25',
    item: [
      {
        name: 'Beras 5kg',
        quantity: 1,
        price: 75000
      },
      {
        name: 'Telur Ayam',
        quantity: 2,
        price: 28000
      },
      {
        name: 'Minyak Goreng 1L',
        quantity: 1,
        price: 18000
      }
    ],
    total: 149000
  },
  {
    id: '1009',
    date: '5 Oktober 2026, 12:15',
    item: [
      {
        name: 'Roti Tawar',
        quantity: 2,
        price: 15000
      },
      {
        name: 'Susu UHT 1L',
        quantity: 1,
        price: 19000
      },
      {
        name: 'Kopi Sachet',
        quantity: 3,
        price: 2500
      }
    ],
    total: 56500
  },
  {
    id: '1010',
    date: '6 Oktober 2026, 16:30',
    item: [
      {
        name: 'Chitato',
        quantity: 2,
        price: 12000
      },
      {
        name: 'Aqua 600ml',
        quantity: 4,
        price: 3000
      },
      {
        name: 'Teh Botol Sosro',
        quantity: 2,
        price: 4000
      },
      {
        name: 'Indomie Goreng',
        quantity: 3,
        price: 3500
      }
    ],
    total: 46500
  },
  {
    id: '1011',
    date: '6 Oktober 2026, 18:20',
    item: [
      {
        name: 'Beras 5kg',
        quantity: 1,
        price: 75000
      },
      {
        name: 'Gula Pasir 1kg',
        quantity: 1,
        price: 17000
      }
    ],
    total: 92000
  },

  {
    id: '1012',
    date: '7 Oktober 2026, 08:35',
    item: [
      {
        name: 'Indomie Goreng',
        quantity: 4,
        price: 3500
      },
      {
        name: 'Kopi Sachet',
        quantity: 4,
        price: 2500
      },
      {
        name: 'Aqua 600ml',
        quantity: 2,
        price: 3000
      }
    ],
    total: 32000
  },
  {
    id: '1013',
    date: '7 Oktober 2026, 11:10',
    item: [
      {
        name: 'Telur Ayam',
        quantity: 2,
        price: 28000
      },
      {
        name: 'Minyak Goreng 1L',
        quantity: 2,
        price: 18000
      }
    ],
    total: 92000
  },
  {
    id: '1014',
    date: '7 Oktober 2026, 14:45',
    item: [
      {
        name: 'Roti Tawar',
        quantity: 1,
        price: 15000
      },
      {
        name: 'Susu UHT 1L',
        quantity: 2,
        price: 19000
      },
      {
        name: 'Teh Botol Sosro',
        quantity: 2,
        price: 4000
      }
    ],
    total: 61000
  },
  {
    id: '1015',
    date: '8 Oktober 2026, 07:50',
    item: [
      {
        name: 'Indomie Goreng',
        quantity: 6,
        price: 3500
      },
      {
        name: 'Aqua 600ml',
        quantity: 4,
        price: 3000
      }
    ],
    total: 33000
  },

  {
    id: '1016',
    date: '8 Oktober 2026, 10:25',
    item: [
      {
        name: 'Beras 5kg',
        quantity: 1,
        price: 75000
      },
      {
        name: 'Telur Ayam',
        quantity: 1,
        price: 28000
      },
      {
        name: 'Gula Pasir 1kg',
        quantity: 2,
        price: 17000
      }
    ],
    total: 137000
  },
  {
    id: '1017',
    date: '8 Oktober 2026, 13:40',
    item: [
      {
        name: 'Chitato',
        quantity: 3,
        price: 12000
      },
      {
        name: 'Teh Botol Sosro',
        quantity: 3,
        price: 4000
      },
      {
        name: 'Aqua 600ml',
        quantity: 3,
        price: 3000
      }
    ],
    total: 57000
  },

  {
    id: '1018',
    date: '8 Oktober 2026, 16:15',
    item: [
      {
        name: 'Sabun Mandi',
        quantity: 2,
        price: 5000
      },
      {
        name: 'Shampoo Sachet',
        quantity: 5,
        price: 2500
      },
      {
        name: 'Pasta Gigi',
        quantity: 1,
        price: 12000
      },
      {
        name: 'Roti Tawar',
        quantity: 1,
        price: 15000
      }
    ],
    total: 49400
  },
  {
    id: '1019',
    date: '9 Oktober 2026, 09:30',
    item: [
      {
        name: 'Minyak Goreng 1L',
        quantity: 3,
        price: 18000
      },
      {
        name: 'Gula Pasir 1kg',
        quantity: 2,
        price: 17000
      },
      {
        name: 'Kopi Sachet',
        quantity: 2,
        price: 2500
      }
    ],
    total: 89000
  },
  {
    id: '1020',
    date: '10 Oktober 2026, 12:05',
    item: [
      {
        name: 'Beras 5kg',
        quantity: 1,
        price: 75000
      },
      {
        name: 'Minyak Goreng 1L',
        quantity: 1,
        price: 18000
      },
      {
        name: 'Telur Ayam',
        quantity: 2,
        price: 28000
      },
      {
        name: 'Indomie Goreng',
        quantity: 2,
        price: 3500
      }
    ],
    total: 158000
  }
];

  private counter: number = 1021;

  constructor() { }

  getNextId(): string {
    return `#${this.counter}`;
  }

  saveTransaction(items: any[], total: number) {
    // Menggunakan Spread Operator standar Angular
    const newTransaction = {
      id: this.getNextId(),
      date: this.currentDateFormat(),
      item: [...items],
      total: total
      
    };

 //temp add
    console.log('=== SAVE TRANSACTION ===');
console.log('ID that will be saved:', this.getNextId());
console.log('Counter:', this.counter);

    this.history.unshift(newTransaction);

    //temp add
    console.log('New transaction:', newTransaction);
console.log('Full history:', this.history);

    this.counter++;

    

    return newTransaction;

   
  }

  getHistory(): any[] {
    return this.history;
  }

  getTransactionId(id: any): any {
    const formattedInputId = id.toString().replace('#', '');
    return this.history.find(
      h => h.id.toString().replace('#', '') === formattedInputId);
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