import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       // 3. Initialize
       AngularFireModule.initializeApp(environment.firebase),
       AngularFirestoreModule, // firestore
       AngularFireAuthModule, // auth
       AngularFireStorageModule, NgbModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
