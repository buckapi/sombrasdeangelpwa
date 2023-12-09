import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Yeoman } from './services/yeoman.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    
  ],
  providers: [DataApiService, Yeoman],
  bootstrap: [AppComponent]
})
export class AppModule { }
