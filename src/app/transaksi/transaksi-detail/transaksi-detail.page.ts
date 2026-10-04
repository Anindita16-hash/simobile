import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {

  idTransaksi: string='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idTransaksi = this.route.snapshot.paramMap.get('id') || '';
  
    console.log('ID Transaksi:', this.idTransaksi);
  }

}
