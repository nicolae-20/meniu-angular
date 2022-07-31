import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduseComponent } from './produse/produse.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { VerifyEmailComponent } from './verifyemail/verifyemail.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProduseComponent },
  { path: 'recipies', component: NavbarComponent },
  { path: 'login', component: AuthComponent },
  { path: 'products/:productId', component: ProduseComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'shopping-cart', component: ShoppingListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, PageNotFoundComponent]