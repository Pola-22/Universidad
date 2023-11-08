import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'add', component: AddEditProductComponent},
  {path: 'update/:id', component: AddEditProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
