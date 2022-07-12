import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduseComponent } from './produse/produse.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipiente', pathMatch: 'full'},
  { path: 'recipies', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProduseComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
