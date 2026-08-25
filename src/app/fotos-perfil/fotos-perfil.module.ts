import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosPerfilPageRoutingModule } from './fotos-perfil-routing.module';

import { FotosPerfilPage } from './fotos-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosPerfilPageRoutingModule
  ],
  declarations: [FotosPerfilPage]
})
export class FotosPerfilPageModule {}
