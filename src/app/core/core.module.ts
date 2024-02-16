import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { MainClockComponent } from './components/main-clock/main-clock.component';


@NgModule({
  declarations: [
    MainNavbarComponent,
    MainFooterComponent,
    MainBannerComponent,
    MainClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainNavbarComponent,
    MainFooterComponent,
    MainBannerComponent,
    MainClockComponent

  ]
})
export class CoreModule { }
