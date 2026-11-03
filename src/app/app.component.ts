import { Component } from '@angular/core';
import { GamificationService } from './services/gamification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(
    private gamificationService: GamificationService
  ) {

    this.gamificationService.iniciarMonitoramento();

  }

}