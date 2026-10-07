import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../../services/transaksi';

@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {

  idTransaksi: string='';
  transaction: any;

  constructor(
    private route: ActivatedRoute, private transaksi: Transaksi
  ) { }

  ngOnInit() {
    // Ambil id dari URL via params subscribe (pola yang sama dengan produk-detail, materi Week 2 Routing).
    // getTransactionId sudah toleran terhadap prefix '#' untuk kompatibilitas data lama.
    this.route.params.subscribe(params => {
      this.idTransaksi = params['id'] || '';
      this.transaction = this.transaksi.getTransactionId(this.idTransaksi);
    });
  }

}
