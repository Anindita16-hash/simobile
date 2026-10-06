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

  constructor(private route: ActivatedRoute, private produk: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id !== null || this.id !== '') this.product = this.produk.searchProductByID(this.id);
    this.defaultImage = this.produk.defaultImage;
  }

  formatPrice(price: number) {
    return "Rp. " + price.toLocaleString('id-ID');
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
    this.quantity += amount;
  }

  subtractQuantityCart(amount: number = 1) {
    this.quantity -= amount;
  }
  // sampai sini!!

  addStock() {
    this.stockToAdd = 1;
  }

  addQuantityStock(amount: number = 1) {
    this.stockToAdd += amount;
  }

  subtractQuantityStock(amount: number = 1) {
    this.stockToAdd -= amount;
  }
}
