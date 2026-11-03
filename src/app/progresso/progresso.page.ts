import { Component, OnInit } from '@angular/core';
import { GamificationService } from '../services/gamification.service';

@Component({

  selector: 'app-progresso',

  templateUrl: './progresso.page.html',

  styleUrls: ['./progresso.page.scss'],

  standalone: false,

})

export class ProgressoPage implements OnInit {

  xpTotal = 0;

  exercicios = 0;
  dias = 0;
  tempoMinutos = 0;
  conquistas = 0;
  brioCoins = 0;

  porcentagemXP = 0;


  constructor(
    private gamificationService: GamificationService
  ) { }


  ngOnInit() {

  }


  ionViewWillEnter() {

  this.xpTotal =
    this.gamificationService.obterXPTotal();

}


  atualizarDados() {

    // XP de todas as matérias
    this.xpTotal = this.gamificationService.obterXPTotal();


    // Resumo geral
    this.exercicios = this.gamificationService.obterExercicios();

    this.dias = this.gamificationService.obterDias();

    this.tempoMinutos = this.gamificationService.obterTempoMinutos();

    this.conquistas = this.gamificationService.obterConquistas();

    this.brioCoins = this.gamificationService.obterBrioCoins();


    // Calcula a porcentagem da barra
    // O objetivo atual é 100.000 XP

    this.porcentagemXP =
      Math.min((this.xpTotal / 100000) * 100, 100);

  }

  


  obterTempoFormatado(): string {

    const horas = Math.floor(this.tempoMinutos / 60);

    const minutos = this.tempoMinutos % 60;


    if (horas === 0) {

      return `${minutos}min`;

    }


    if (minutos === 0) {

      return `${horas}h`;

    }


    return `${horas}h ${minutos}min`;

  }

  

}
