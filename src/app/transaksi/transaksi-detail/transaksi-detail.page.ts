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
    
    // get transaction id from URL
    this.idTransaksi = this.route.snapshot.paramMap.get('id') || '';

    // get transaction from service
    this.transaction = this.transaksi.getTransactionId(this.idTransaksi);

    console.log('ID Transaksi:', this.idTransaksi);
    console.log('Transaction detail:', this.transaction);
    

  }

}
