import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule, DatatableModule } from 'truly-ui'; //CoreModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({ theme: 'Cyan' }), // Registering Trulu UI Core Module
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
