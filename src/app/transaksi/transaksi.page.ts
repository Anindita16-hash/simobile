import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  history: any[] = [];

  constructor(private transaksi: Transaksi) { }

  ngOnInit() {
      // get transaction history from service
      this.history = this.transaksi.getHistory();

      console.log('Transaction history:', this.history);
      console.log('Total transactions:', this.history.length);
    }
  }
