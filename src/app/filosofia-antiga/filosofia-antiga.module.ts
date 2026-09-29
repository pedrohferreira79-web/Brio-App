import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilosofiaAntigaPageRoutingModule } from './filosofia-antiga-routing.module';

import { FilosofiaAntigaPage } from './filosofia-antiga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilosofiaAntigaPageRoutingModule
  ],
  declarations: [FilosofiaAntigaPage]
})
export class FilosofiaAntigaPageModule {}
