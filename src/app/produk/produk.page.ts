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
  gridColumn: number = 3;

  // temp
  quantity: number = 0;

  constructor(private produk: Produk) { }

  ngOnInit() {
    this.products = this.produk.products;
    this.defaultImage = this.produk.defaultImage;
  }

  chunkArray(arr_ori: any[], chunkSize: number): any[][] {
    const result = [];

    for (let i = 0; i < arr_ori.length; i += chunkSize) {
      result.push(arr_ori.slice(i, i + chunkSize));
    }

    return result;
  }

  filter() {
    this.products = this.produk.searchProduct(this.keyword);
  }

  formatPrice(price: number) {
    return "Rp. " + price.toLocaleString('id-ID');
  }

  isInCart(product: any) {
    if (this.quantity < 1) return false;
    else return true;
  }

  addToCart(product: any) {
    this.quantity += 1;
  }
}
