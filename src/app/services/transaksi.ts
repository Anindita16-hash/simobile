import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Transaksi {

  // Data dummy riwayat:memakai produk di ProdukService (id, nama, harga beli/jual, profit).
  history: any[] = [
  {
    id: '1001',
    date: '1 Oktober 2026, 08:15',
    item: [
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 4,
        subtotal: 14000
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 2,
        subtotal: 19800
      }
    ],
    total: 33800
  },
  {
    id: '1002',
    date: '1 Oktober 2026, 10:30',
    item: [
      {
        product: { id: 'P001', name: 'Beras Premium Sak', brand: 'Merdeka', net: '5000gr', category: 'C001', buyPrice: 74500, sellPrice: 83900, profit: 9400 },
        qty: 1,
        subtotal: 83900
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 2,
        subtotal: 30000
      }
    ],
    total: 113900
  },
  {
    id: '1003',
    date: '1 Oktober 2026, 13:20',
    item: [
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 4,
        subtotal: 14000
      },
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 1,
        subtotal: 8800
      },
      {
        product: { id: 'P006', name: 'Ice Cream Vanilla Cup', brand: 'Eskim', net: '700ml', category: 'C003', buyPrice: 23500, sellPrice: 35000, profit: 11500 },
        qty: 2,
        subtotal: 70000
      }
    ],
    total: 92800
  },
  {
    id: '1004',
    date: '2 Oktober 2026, 09:05',
    item: [
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 2,
        subtotal: 30000
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 5,
        subtotal: 22500
      }
    ],
    total: 52500
  },
  {
    id: '1005',
    date: '2 Oktober 2026, 11:45',
    item: [
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 1,
        subtotal: 33600
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 2,
        subtotal: 19800
      }
    ],
    total: 53400
  },
  {
    id: '1006',
    date: '3 Oktober 2026, 08:40',
    item: [
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 5,
        subtotal: 17500
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 3,
        subtotal: 29700
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 3,
        subtotal: 13500
      }
    ],
    total: 60700
  },
  {
    id: '1007',
    date: '3 Oktober 2026, 15:10',
    item: [
      {
        product: { id: 'P009', name: 'Pembersih Lantai Lemon Pouch', brand: 'Spotless', net: '800ml', category: 'C005', buyPrice: 10900, sellPrice: 13100, profit: 2200 },
        qty: 2,
        subtotal: 26200
      },
      {
        product: { id: 'P010', name: 'Amplop Putih Kecil', brand: 'Garuda', net: '20 lembar', category: 'C006', buyPrice: 2500, sellPrice: 4500, profit: 2000 },
        qty: 4,
        subtotal: 18000
      },
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 1,
        subtotal: 8800
      }
    ],
    total: 53000
  },
  {
    id: '1008',
    date: '4 Oktober 2026, 10:25',
    item: [
      {
        product: { id: 'P001', name: 'Beras Premium Sak', brand: 'Merdeka', net: '5000gr', category: 'C001', buyPrice: 74500, sellPrice: 83900, profit: 9400 },
        qty: 1,
        subtotal: 83900
      },
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 2,
        subtotal: 67200
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 1,
        subtotal: 15000
      }
    ],
    total: 166100
  },
  {
    id: '1009',
    date: '5 Oktober 2026, 12:15',
    item: [
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 2,
        subtotal: 17600
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 1,
        subtotal: 9900
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 3,
        subtotal: 13500
      }
    ],
    total: 41000
  },
  {
    id: '1010',
    date: '6 Oktober 2026, 16:30',
    item: [
      {
        product: { id: 'P006', name: 'Ice Cream Vanilla Cup', brand: 'Eskim', net: '700ml', category: 'C003', buyPrice: 23500, sellPrice: 35000, profit: 11500 },
        qty: 2,
        subtotal: 70000
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 4,
        subtotal: 39600
      },
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 2,
        subtotal: 7000
      },
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 3,
        subtotal: 26400
      }
    ],
    total: 143000
  },
  {
    id: '1011',
    date: '6 Oktober 2026, 18:20',
    item: [
      {
        product: { id: 'P001', name: 'Beras Premium Sak', brand: 'Merdeka', net: '5000gr', category: 'C001', buyPrice: 74500, sellPrice: 83900, profit: 9400 },
        qty: 1,
        subtotal: 83900
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 1,
        subtotal: 15000
      }
    ],
    total: 98900
  },

  {
    id: '1012',
    date: '7 Oktober 2026, 08:35',
    item: [
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 4,
        subtotal: 14000
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 4,
        subtotal: 18000
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 2,
        subtotal: 19800
      }
    ],
    total: 51800
  },
  {
    id: '1013',
    date: '7 Oktober 2026, 11:10',
    item: [
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 2,
        subtotal: 67200
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 2,
        subtotal: 30000
      }
    ],
    total: 97200
  },
  {
    id: '1014',
    date: '7 Oktober 2026, 14:45',
    item: [
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 1,
        subtotal: 8800
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 2,
        subtotal: 19800
      },
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 2,
        subtotal: 7000
      }
    ],
    total: 35600
  },
  {
    id: '1015',
    date: '8 Oktober 2026, 07:50',
    item: [
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 6,
        subtotal: 21000
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 4,
        subtotal: 39600
      }
    ],
    total: 60600
  },

  {
    id: '1016',
    date: '8 Oktober 2026, 10:25',
    item: [
      {
        product: { id: 'P001', name: 'Beras Premium Sak', brand: 'Merdeka', net: '5000gr', category: 'C001', buyPrice: 74500, sellPrice: 83900, profit: 9400 },
        qty: 1,
        subtotal: 83900
      },
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 1,
        subtotal: 33600
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 2,
        subtotal: 30000
      }
    ],
    total: 147500
  },
  {
    id: '1017',
    date: '8 Oktober 2026, 13:40',
    item: [
      {
        product: { id: 'P006', name: 'Ice Cream Vanilla Cup', brand: 'Eskim', net: '700ml', category: 'C003', buyPrice: 23500, sellPrice: 35000, profit: 11500 },
        qty: 3,
        subtotal: 105000
      },
      {
        product: { id: 'P008', name: 'Teh Lemon Madu Botol', brand: 'The', net: '350ml', category: 'C004', buyPrice: 2700, sellPrice: 3500, profit: 800 },
        qty: 3,
        subtotal: 10500
      },
      {
        product: { id: 'P007', name: 'Air Mineral Botol', brand: 'Desa', net: '1500ml', category: 'C004', buyPrice: 5100, sellPrice: 9900, profit: 4800 },
        qty: 3,
        subtotal: 29700
      }
    ],
    total: 145200
  },

  {
    id: '1018',
    date: '8 Oktober 2026, 16:15',
    item: [
      {
        product: { id: 'P009', name: 'Pembersih Lantai Lemon Pouch', brand: 'Spotless', net: '800ml', category: 'C005', buyPrice: 10900, sellPrice: 13100, profit: 2200 },
        qty: 2,
        subtotal: 26200
      },
      {
        product: { id: 'P010', name: 'Amplop Putih Kecil', brand: 'Garuda', net: '20 lembar', category: 'C006', buyPrice: 2500, sellPrice: 4500, profit: 2000 },
        qty: 5,
        subtotal: 22500
      },
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 1,
        subtotal: 8800
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 1,
        subtotal: 4500
      }
    ],
    total: 62000
  },
  {
    id: '1019',
    date: '9 Oktober 2026, 09:30',
    item: [
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 2,
        subtotal: 30000
      },
      {
        product: { id: 'P004', name: 'Bumbu Siap Pakai Nasi Goreng', brand: 'Lezat', net: '45gr', category: 'C002', buyPrice: 2300, sellPrice: 4500, profit: 2200 },
        qty: 2,
        subtotal: 9000
      },
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 3,
        subtotal: 100800
      }
    ],
    total: 139800
  },
  {
    id: '1020',
    date: '10 Oktober 2026, 12:05',
    item: [
      {
        product: { id: 'P001', name: 'Beras Premium Sak', brand: 'Merdeka', net: '5000gr', category: 'C001', buyPrice: 74500, sellPrice: 83900, profit: 9400 },
        qty: 1,
        subtotal: 83900
      },
      {
        product: { id: 'P002', name: 'Gula Pasir', brand: '1945', net: '500gr', category: 'C001', buyPrice: 8500, sellPrice: 15000, profit: 6500 },
        qty: 1,
        subtotal: 15000
      },
      {
        product: { id: 'P003', name: 'Telur Ayam Omega Pack', brand: '178', net: '10 butir', category: 'C001', buyPrice: 28000, sellPrice: 33600, profit: 5600 },
        qty: 2,
        subtotal: 67200
      },
      {
        product: { id: 'P005', name: 'Sosis Single Original', brand: 'Salsus', net: '65gr', category: 'C003', buyPrice: 7500, sellPrice: 8800, profit: 1300 },
        qty: 2,
        subtotal: 17600
      }
    ],
    total: 183700
  }
];

  private counter: number = 1021;

  constructor() { }

  getNextId(): string {
    return `${this.counter}`;
  }

  saveTransaction(items: any[], total: number) {
    // Snapshot item agar riwayat tidak ikut berubah saat stok/produk live berubah.
    // Bentuknya SAMA dengan dummy di atas: {product, qty, subtotal}.
    const snapshot = items.map((it: any) => ({
      product: { ...(it.product || {}) },
      qty: it.qty ?? it.quantity ?? 0,
      subtotal: it.subtotal ?? ((it.qty ?? it.quantity ?? 0) * (it.product?.sellPrice ?? it.price ?? 0)),
    }));
    const newTransaction = {
      id: this.getNextId(),
      date: this.currentDateFormat(),
      item: snapshot,
      total: total

    };

    this.history.unshift(newTransaction);

    this.counter++;


    return newTransaction;


  }

  getHistory(): any[] {
    return this.history;
  }

  getTransactionId(id: any): any {
    const formattedInputId = id.toString().replace('#', '');
    return this.history.find(
      h => h.id.toString().replace('#', '') === formattedInputId);
  }

  private currentDateFormat(): string {
    const now = new Date();
    const tanggal = now.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const jam = now.toLocaleTimeString('id-ID', {
      hour: '2-digit', minute: '2-digit'
    });
    return `${tanggal}, ${jam}`;
  }
}
