import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';

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

  // temp
  quantity: number = 0;

  constructor(private produk: Produk) { }

  ngOnInit() {
    this.products = this.produk.products;
    this.defaultImage = this.produk.defaultImage;
  }

  setInput(name: string) {
    this.keyword = name;
    this.searchFocus = false;
    this.filter()
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
    if (this.quantity < 1) return false;
    else return true;
  }

  // temp!! sampai bawah!!
  addToCart(product: any) {
    this.quantity += 1;
  }

  addQuantity(amount: number = 1) {
    this.quantity += amount;
  }

  subtractQuantity(amount: number = 1) {
    this.quantity -= amount;
  }
}
