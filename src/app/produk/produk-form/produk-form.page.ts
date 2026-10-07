import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk } from '../../services/produk';

@Component({
  selector: 'app-produk-form',
  templateUrl: './produk-form.page.html',
  styleUrls: ['./produk-form.page.scss'],
  standalone: false,
})
export class ProdukFormPage implements OnInit {

  id: string = "";
  product: any;

  categories: any[] = [];

  defaultImage: string = "";

  newCategory: string = "";
  newName: string = "";
  newURL: string = this.defaultImage;
  newNet: string = "";
  newBrand: string = "";
  newDescription: string = "";
  newStock: string = "0";
  newBuyPrice: string = "";
  newSellPrice: string = "";

  profit: number = 0;

  // warning
  categoryFilled: boolean = true;
  nameFilled: boolean = true;
  stockFilled: boolean = true;
  buyPriceFilled: boolean = true;
  sellPriceFilled: boolean = true;
  stockValid: boolean = true;
  buyPriceValid: boolean = true;
  sellPriceValid: boolean = true;

  productSaved: boolean = false;
  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        this.productSaved = false;
        this.router.navigate(['/produk']);
      }
    }
  ];

  constructor(private route: ActivatedRoute, private produk: Produk, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id !== undefined && this.id !== '') {
        this.product = this.produk.searchProductByID(this.id);

        this.newCategory = this.produk.getCategoryName(this.product.category);
        this.newName = this.product.name;
        this.newURL = this.product.url || this.defaultImage;
        this.newNet = this.product.net;
        this.newBrand = this.product.brand;
        this.newDescription = this.product.description;
        this.newStock = this.product.stock.toString();
        this.newBuyPrice = this.product.buyPrice.toString();
        this.newSellPrice = this.product.sellPrice.toString();

        this.profit = this.product.profit;
      }
    });

    this.categories = this.produk.categories;
    this.defaultImage = this.produk.defaultImage;
  }

  formatPrice(price: number) {
    return 'Rp. ' + (price ? price.toLocaleString('id-ID') : '0');
  }

  checkValid() {
    if (this.newCategory == '') this.categoryFilled = false;
    else this.categoryFilled = true;

    if (this.newName == '') this.nameFilled = false;
    else this.nameFilled = true;

    if (this.newStock == '') this.stockFilled = false;
    else this.stockFilled = true;

    if (this.newBuyPrice == '' || this.newBuyPrice == '0') this.buyPriceFilled = false;
    else this.buyPriceFilled = true;

    if (this.newSellPrice == '' || this.newSellPrice == '0') this.sellPriceFilled = false;
    else this.sellPriceFilled = true;

    if (/^\d+$/.test(this.newStock)) this.stockValid = true;
    else this.stockValid = false;

    if (/^\d+$/.test(this.newBuyPrice)) this.buyPriceValid = true;
    else this.buyPriceValid = false;

    if (/^\d+$/.test(this.newSellPrice)) this.sellPriceValid = true;
    else this.sellPriceValid = false;
  }

  getWarningMessage(type: string): string {
    if (type == 'stock') {
      if (!this.stockFilled) return "Stok produk harus diisi minimal 0!";
      else if (!this.stockValid) return "Stok produk hanya dapat diisi angka numerik!";
    } else if (type == 'buy') {
      if (!this.buyPriceFilled) return "Harga beli produk harus diisi!";
      else if (!this.buyPriceValid) return "Harga beli produk hanya dapat diisi angka numerik!";
    } else {
      if (!this.sellPriceFilled) return "Harga jual produk harus diisi!";
      else if (!this.sellPriceValid) return "Harga jual produk hanya dapat diisi angka numerik!";
    }

    return "";
  }

  calculateProfit() {
    if ((this.buyPriceFilled && this.buyPriceValid) && (this.sellPriceFilled && this.sellPriceValid))
      this.profit = Number(this.newSellPrice) - Number(this.newBuyPrice);
  }

  saveData() {
    this.checkValid();

    if (!this.categoryFilled || !this.nameFilled || !this.stockFilled || !this.buyPriceFilled || !this.sellPriceFilled ||
      !this.stockValid || !this.buyPriceValid || !this.sellPriceValid
    ) return;

    let category = this.produk.getCategoryIDByName(this.newCategory);
    let stock = Number(this.newStock);
    let buyPrice = Number(this.newBuyPrice);
    let sellPrice = Number(this.newSellPrice);

    if (this.id !== undefined && this.id !== '') { // edit
      this.produk.editProduct(this.id, category, this.newName, this.newURL, this.newNet, this.newBrand, this.newDescription, stock, buyPrice, sellPrice);
    }
    else {
      this.produk.addProduct(category, this.newName, this.newURL, this.newNet, this.newBrand, this.newDescription, stock, buyPrice, sellPrice);
    }

    this.productSaved = true;

    this.clearData();
  }

  clearData() {
    this.newCategory = "";
    this.newName = "";
    this.newURL = this.defaultImage;
    this.newNet = "";
    this.newBrand = "";
    this.newDescription = "";
    this.newStock = "0";
    this.newBuyPrice = "";
    this.newSellPrice = "";

    this.categoryFilled = true;
    this.nameFilled = true;
    this.stockFilled = true;
    this.buyPriceFilled = true;
    this.sellPriceFilled = true;
    this.stockValid = true;
    this.buyPriceValid = true;
    this.sellPriceValid = true;
  }
}
