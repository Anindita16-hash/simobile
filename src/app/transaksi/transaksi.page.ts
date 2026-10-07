import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  history: any[] = [];

  constructor(private transaksi: Transaksi, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
      // get transaction history from service
      this.history = [...this.transaksi.getHistory()];
    }

  // Refresh tiap halaman dibuka (pola yang sama dengan KeranjangPage),
  // agar transaksi yang baru dikonfirmasi langsung muncul tanpa restart.
  // Spread [...] membuat referensi array baru sehingga *ngFor pasti
  // mendeteksi perubahan, dan detectChanges() memaksa render walau
  // navigasi pemicunya berasal dari luar Angular zone (handler alert).
  ionViewWillEnter() {
    this.refresh();
  }

  ionViewDidEnter() {
    this.refresh();
  }

  private refresh() {
    this.history = [...this.transaksi.getHistory()];
    this.cdr.detectChanges();
  }
  }
