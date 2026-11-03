import { Component, OnInit } from '@angular/core';
import { GamificationService } from '../services/gamification.service';

@Component({

  selector: 'app-lojabrio',

  templateUrl: './lojabrio.page.html',

  styleUrls: ['./lojabrio.page.scss'],

  standalone: false,

})

export class LojabrioPage implements OnInit {

  xpTotal = 0;
  brioCoins = 0;
  medalhas = 0;

  constructor(
    private gamificationService: GamificationService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.xpTotal =
      this.gamificationService.obterXPTotal();

    this.brioCoins =
      this.gamificationService.obterBrioCoins();

    this.medalhas =
      this.gamificationService.obterConquistas();

  }

}