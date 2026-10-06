import { Service } from '@angular/core';

@Service()
export class Transaksi {

    history: any[] = [
        // 10 data transaksi dummy
    {
        id: 1001,
        date: '1 Oktober 2026, 09:15',
        item: [
            { name: 'Beras Premium Sak', quantity: 2, price: 83900 },
            { name: 'Gula Halus', quantity: 1, price: 15000 }
        ],
        total: 182800
    },
    {
        id: 1002,
        date: '1 Oktober 2026, 10:30',
        item: [
            { name: 'Telur Ayam Omega Pack', quantity: 2, price: 33600 }
        ],
        total: 67200
    },
    {
        id: 1003,
        date: '2 Oktober 2026, 08:45',
        item: [
            { name: 'Bumbu Siap Pakai Nasi Goreng', quantity: 3, price: 4500 },
            { name: 'Sosis Single Original', quantity: 2, price: 8800 }
        ],
        total: 31100
    },
    {
        id: 1004,
        date: '2 Oktober 2026, 13:20',
        item: [
            { name: 'Ice Cream Vanilla Cup', quantity: 2, price: 35000 }
        ],
        total: 70000
    },
    {
        id: 1005,
        date: '3 Oktober 2026, 09:50',
        item: [
            { name: 'Air Mineral Botol', quantity: 5, price: 9900 }
        ],
        total: 49500
    },
    {
        id: 1006,
        date: '3 Oktober 2026, 15:10',
        item: [
            { name: 'Teh Lemon Madu Botol', quantity: 4, price: 3500 },
            { name: 'Amplop Putih Kecil', quantity: 2, price: 4500 }
        ],
        total: 23000
    },
    {
        id: 1007,
        date: '4 Oktober 2026, 10:05',
        item: [
            { name: 'Pembersih Lantai Lemon Pouch', quantity: 2, price: 13100 },
            { name: 'Gula Halus', quantity: 2, price: 15000 }
        ],
        total: 56200
    },
    {
        id: 1008,
        date: '4 Oktober 2026, 16:40',
        item: [
            { name: 'Kopi Arabika', quantity: 2, price: 25000 }
        ],
        total: 50000
    },
    {
        id: 1009,
        date: '5 Oktober 2026, 11:25',
        item: [
            { name: 'Beras Premium Sak', quantity: 1, price: 83900 },
            { name: 'Telur Ayam Omega Pack', quantity: 1, price: 33600 }
        ],
        total: 117500
    },
    {
        id: 1010,
        date: '5 Oktober 2026, 17:30',
        item: [
            { name: 'Sosis Single Original', quantity: 3, price: 8800 },
            { name: 'Ice Cream Vanilla Cup', quantity: 1, price: 35000 }
        ],
        total: 61400
    }        
    ];

    saveTransaction(item: any[], total: number): any {
        const newTransaction = {
            id: Date.now(),
            date: this.currentDateFormat(),
            item: item,
            total: total
        };

        this.history.push(newTransaction);
        return newTransaction;
    }

    getHistory(): any[] {
        return this.history;
    }

    getTransactionId(id: number): any {
        for(let i = 0; i < this.history.length; i++) {
            if (this.history[i].id === id) {
                return this.history[i];
            }
        }
        return undefined;
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
