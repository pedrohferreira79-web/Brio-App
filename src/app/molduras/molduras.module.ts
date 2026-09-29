import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoldurasPageRoutingModule } from './molduras-routing.module';

import { MoldurasPage } from './molduras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoldurasPageRoutingModule
  ],
  declarations: [MoldurasPage]
})
export class MoldurasPageModule {}
