import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {HomeComponent} from "./home.component";
import {BlogComponent} from "./blog.component";
import {WritingComponent} from "./writing.component";
import {BlogFormComponent} from "./blog-form.component";

import {environment} from '../environments/environment';

import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    WritingComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
    AngularFireDatabaseModule,                              // imports firebase/database, only needed for database features
    AngularFireAuthModule,                                  // imports firebase/auth, only needed for auth features
    HttpModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
