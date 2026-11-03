import { Component, OnInit } from '@angular/core';
import { GamificationService } from '../services/gamification.service';

@Component({

  selector: 'app-matematica',

  templateUrl: './matematica.page.html',

  styleUrls: ['./matematica.page.scss'],

  standalone: false,

})

export class MatematicaPage implements OnInit {

  xpMateria = 0;
  progressoMatematica = 0;

  constructor(
    private gamificationService: GamificationService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.xpMateria =
      this.gamificationService.obterXP('matematica');

    this.progressoMatematica =
      this.gamificationService.obterProgressoMatematica();

  }

}