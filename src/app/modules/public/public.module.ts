import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { PublicRoutingModule } from './public-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PublicRoutingModule
  ],
  declarations: [PublicComponent],
})
export class PublicModule { }
