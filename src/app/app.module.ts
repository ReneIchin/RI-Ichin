import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CreateCategoriaComponent } from './components/create-categoria/create-categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { CompraComponent } from './components/compra/compra.component';
import { CreateCompraComponent } from './components/create-compra/create-compra.component';
import { VentaComponent } from './components/venta/venta.component';
import { CreateVentaComponent } from './components/create-venta/create-venta.component';

const routes: Routes  = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  {path:'home', component:HomeComponent},
  {path:'route', component: AppComponent},
  {path:'categoria', component: CategoriaComponent},
  {path:'createCategoria', component: CreateCategoriaComponent},
  {path:'producto', component: ProductoComponent},
  {path:'createProducto', component: CreateProductoComponent},
  {path:'compra', component: CompraComponent},
  {path:'createCompra', component: CreateCompraComponent},
  {path:'venta', component: VentaComponent},
  {path:'createVenta', component: CreateVentaComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CategoriaComponent,
    CreateCategoriaComponent,
    ProductoComponent,
    CreateProductoComponent,
    CompraComponent,
    CreateCompraComponent,
    VentaComponent,
    CreateVentaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
