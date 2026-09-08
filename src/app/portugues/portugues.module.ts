import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortuguesPageRoutingModule } from './portugues-routing.module';

import { PortuguesPage } from './portugues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortuguesPageRoutingModule
  ],
  declarations: [PortuguesPage]
})
export class PortuguesPageModule {}
