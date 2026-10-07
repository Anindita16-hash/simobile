import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../../services/produk';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {

  id = "";
  product: any;

  defaultImage: string = "";

  quantity: number = 0;
  stockToAdd: number = 0;

  constructor(private route: ActivatedRoute, public produk: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id !== undefined && this.id !== '') this.product = this.produk.searchProductByID(this.id);
    });

    this.defaultImage = this.produk.defaultImage;
  }

  formatPrice(price: number) {
    return 'Rp. ' + (price ? price.toLocaleString('id-ID') : '0');
  }

  isInCart(product: any) {
    if (this.quantity < 1) return false;
    else return true;
  }

  //temp!!!
  addToCart(product: any) {
    this.quantity += 1;
  }

  addQuantityCart(amount: number = 1) {
    let total = this.quantity + amount;
    if (total > this.product.stock) this.quantity = this.product.stock;
    else this.quantity = total;
  }

  subtractQuantityCart(amount: number = 1) {
    let total = this.quantity - amount;
    if (total < 0) this.quantity = 0;
    else this.quantity = total;
  }
  // sampai sini!!

  addStock() {
    this.stockToAdd = 1;
  }

  addQuantityStock(amount: number = 1) {
    this.stockToAdd += amount;
  }

  subtractQuantityStock(amount: number = 1) {
    let total = this.stockToAdd - amount;
    if (total < 0) this.stockToAdd = 0;
    else this.stockToAdd = total;
  }
}
