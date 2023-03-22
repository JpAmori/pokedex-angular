import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos criados por mim
import { PagesModule } from './pages/pages.module';



// Componentes criados por mim
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
