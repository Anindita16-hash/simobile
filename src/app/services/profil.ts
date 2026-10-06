import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Profil {
    profiles = [
        {
            id: 0,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLCzpM03U9a8maOxL1WE-p7ru0tUvdLcx76AB6KUhRw&s",
            userName: "Nadin",
            phoneNumber: "081234567890",
            email: "nadCraft@gmail.com",
            storeName: "Craft & Art",
            storeAddress: "Jl. Ngagel Madya No. 45, Gubeng, Surabaya",
        },
        {
            id: 1,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxukR4Xm01efguskVi2BC-zA_BMgttCBIM15AW7tpFtQ&s=10",
            userName:"Rizky",
            phoneNumber:"081398765432",
            email:"rizkypratama@yahoo.com",
            storeName:"Gadget Store",
            storeAddress:"Jl. Raya Darmo No. 120, Wonokromo, Surabaya",
        },
        {
            id: 2,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yeZt_Fejr7U9-7LQVo_apmwy_XZZZS2vggSSgOTarA&s=10",
            userName:"Siti",
            phoneNumber:"082143219876",
            email:"sitin@outlook.com",
            storeName:"Hijab & Fashion",
            storeAddress:"Jl. Blauran No. 67, Bubutan, Surabaya",
        },
        {
            id: 3,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmryOQK1ApH9ttsSmkWZDqgR-HxIkT05iSJb6vDnmDlQ&s=10",
            userName:"Ahmad",
            phoneNumber:"085733221144",
            email:"ahmad.fauzi99@gmail.com",
            storeName:"Elektronik & Servis",
            storeAddress:"Jl. Kembang Jepun No. 88, Pabean Cantian, Surabaya",
        },
        {
            id: 4,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLF_AhcGW7otiEdYJ6e2YoL3cpfG3eqbHRPRmoqu6yw&s=10",
            userName:"Dewi",
            phoneNumber:"087855443322",
            email:"dewilestari@gmail.com",
            storeName:"Herbal Nusantara",
            storeAddress:"Jl. Dharmahusada No. 14, Mulyorejo, Surabaya",
        },
        {
            id: 5,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbKDnTCQtUfpqynEJThBCpZW3GAASXowF_HQ0RuDN6w&s=10",
            userName:"Kevin",
            phoneNumber:"081899887766",
            email:"kevinsanjaya@gmail.com",
            storeName:"Auto Parts",
            storeAddress:"Jl. Tunjungan No. 32, Genteng, Surabaya",
        },
        {
            id: 6,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyJHsGqgXCaoUphxCi8zUtXX9LtBk5DRa9vxqiYlDGw&s=10",
            userName:"Putri",
            phoneNumber:"081298761234",
            email:"putri@yahoo.com",
            storeName:"Putri Bakery & Cake",
            storeAddress:"Jl. Rungkut Madya No. 75, Rungkut, Surabaya",
        },
        {
            id: 7,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICgtV2S6nGjfoy8Jxo1FrIF76jKm8nKnH82TLB5vWRg&s=10",
            userName:"Emma",
            phoneNumber:"085644556677",
            email:"emma456@gmail.com",
            storeName:"General store",
            storeAddress:"Jl. Demak No. 110, Bubutan, Surabaya",
        },
        {
            id: 8,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Gbtrjxxymkt5aSk0pJvOmkfCp_WbydpK-3gc_WJZXlCtge3QTnhz9Yg&s=10",
            userName:"Maya",
            phoneNumber:"081322334455",
            email:"maya213@gmail.com",
            storeName:"Maya Skincare & Beauty",
            storeAddress:"Jl. HR Muhammad No. 55, Pradah Kalikendal, Surabaya",
        },
        {
            id: 9,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC11FZWYMisAPebtmAv69Rpi3CiLzVm8VHyahpbciMrA&s=10",
            userName:"Hendra",
            phoneNumber:"087711223344",
            email:"hendra@gmail.com",
            storeName:"Pet shop",
            storeAddress:"Jl. Jemur Andayani No. 20, Wonocolo, Surabaya",
        },
    ]

    addprofile(p_url:string, p_userName:string, p_phoneNumber:string, p_email:string, p_storeName:string, p_storeAddress:string){
        this.profiles.push({
            id: this.profiles.length,
            url: p_url,
            userName: p_userName,
            phoneNumber: p_phoneNumber,
            email: p_email,
            storeName: p_storeName,
            storeAddress: p_storeAddress,
        })
    }
    editProfiles(p_url:string, p_userName:string, p_phoneNumber:string, p_email:string, p_storeName:string, p_storeAddress:string){
        for(let i=0; i<this.profiles.length;i++){
            if(this.profiles[i].userName == p_userName){
                this.profiles[i].url = p_url;
                this.profiles[i].phoneNumber = p_phoneNumber;
                this.profiles[i].email = p_email;
                this.profiles[i].storeName = p_storeName;
                this.profiles[i].storeAddress = p_storeAddress;
            }
        }
    }
}
