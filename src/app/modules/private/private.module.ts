import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { PrivateRoutingModule } from './private-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PrivateRoutingModule
  ],
  declarations: [PrivateComponent],
})
export class PrivateModule { }
