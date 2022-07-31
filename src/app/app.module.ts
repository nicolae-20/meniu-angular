import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProduseComponent } from './produse/produse.component';
import { AuthComponent } from './auth/auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routingComponent } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { ProduseListaComponent } from './produse/produse-lista/produse-lista.component';
import { ProdusIdComponent } from './produse/produse-lista/produs-id/produs-id.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomPipe } from './custom.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddProductComponent } from './add-product/add-product.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutComponent } from './checkout/checkout.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import {AngularFireFunctionsModule} from '@angular/fire/compat/functions';
import {AngularFireMessagingModule} from '@angular/fire/compat/messaging'
import { AuthService } from './shared/services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerifyEmailComponent } from './verifyemail/verifyemail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduseComponent,
    AuthComponent,
    routingComponent,
    ShoppingEditComponent,
    HeaderComponent,
    ProduseListaComponent,
    ProdusIdComponent,
    ShoppingListComponent,
    CustomPipe,
    AddProductComponent,
    ChildComponent,
    ParentComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
