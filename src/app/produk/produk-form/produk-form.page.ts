import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  defaultImage: string = "";

  constructor(private route: ActivatedRoute, private produk: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id !== null || this.id !== '') this.product = this.produk.searchProductByID(this.id);
    this.defaultImage = this.produk.defaultImage;
  }

}
