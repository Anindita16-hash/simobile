import { Injectable } from '@angular/core';
import { Produk } from './produk';
import { Transaksi } from './transaksi';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  constructor(
    private produkService: Produk,
    private transaksiService: Transaksi
  ) { }

  getProductPrice(product: any): number {
    return Number(product.sellPrice ?? product.hargaJual ?? 0);
  }

  getProductStock(product: any): number {
    return Number(product.stock ?? product.stok ?? 0);
  }

  getCart(): any[] {
    return this.cartItems;
  }

  addToCart(product: any, qty: number = 1): { success: boolean; message?: string } {
    const availableStock = this.getProductStock(product);
    if (availableStock <= 0) {
      return { success: false, message: 'Stok produk habis' };
    }

    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    const currentQtyInCart = existingItem ? existingItem.qty : 0;
    const price = this.getProductPrice(product);

    if (currentQtyInCart + qty > availableStock) {
      return { success: false, message: 'Jumlah melebihi stok tersedia' };
    }

    if (existingItem) {
      existingItem.qty += qty;
      existingItem.subtotal = existingItem.qty * price;
    } else {
      this.cartItems.push({
        product: product,
        qty: qty,
        subtotal: qty * price
      });
    }

    return { success: true };
  }

  updateQuantity(productId: any, delta: number): { success: boolean; message?: string } {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (!item) return { success: false, message: 'Item tidak ditemukan' };

    const newQty = item.qty + delta;
    const availableStock = this.getProductStock(item.product);
    const price = this.getProductPrice(item.product);

    if (newQty > availableStock) {
      return { success: false, message: 'Jumlah melebihi stok tersedia' };
    }

    if (newQty < 1) {
      return { success: false, message: 'Batas minimal 1 item' };
    }

    item.qty = newQty;
    item.subtotal = item.qty * price;
    return { success: true };
  }

  removeFromCart(productId: any) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }

  clearCart() {
    this.cartItems.length = 0;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.subtotal || 0), 0);
  }

  confirmTransaction(): any {
  if (this.cartItems.length === 0) return null;

  // 1. Potong stok produk di ProdukService
  for (let i = 0; i < this.cartItems.length; i++) {
    const item = this.cartItems[i];
    // Cari index array berdasarkan ID produk
    const index = this.produkService.products.findIndex(p => p.id === item.product.id);
    if (index !== -1) {
      this.produkService.updateStock(index, -item.qty);
    }
  }

  // 2. Simpan transaksi ke TransaksiService
  const total = this.getTotalPrice();
  const savedTx = this.transaksiService.saveTransaction(this.cartItems, total);

  // 3. Bersihkan keranjang di service
  this.clearCart();
  
  return savedTx;
}
}