import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';
import { Keranjang } from '../services/keranjang';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: any[] = [];

  defaultImage: string = "";

  keyword: string = "";
  searchFocus: boolean = false;

  gridColumn: number = 3;

  constructor(private produk: Produk, private keranjang: Keranjang, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.products = this.produk.products;
    this.defaultImage = this.produk.defaultImage;
  }

  // Refresh tiap halaman dibuka agar produk baru / edit stok langsung terlihat.
  ionViewWillEnter() {
    this.filter();
    this.cdr.detectChanges();
  }

  setInput(name: string) {
    this.keyword = name;
    this.searchFocus = false;
    this.filter()
  }

  clearSearch() {
    this.keyword = "";
    this.filter();
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    if (!arr) return [];
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  filter() {
    if (!this.keyword || this.keyword.trim() === '') {
      this.products = this.produk.products;
    } else {
      this.products = this.produk.searchProductByName(this.keyword);
    }
  }

  formatPrice(price: number) {
    return 'Rp. ' + (price ? price.toLocaleString('id-ID') : '0');
  }

  isInCart(product: any) {
    if (this.getQuantity(product) < 1) return false;
    else return true;
  }

  getQuantity(product: any): number {
    const index = this.keranjang.cartItems.findIndex(i => i.product.id === product.id);
    return this.keranjang.cartItems[index]?.qty || 0;
  }

  getSubtotal(product: any): number {
    return this.getQuantity(product) * product.sellPrice;
  }

  addToCart(product: any) {
    this.keranjang.addToCart(product);
  }

  updateQuantity(product: any, amount: number = 1) {
    this.keranjang.updateQuantity(product.id, amount);
  }

  removeItem(id: string) {
    this.keranjang.removeFromCart(id);
  }
}
