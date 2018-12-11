import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HeaderTitleComponent } from './header-title.component';
import { ServicesComponent } from './services/services.component';
import { ServicesListComponent } from './services/services-list.component';

import { HttpClientModule } from '@angular/common/http';
import { PortfolioBlockComponent } from './portfolio-block/portfolio-block.component';
import { PortfolioImgComponent } from './portfolio-block/portfolio-img.component';
import { VideoBlockComponent } from './video-block/video-block.component';
import { TwiterBlockComponent } from './twiter-block/twiter-block.component';
import { PhotographerBlockComponent } from './photographer-block/photographer-block.component';
import { TestimonialsBlockComponent } from './testimonials-block/testimonials-block.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTitleComponent,
    ServicesComponent,
    ServicesListComponent,
    PortfolioBlockComponent,
    PortfolioImgComponent,
    VideoBlockComponent,
    TwiterBlockComponent,
    PhotographerBlockComponent,
    TestimonialsBlockComponent,
    ContactBlockComponent,
    FooterBlockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
