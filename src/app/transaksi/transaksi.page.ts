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
    }

  // Refresh tiap halaman dibuka (pola yang sama dengan KeranjangPage),
  // agar transaksi yang baru dikonfirmasi langsung muncul tanpa restart.
  ionViewWillEnter() {
    this.history = this.transaksi.getHistory();
  }
  }
