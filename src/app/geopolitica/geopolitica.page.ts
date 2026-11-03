import { Component } from '@angular/core';

@Component({
  selector: 'app-geopolitica',
  templateUrl: './geopolitica.page.html',
  styleUrls: ['./geopolitica.page.scss'],
  standalone: false,
})
export class GeopoliticaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'O que é Geopolítica?',
      options: [
        'O estudo exclusivo dos mapas antigos.',
        'O estudo das relações entre território, poder e política internacional.',
        'O estudo apenas das características climáticas.',
        'A análise somente da economia de um país.',
        'O estudo das características culturais de uma população.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A Geopolítica analisa as relações entre poder, território, Estados e relações internacionais.',
      feedbackIncorrect: 'Incorreto! A Geopolítica estuda principalmente as relações entre território, poder e política internacional.'
    },

    {
      question: 'O que caracteriza um Estado-nação?',
      options: [
        'Um território sem governo definido.',
        'Uma organização formada apenas por empresas.',
        'Uma organização política com território, população e governo.',
        'Uma região que não possui fronteiras.',
        'Um grupo formado somente por pessoas da mesma religião.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! Um Estado possui elementos como território, população e governo soberano.',
      feedbackIncorrect: 'Incorreto! Um Estado possui território, população e uma estrutura de governo, exercendo soberania sobre seu território.'
    },

    {
      question: 'Qual é uma das principais funções da Organização das Nações Unidas (ONU)?',
      options: [
        'Controlar diretamente todos os governos do mundo.',
        'Promover cooperação internacional e buscar a manutenção da paz.',
        'Determinar as moedas utilizadas por todos os países.',
        'Controlar todas as empresas multinacionais.',
        'Definir obrigatoriamente as leis internas de cada país.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! A ONU busca promover a cooperação internacional, a paz e a segurança entre os países.',
      feedbackIncorrect: 'Incorreto! A ONU é uma organização internacional voltada à cooperação entre países, incluindo questões de paz e segurança.'
    },

    {
      question: 'O que significa soberania de um Estado?',
      options: [
        'A capacidade de outro país controlar seu território.',
        'A autoridade de um Estado para governar seu território sem submissão a outro Estado.',
        'A obrigação de seguir todas as decisões de outros países.',
        'A ausência de leis dentro do território.',
        'A impossibilidade de estabelecer relações internacionais.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Soberania está relacionada à autoridade de um Estado para exercer poder sobre seu território e população.',
      feedbackIncorrect: 'Incorreto! Soberania representa a autoridade de um Estado sobre seu território e sua população.'
    },

    {
      question: 'O que é um bloco econômico?',
      options: [
        'Um grupo de países que estabelece acordos de cooperação econômica e comercial.',
        'Uma organização militar formada obrigatoriamente por todos os países.',
        'Uma região sem relações comerciais.',
        'Um grupo de empresas de um único país.',
        'Uma organização responsável por criar fronteiras naturais.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Blocos econômicos são formados por países que estabelecem acordos de cooperação econômica e comercial.',
      feedbackIncorrect: 'Incorreto! Blocos econômicos reúnem países que estabelecem acordos para facilitar a cooperação econômica e comercial.'
    },

    {
      question: 'O que pode ser considerado um conflito geopolítico?',
      options: [
        'Uma disputa relacionada ao poder, território ou interesses entre grupos ou Estados.',
        'Uma mudança normal na temperatura.',
        'A formação de uma nova espécie animal.',
        'Uma alteração na vegetação causada pela chuva.',
        'A criação de uma nova tecnologia.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Conflitos geopolíticos podem envolver disputas territoriais, políticas, econômicas ou estratégicas.',
      feedbackIncorrect: 'Incorreto! Conflitos geopolíticos estão relacionados a disputas envolvendo poder, território ou interesses políticos e estratégicos.'
    },

    {
      question: 'O que foi a Guerra Fria?',
      options: [
        'Uma guerra causada exclusivamente por mudanças climáticas.',
        'Um conflito militar direto entre todos os países europeus.',
        'Uma disputa política, econômica e ideológica entre os blocos liderados por EUA e URSS.',
        'Uma guerra exclusivamente comercial entre países asiáticos.',
        'Um conflito ocorrido apenas dentro da América Latina.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Guerra Fria foi uma disputa política, econômica, militar e ideológica entre os blocos liderados pelos Estados Unidos e pela União Soviética.',
      feedbackIncorrect: 'Incorreto! A Guerra Fria foi marcada pela rivalidade entre os Estados Unidos e a União Soviética e seus respectivos blocos.'
    },

    {
      question: 'Por que os recursos naturais podem ter importância geopolítica?',
      options: [
        'Porque não possuem nenhuma relação com a economia.',
        'Porque recursos como petróleo, gás e água podem influenciar relações econômicas e estratégicas.',
        'Porque todos os países possuem exatamente os mesmos recursos.',
        'Porque recursos naturais existem somente em áreas urbanas.',
        'Porque eles impedem qualquer relação entre os países.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Recursos naturais estratégicos podem influenciar economias, relações internacionais e disputas entre países.',
      feedbackIncorrect: 'Incorreto! Recursos como petróleo, gás e água podem possuir grande importância econômica e estratégica.'
    },

    {
      question: 'O que é uma fronteira internacional?',
      options: [
        'Uma área que separa ou delimita territórios de diferentes Estados.',
        'Uma região que pertence simultaneamente a todos os países.',
        'Uma área sem qualquer importância política.',
        'Uma divisão existente apenas entre cidades.',
        'Uma região determinada exclusivamente pelo clima.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Fronteiras delimitam os territórios sob a autoridade de diferentes Estados.',
      feedbackIncorrect: 'Incorreto! Fronteiras são limites que delimitam os territórios dos diferentes Estados.'
    },

    {
      question: 'O que representa a globalização nas relações internacionais?',
      options: [
        'O isolamento completo dos países.',
        'A diminuição das relações econômicas e culturais entre os países.',
        'O aumento da integração e das conexões econômicas, políticas, culturais e tecnológicas.',
        'A eliminação de todas as fronteiras.',
        'A obrigação de todos os países utilizarem a mesma moeda.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A globalização aumentou a integração e a conexão entre países em diferentes áreas.',
      feedbackIncorrect: 'Incorreto! A globalização está relacionada ao aumento das conexões e da integração entre diferentes partes do mundo.'
    }

  ];


  answer(option: number) {

    if (option === this.quiz[this.perguntaAtual].answer) {

      this.score++;
      this.correct = true;

    } else {

      this.correct = false;

    }

    this.showAnswer = true;
  }


  nextQuestion() {

    this.perguntaAtual++;
    this.showAnswer = false;

  }

}
