import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
      { path: 'produk', loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule) },
      { path: 'transaksi', loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule) },
      { path: 'keranjang', loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule) },
    ]
  },
  {
    path: 'tentang',
    loadChildren: () => import('./drawer-menu/tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./drawer-menu/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then( m => m.TransaksiPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
