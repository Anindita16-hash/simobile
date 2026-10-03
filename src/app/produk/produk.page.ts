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

  constructor(private produk: Produk) { }

  ngOnInit() {
    this.products = this.produk.products;
    this.defaultImage = this.produk.defaultImage;
  }

  chunkArray(arr_ori: any[], chucnkSize: number): any[][] {
    const result = [];

    for (let i = 0; i < arr_ori.length; i += chucnkSize) {
      result.push(arr_ori.slice(i, i + chucnkSize));
    }

    return result;
  }

  filter() {
    this.products = this.produk.searchProduct(this.keyword);
  }
}
