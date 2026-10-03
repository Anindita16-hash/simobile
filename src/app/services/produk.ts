import { Service } from '@angular/core';

@Service()
export class Produk {

    defaultImage = "assets/image/default.png";

    products = [
        {
            name: "Beras Premium Sak",
            url: "",
            quantity: "5000gr",
            description: "",
            category: "Sembako",
            brand: "Merdeka",
            stock: 15,
            buyPrice: 74500,
            sellPrice: 83900,
        },
        {
            name: "Gula Halus",
            url: "",
            quantity: "500gr",
            description: "",
            category: "Sembako",
            brand: "1945",
            stock: 5,
            buyPrice: 8500,
            sellPrice: 15000,
        },
        {
            name: "Telur Ayam Omega Pack",
            url: "",
            quantity: "10 butir",
            description: "",
            category: "Sembako",
            brand: "178",
            stock: 20,
            buyPrice: 28000,
            sellPrice: 33600,
        },
        {
            name: "Bumbu Siap Pakai Nasi Goreng",
            url: "",
            quantity: "45gr",
            description: "",
            category: "Bahan Masak & Bumbu",
            brand: "Lezat",
            stock: 50,
            buyPrice: 2300,
            sellPrice: 4500,
        },
        {
            name: "Sosis Single Original",
            url: "",
            quantity: "65gr",
            description: "",
            category: "Makanan Beku",
            brand: "Salsus",
            stock: 30,
            buyPrice: 7500,
            sellPrice: 8800,
        },
        {
            name: "Ice Cream Vanilla Cup",
            url: "",
            quantity: "700ml",
            description: "",
            category: "Makanan Beku",
            brand: "Eskim",
            stock: 5,
            buyPrice: 23500,
            sellPrice: 35000,
        },
        {
            name: "Air Mineral Botol",
            url: "",
            quantity: "1500ml",
            description: "",
            category: "Minuman",
            brand: "Desa",
            stock: 100,
            buyPrice: 5100,
            sellPrice: 9900,
        },
        {
            name: "Teh Lemon Madu Botol",
            url: "",
            quantity: "350ml",
            description: "",
            category: "Minuman",
            brand: "The",
            stock: 20,
            buyPrice: 2700,
            sellPrice: 3500,
        },
        {
            name: "Pembersih Lantai Lemon Pouch",
            url: "",
            quantity: "800ml",
            description: "",
            category: "Perawatan Rumah",
            brand: "Spotless",
            stock: 15,
            buyPrice: 10900,
            sellPrice: 13100,
        },
        {
            name: "Amplop Putih Kecil",
            url: "",
            quantity: "20 lembar",
            description: "",
            category: "Alat Tulis",
            brand: "Garuda",
            stock: 10,
            buyPrice: 2500,
            sellPrice: 4500,
        }
    ];

    addProduct(p_name: string, p_url: string, p_quantity: string, p_desc: string, p_cat: string, p_brand: string, p_stock: number, p_bprice: number, p_sprice: number) {
        this.products.push({
            name: p_name,
            url: p_url,
            quantity: p_quantity,
            description: p_desc,
            category: p_cat,
            brand: p_brand,
            stock: p_stock,
            buyPrice: p_bprice,
            sellPrice: p_sprice
        });
    }

    editProduct(index: number, product: any) {
        this.products[index] = product;
    }

    searchProduct(keyword: string) {
        const result = [];

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name.toLowerCase().includes(keyword.toLowerCase().trim())) {
                result.push(this.products[i]);
            }
        }

        return result;
    }
}
