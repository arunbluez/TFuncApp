import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, FeaturesComponent, ContactComponent, UpdatesComponent } from './home.component';
import { ThemeModule } from '../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'angular4-carousel';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const HOME_COMPONENTS = [
  HomeComponent,
];


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ThemeModule,
    CarouselModule,
  ],
  declarations:  [
    ...HOME_COMPONENTS,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    ContactComponent,
    UpdatesComponent,
  ],
})
export class HomeModule { }
