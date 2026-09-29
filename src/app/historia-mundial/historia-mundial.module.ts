import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaMundialPageRoutingModule } from './historia-mundial-routing.module';

import { HistoriaMundialPage } from './historia-mundial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriaMundialPageRoutingModule
  ],
  declarations: [HistoriaMundialPage]
})
export class HistoriaMundialPageModule {}
