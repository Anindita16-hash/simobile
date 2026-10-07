import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Transaksi } from '../services/transaksi';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  history: any[] = [];

  constructor(
    private transaksi: Transaksi,
    private cdr: ChangeDetectorRef,
    private animationController: AnimationController,
  ) { }

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
    this.slideItem();
  }

  slideItem() {
    const items = document.querySelectorAll('.slide');
    const animation = this.animationController.create();

    items.forEach(item => {
      animation.addElement(item);
    });

    animation
    .duration(500)
    .iterations(1)
    .keyframes([
      { offset: 0, transform: 'translateY(-30px)', opacity: 0 },
      { offset: 1, transform: 'translateY(0px)', opacity: 1 },
    ]);
    animation.play();
  }

  private refresh() {
    this.history = [...this.transaksi.getHistory()];
    this.cdr.detectChanges();
  }
}
