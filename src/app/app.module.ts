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

const routes: Routes  = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  {path:'home', component:HomeComponent},
  {path:'route', component: AppComponent},
  {path:'categoria', component: CategoriaComponent},
  {path:'createCategoria', component: CreateCategoriaComponent},
  {path:'producto', component: ProductoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CategoriaComponent,
    CreateCategoriaComponent,
    ProductoComponent
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
