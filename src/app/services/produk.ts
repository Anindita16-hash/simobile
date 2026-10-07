import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Produk {

    defaultImage = "assets/image/default.png";

    categories = [
        { id: "C001", name: "Sembako" },
        { id: "C002", name: "Bahan Masak & Bumbu" },
        { id: "C003", name: "Makanan Beku" },
        { id: "C004", name: "Minuman" },
        { id: "C005", name: "Perawatan Rumah" },
        { id: "C006", name: "Alat Tulis" }
    ];

    products = [
        {
            id: "P001",
            name: "Beras Premium Sak",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckxmRUzzTdJPd4zU0d2W3Y_GoQac1PM2cLIrf9G_FKy_rC_xAdlYyht6G&s=10",
            net: "5000gr",
            description: "",
            category: "C001",
            brand: "Merdeka",
            stock: 15,
            buyPrice: 74500,
            sellPrice: 83900,
            profit: 9400,
        },
        {
            id: "P002",
            name: "Gula Pasir",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztqJDXQ6VzkjKIPpkcwpa-mJlRVB-nfDKKM-y1PTj715IaQ7USj0B79ys&s=10",
            net: "500gr",
            description: "",
            category: "C001",
            brand: "1945",
            stock: 5,
            buyPrice: 8500,
            sellPrice: 15000,
            profit: 6500,
        },
        {
            id: "P003",
            name: "Telur Ayam Omega Pack",
            url: "https://akcdn.detik.net.id/visual/2024/12/31/ketahui-perbedaan-telur-biasa-dan-telur-omega-untuk-mpasi-anak_169.jpeg?",
            net: "10 butir",
            description: "",
            category: "C001",
            brand: "178",
            stock: 20,
            buyPrice: 28000,
            sellPrice: 33600,
            profit: 5600,
        },
        {
            id: "P004",
            name: "Bumbu Siap Pakai Nasi Goreng",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkVSqAdYxEq1PF6aC92cBDB-RppeEwuh8-ss9sOVRvLZnF6kghBpfN-0&s=10",
            net: "45gr",
            description: "Lezat Bumbu Siap Pakai Nasi Goreng adalah bumbu instan yang dibuat berdasarkan resep asli nasi goreng Indonesia, rasa masakan rumah favorit keluarga.\n\nLezat Bumbu Siap Pakai Nasi Goreng dibuat tanpa pengawet dan pewarna buatan, juga diracik dari rempah pilihan Indonesia. Satu bungkus cukup untuk 2 porsi nasi goreng.",
            category: "C002",
            brand: "Lezat",
            stock: 50,
            buyPrice: 2300,
            sellPrice: 4500,
            profit: 2200,
        },
        {
            id: "P005",
            name: "Sosis Single Original",
            url: "https://media.suara.com/pictures/653x366/2021/03/25/18530-ilustrasi-sosis.webp",
            net: "65gr",
            description: "",
            category: "C003",
            brand: "Salsus",
            stock: 30,
            buyPrice: 7500,
            sellPrice: 8800,
            profit: 1300,
        },
        {
            id: "P006",
            name: "Ice Cream Vanilla Cup",
            url: "https://saltandbaker.com/wp-content/uploads/2019/10/Homemade-Vanilla-Ice-cream-6.jpg",
            net: "700ml",
            description: "",
            category: "C003",
            brand: "Eskim",
            stock: 5,
            buyPrice: 23500,
            sellPrice: 35000,
            profit: 11500,
        },
        {
            id: "P007",
            name: "Air Mineral Botol",
            url: "https://images.alodokter.com/dk0z4ums3/image/upload/v1770794737/attached_image/air-mineral-yang-baik-untuk-kesehatan.jpg",
            net: "1500ml",
            description: "",
            category: "C004",
            brand: "Desa",
            stock: 100,
            buyPrice: 5100,
            sellPrice: 9900,
            profit: 4800,
        },
        {
            id: "P008",
            name: "Teh Lemon Madu Botol",
            url: "https://img.magnific.com/premium-photo/two-cups-tea-with-lemon-sliced-lemon-bowl-honey-wooden-table-vitamin-warming-drink-vertical-view_107288-4669.jpg?semt=ais_hybrid&w=740&q=80",
            net: "350ml",
            description: "",
            category: "C004",
            brand: "The",
            stock: 20,
            buyPrice: 2700,
            sellPrice: 3500,
            profit: 800,
        },
        {
            id: "P009",
            name: "Pembersih Lantai Lemon Pouch",
            url: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2025/08/06124055/pembersih-lantai.jpg",
            net: "800ml",
            description: "",
            category: "C005",
            brand: "Spotless",
            stock: 15,
            buyPrice: 10900,
            sellPrice: 13100,
            profit: 22000,
        },
        {
            id: "P010",
            name: "Amplop Putih Kecil",
            url: "https://image.made-in-china.com/202f0j00BRnUIPCKZoqz/Cheap-White-Plain-Post-Envelope.webp",
            net: "20 lembar",
            description: "",
            category: "C006",
            brand: "Garuda",
            stock: 10,
            buyPrice: 2500,
            sellPrice: 4500,
            profit: 2000,
        }
    ];

    generateID(): string {
        let num = this.products.length + 1;
        return "P" + num.toString().padStart(3, "0");
    }

    // based on produk form layout
    addProduct(p_cat: string, p_name: string, p_url: string, p_net: string, p_brand: string, p_desc: string, p_stock: number, p_bprice: number, p_sprice: number) {
        this.products.push({
            id: this.generateID(),
            name: p_name,
            url: p_url,
            net: p_net,
            description: p_desc,
            category: p_cat,
            brand: p_brand,
            stock: p_stock,
            buyPrice: p_bprice,
            sellPrice: p_sprice,
            profit: p_sprice - p_bprice,
        });
    }

    editProduct(id: string, p_cat: string, p_name: string, p_url: string, p_net: string, p_brand: string, p_desc: string, p_stock: number, p_bprice: number, p_sprice: number) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products[index].category = p_cat;
            this.products[index].name = p_name;
            this.products[index].url = p_url;
            this.products[index].net = p_net;
            this.products[index].brand = p_brand;
            this.products[index].description = p_desc;
            this.products[index].stock = p_stock;
            this.products[index].buyPrice = p_bprice;
            this.products[index].sellPrice = p_sprice;
            this.products[index].profit = p_sprice - p_bprice;
        }
        return;
    }

    searchProductByName(keyword: string) {
        const result = [];
        let count = 0;
        let max = 10;

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name.toLowerCase().includes(keyword.toLowerCase().trim())) {
                if (count < max) {
                    result.push(this.products[i]);
                    count++;
                } else break;
            }
        }

        return result;
    }

    searchProductByID(id: string): any {
        const index = this.products.findIndex(p => p.id === id);
        return this.products[index] || null;
    }

    getCategoryName(id: string): string {
        const index = this.categories.findIndex(c => c.id === id);
        return this.categories[index]?.name || "";
    }

    getCategoryIDByName(name: string): string {
        const index = this.categories.findIndex(c => c.name === name);
        return this.categories[index]?.id || "";
    }

    updateStock(id: string, quantity: number) { // can add or subtract, for subtract use negative amount
        const product = this.searchProductByID(id);

        if (product.stock + quantity >= 0) product.stock += quantity;
        else product.stock = 0;
    }
}
