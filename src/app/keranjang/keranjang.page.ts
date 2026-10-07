import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { CartService } from '../services/keranjang';
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
  cartItems: any[] = [];

  constructor(
    public cartService: CartService,
    public produkService: Produk,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  // Lifecycle Hook Ionic: Dipanggil setiap kali tab Keranjang dibuka
  ionViewWillEnter() {
    this.resetPage();
  }

  // Fungsi untuk mengembalikan halaman ke kondisi default (kosong)
  resetPage() {
    this.cartItems = this.cartService.getCart(); // mengambil array []
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
      this.cartItems = this.cartService.getCart();
      this.searchKeyword = '';
      this.searchResults = [];
      this.hasSearched = false;
    } else {
      this.showToast(result.message || 'Gagal menambahkan produk', 'warning');
    }
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
    this.cartItems = this.cartService.getCart();
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
            this.cartService.clearCart();
            this.showToast('Transaksi dibatalkan.', 'danger');
            this.router.navigate(['/home']);
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
            const savedTx = this.cartService.confirmTransaction();
            if (savedTx) {
              // Reset state halaman keranjang agar kembali ke mode default
              this.resetPage();

              this.showToast(`Transaksi ${savedTx.id} berhasil dikonfirmasi!`, 'success');

              // Pindah ke halaman Riwayat Transaksi
              this.router.navigate(['/transaksi']);
            }
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