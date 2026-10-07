import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../../services/produk';
import { CartService } from '../../services/keranjang';

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

  stockToAdd: number = 0;

  constructor(private route: ActivatedRoute, private produk: Produk, private keranjang: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id !== undefined && this.id !== '') this.product = this.produk.searchProductByID(this.id);
    });

    this.defaultImage = this.produk.defaultImage;
  }

  getCategoryName(id: string): string {
    return this.produk.getCategoryName(id);
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

  addToCart(product: any) {
    this.keranjang.addToCart(product);

    // debugging
    console.log('=== PRODUCT DETAIL SERVICE ===');
  console.log('CartService instance:', this.keranjang);
  console.log('Cart items:', this.keranjang.cartItems);
  console.log('Cart total:', this.keranjang.getTotalPrice());

    
    console.log('Cart after add:', this.keranjang.cartItems);
    console.log('Cart total:', this.keranjang.getTotalPrice());

      console.log('=== CART DEBUG ===');
  console.log('Quantity:', this.keranjang.cartItems[0]?.qty);
  console.log('Subtotal:', this.keranjang.cartItems[0]?.subtotal);
  console.log('Price:', this.keranjang.cartItems[0]?.product.sellPrice);
  console.log('Total:', this.keranjang.getTotalPrice());
  }

  updateQuantity(product: any, amount: number = 1) {
    // this.keranjang.updateQuantity(product.id, amount);

    //debug
    console.log('BUTTON PRESSED');
  console.log('Product:', product.name);
  console.log('Amount:', amount);

  const result = this.keranjang.updateQuantity(product.id, amount);

  console.log('CartService result:', result);
  console.log('Cart quantity:', this.keranjang.cartItems[0]?.qty);
  console.log('Cart subtotal:', this.keranjang.cartItems[0]?.subtotal);
  console.log('Cart total:', this.keranjang.getTotalPrice());
  }

  removeItem(id: string) {
    this.keranjang.removeFromCart(id);
  }

  getStock(product: any): number {
    return this.produk.searchProductByID(product.id).stock;
  }

  addStock() {
    this.stockToAdd = 1;
  }

  updateStock(amount: number) {
    let newStock = this.stockToAdd + amount;
    if (newStock < 0) this.stockToAdd = 0;
    else this.stockToAdd = newStock;
  }

  saveStockToAdd(product: any) {
    // find product, if exist add
    this.produk.updateStock(product.id, this.stockToAdd);

    // reset temporary stock counter
    this.stockToAdd = 0;
    }
}
