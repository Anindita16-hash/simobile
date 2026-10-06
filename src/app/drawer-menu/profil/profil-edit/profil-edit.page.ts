import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Profil } from '../../../services/profil';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.page.html',
  styleUrls: ['./profil-edit.page.scss'],
  standalone: false,
})
export class ProfilEditPage implements OnInit {
  new_url: string= '';
  new_phoneNum: string= '';
  new_email: string= '';
  new_sName: string = '';
  new_sAddress: string='';

  index = 0;
  profiles:any[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private profilService: Profil, private alertController: AlertController) { }

  ngOnInit() {
    this.profiles = this.profilService.profiles;
    this.route.params.subscribe(params => {
      this.index = params['id'];

      const currentProfile = this.profiles[this.index];
      if (currentProfile) {
        this.new_url = currentProfile.url;
        this.new_phoneNum = currentProfile.phoneNumber;
        this.new_email = currentProfile.email;
        this.new_sName = currentProfile.storeName;
        this.new_sAddress = currentProfile.storeAddress;
      }
    });
  }

  async changePhotoUrl() {
    const alert = await this.alertController.create({
      header: 'Ubah URL Foto Profil',
      inputs: [
        {
          name: 'newUrl',
          type: 'text',
          placeholder: 'Masukkan URL gambar baru...',
          value: this.new_url
        }
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Simpan',
          handler: (data) => {
            if (data.newUrl) {
              this.new_url = data.newUrl;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  submitEdit(){
    this.profilService.editProfiles(this.new_url,this.profiles[this.index].userName,this.new_phoneNum,this.new_email,this.new_sName,this.new_sAddress);
    this.router.navigate(['/profil']);
  }

}
