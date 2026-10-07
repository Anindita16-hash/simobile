import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Transaksi } from '../services/transaksi';
import { Profil } from '../services/profil';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  storeName: string = 'Toko Makmur Jaya';
  todayLabel: string = '';

  totalPenjualan: number = 0;
  estimasiUntung: number = 0;
  jumlahTransaksi: number = 0;
  barangTerjual: number = 0;
  produkTerlarisNama: string = '-';
  produkTerlarisDetail: string = 'Belum ada penjualan hari ini';

  constructor(
    private transaksiService: Transaksi,
    private profilService: Profil,
    private cdr: ChangeDetectorRef,
    private animationController: AnimationController
  ) { }

  ngOnInit() {
    this.loadDashboard();
  }

  // Refresh tiap halaman dibuka > transaksibaru dikonfirmasi langsung masuk laporan.
  // detectChanges() memaksa render walau navigasi pemicunya berasal dari
  // luar Angular zone (mis. handler alert konfirmasi keranjang).
  ionViewWillEnter() {
    this.loadDashboard();
    this.cdr.detectChanges();
  }

  ionViewDidEnter() {
    this.loadDashboard();
    this.cdr.detectChanges();
    this.zoomContainer();
    this.fadeText();
  }

  zoomContainer() {
    const containerElements = document.querySelectorAll('.zoom');
    const animation = this.animationController.create();

    containerElements.forEach(element => {
      animation.addElement(element);
    });

    animation
    .duration(750)
    .iterations(1)
    .keyframes([
      { offset: 0, transform: 'scale(0)', opacity: '0' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
    animation.play();
  }

  fadeText() {
    const textElements = document.querySelectorAll('.fade');
    const animation = this.animationController.create();

    textElements.forEach(text => {
      animation.addElement(text);
    });

    animation
    .duration(1000)
    .delay(800)
    .iterations(1)
    .keyframes([
      { offset: 0, opacity: '0' },
      { offset: 1, opacity: '1' }
    ]);
    animation.play();
  }

  loadDashboard() {
    // Nama toko dari object user yang dipakai dipakai idx Page Profil).
    const activeUser = this.profilService.profiles?.[0];
    if (activeUser?.storeName) {
      this.storeName = activeUser.storeName;
    }

    // Tanggal hari ini (locale id-ID).
    const now = new Date();
    this.todayLabel = now.toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    const dayKey = now.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    // Filter transaksi hari ini berdasarkan awalan string tanggal
    const todayTrx = this.transaksiService.getHistory()
      .filter(t => (t.date || '').startsWith(dayKey));

    this.jumlahTransaksi = todayTrx.length;
    this.totalPenjualan = todayTrx.reduce((sum, t) => sum + Number(t.total || 0), 0);

    let qtyTotal = 0;
    let profitTotal = 0;
    const qtyByProduct = new Map<string, { name: string; qty: number }>();

    for (const trx of todayTrx) {
      for (const item of (trx.item || [])) {
        // Dukung dua bentuk item: baru {product, qty} dan lama {name, quantity}.
        const name = item.product?.name || item.name || 'Produk';
        const qty = Number(item.qty ?? item.quantity ?? 0);
        qtyTotal += qty;

        // Profit = harga jual - harga beli
        if (item.product && item.product.buyPrice != null) {
          const sell = Number(item.product.sellPrice ?? 0);
          const buy = Number(item.product.buyPrice ?? 0);
          profitTotal += (sell - buy) * qty;
        }

        const prev = qtyByProduct.get(name);
        qtyByProduct.set(name, { name, qty: (prev?.qty || 0) + qty });
      }
    }

    this.barangTerjual = qtyTotal;
    this.estimasiUntung = profitTotal;

    // produk terlaris = qty terbanyak terjual hari ini.
    let topName = '-';
    let topQty = 0;
    let hasTop = false;
    for (const v of qtyByProduct.values()) {
      if (!hasTop || v.qty > topQty) {
        topName = v.name;
        topQty = v.qty;
        hasTop = true;
      }
    }
    if (hasTop) {
      this.produkTerlarisNama = topName;
      this.produkTerlarisDetail = `${topQty} pcs terjual hari ini`;
    } else {
      this.produkTerlarisNama = '-';
      this.produkTerlarisDetail = 'Belum ada penjualan hari ini';
    }
  }

  formatPrice(price: number) {
    return 'Rp. ' + (price ? Number(price).toLocaleString('id-ID') : '0');
  }
}
