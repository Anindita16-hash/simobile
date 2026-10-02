import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukPage } from './produk.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage
  },  {
    path: 'produk-detail',
    loadChildren: () => import('./produk-detail/produk-detail.module').then( m => m.ProdukDetailPageModule)
  },
  {
    path: 'produk-form',
    loadChildren: () => import('./produk-form/produk-form.module').then( m => m.ProdukFormPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukPageRoutingModule {}
