import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ConfigService } from './config/config.service';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
