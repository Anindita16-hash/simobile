import { Component, OnInit } from '@angular/core';
import { Profil } from '../../services/profil';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  profiles: any[] = [];
  
  constructor(private profilService: Profil) { }

  ngOnInit() {
    this.profiles = this.profilService.profiles;
  }

}
