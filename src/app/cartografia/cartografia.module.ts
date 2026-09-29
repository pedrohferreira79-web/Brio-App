import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartografiaPageRoutingModule } from './cartografia-routing.module';

import { CartografiaPage } from './cartografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartografiaPageRoutingModule
  ],
  declarations: [CartografiaPage]
})
export class CartografiaPageModule {}
