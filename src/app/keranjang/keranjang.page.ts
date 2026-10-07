import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Keranjang } from '../services/keranjang';
import { Produk } from '../services/produk';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false
})

export class KeranjangPage implements OnInit {

  searchKeyword: string = '';
  searchResults: any[] = [];
  hasSearched: boolean = false;

  constructor(
    public cartService: Keranjang,
    public produkService: Produk,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() { }

  // Binding reaktif - live search template selalu membaca referensi live dari Keranjang.
  get cartItems(): any[] {
    return this.cartService.getCart();
  }

  // Lifecycle dipanggil setiap kali tab Keranjang dibuka — reset state pencarian ke kondisi default
  // paksa change detection buat getter cartItems (referensi live service) langsung

  ionViewWillEnter() {
    this.resetPage();
    this.cdr.detectChanges();
  }

  ionViewDidEnter() {
    this.resetPage();
    this.cdr.detectChanges();
  }

  // Fungsi untuk mengembalikan halaman ke kondisi default (pencarian kosong)
  resetPage() {
    this.searchKeyword = '';
    this.searchResults = [];
    this.hasSearched = false;
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  formatPrice(price: number): string {
    if (!price && price !== 0) return 'Rp 0';
    return 'Rp ' + Number(price).toLocaleString('id-ID');
  }

  onSearchChange() {
    const keyword = this.searchKeyword.trim();
    if (keyword === '') {
      this.searchResults = [];
      this.hasSearched = false;
    } else {
      this.searchResults = this.produkService.searchProductByName(keyword);
      this.hasSearched = true;
    }
  }

  selectSearchResult(product: any) {
    const stock = this.cartService.getProductStock(product);
    if (stock <= 0) {
      this.showToast('Stok produk habis!', 'warning');
      return;
    }

    const result = this.cartService.addToCart(product, 1);
    if (result.success) {
      this.searchKeyword = '';
      this.searchResults = [];
      this.hasSearched = false;
    } else {
      this.showToast(result.message || 'Gagal menambahkan produk', 'warning');
    }
  }

  getQuantity(item: any): number {
    // Dipanggil dari template dengan cart-item
    if (item && typeof item.qty === 'number') {
      return item.qty;
    }
    // if dipanggil dengan product, cari qty di service
    const found = this.cartService.cartItems.find(i => i.product.id === item?.product?.id || i.product.id === item?.id);
    return found?.qty || 0;
  }

  increaseQty(item: any) {
    const result = this.cartService.updateQuantity(item.product.id, 1);
    if (!result.success) {
      this.showToast(result.message || 'Jumlah melebihi stok tersedia', 'warning');
    }
  }

  decreaseQty(item: any) {
    if (item.qty <= 1) return;
    this.cartService.updateQuantity(item.product.id, -1);
  }

  removeItem(productId: any) {
    this.cartService.removeFromCart(productId);
  }

  async cancelTransaction() {
    if (this.cartItems.length === 0) return;

    const alert = await this.alertController.create({
      header: 'Konfirmasi Batal',
      message: 'Batalkan dan hapus pesanan?',
      buttons: [
        { text: 'Tidak', role: 'cancel' },
        {
          text: 'Ya',
          role: 'confirm',
          handler: () => {
            // Handler alert Ionic berjalan di luar Angular zone, sehingga
            // navigasi + toast di bawahnya tidak memicu change detection
            // (halaman tujuan tampak tidak terupdate sampai ada interaksi).
            // ngZone.run() menjamin semuanya jalan di dalam zone.
            this.ngZone.run(() => {
              this.cartService.clearCart();
              this.showToast('Transaksi dibatalkan.', 'danger');
              this.router.navigate(['/home']);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmTransaction() {
    if (this.cartItems.length === 0) return;

    const alert = await this.alertController.create({
      header: 'Konfirmasi Transaksi',
      message: 'Apakah Anda yakin untuk konfirmasi pesanan?',
      buttons: [
        { text: 'Tidak', role: 'cancel' },
        {
          text: 'Ya',
          role: 'confirm',
          handler: () => {
            // Lihat catatan ngZone pada cancelTransaction di atas:
            // tanpa ini, halaman Riwayat/Dashboard tujuan kadang
            // tidak langsung terupdate setelah konfirmasi.
            this.ngZone.run(() => {
              const savedTx = this.cartService.confirmTransaction();
              if (savedTx) {
                // Reset state pencarian kembali ke mode default
                this.resetPage();

                this.showToast(`Transaksi ${savedTx.id} berhasil dikonfirmasi!`, 'success');

                // Pindah ke riwayat transaksi
                this.router.navigate(['/transaksi']);
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  private async showToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1800,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }
}
