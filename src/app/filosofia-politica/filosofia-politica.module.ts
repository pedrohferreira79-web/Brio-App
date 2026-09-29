import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilosofiaPoliticaPageRoutingModule } from './filosofia-politica-routing.module';

import { FilosofiaPoliticaPage } from './filosofia-politica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilosofiaPoliticaPageRoutingModule
  ],
  declarations: [FilosofiaPoliticaPage]
})
export class FilosofiaPoliticaPageModule {}
