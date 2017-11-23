import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThemeModule } from '../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';

const HOME_COMPONENTS = [
  HomeComponent,
];


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ThemeModule,
  ],
  declarations:  [
    ...HOME_COMPONENTS,
  ],
})
export class HomeModule { }
