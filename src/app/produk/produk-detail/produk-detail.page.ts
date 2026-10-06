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

  constructor(private route: ActivatedRoute, private produk: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id !== null || this.id !== '') this.product = this.produk.searchProductByID(this.id);
  }
}
