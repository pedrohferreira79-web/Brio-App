import { Component } from '@angular/core';

@Component({
  selector: 'app-brasil-colonia',
  templateUrl: './brasil-colonia.page.html',
  styleUrls: ['./brasil-colonia.page.scss'],
  standalone: false,
})
export class BrasilColoniaPage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [

    {
      question: 'Qual era um dos principais objetivos de Portugal ao colonizar o Brasil?',
      options: [
        'Desenvolver universidades em todas as regiões.',
        'Explorar recursos naturais e obter vantagens econômicas.',
        'Construir uma sociedade totalmente independente.',
        'Eliminar o comércio com outros países.',
        'Transformar o Brasil em uma colônia espanhola.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Portugal buscava explorar os recursos naturais e obter lucros por meio das atividades econômicas da colônia.',
      feedbackIncorrect: 'Incorreto! A colonização portuguesa tinha como um dos principais objetivos explorar os recursos e gerar riquezas para Portugal.'
    },

    {
      question: 'O que eram as capitanias hereditárias?',
      options: [
        'Divisões territoriais entregues a particulares para administrar e desenvolver.',
        'Pequenas cidades independentes governadas pelos indígenas.',
        'Territórios controlados diretamente pela Espanha.',
        'Regiões destinadas exclusivamente à mineração.',
        'Áreas utilizadas apenas para atividades religiosas.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! As capitanias hereditárias eram grandes divisões territoriais entregues a donatários, responsáveis por sua administração e colonização.',
      feedbackIncorrect: 'Incorreto! Eram grandes faixas de terra entregues pela Coroa portuguesa a donatários para administrar e desenvolver.'
    },

    {
      question: 'Qual atividade econômica teve grande importância no Brasil durante os séculos XVI e XVII?',
      options: [
        'Produção de automóveis.',
        'Extração de petróleo.',
        'Produção de açúcar.',
        'Indústria tecnológica.',
        'Exportação de café em larga escala.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A produção açucareira foi uma das principais atividades econômicas da colônia, especialmente no Nordeste.',
      feedbackIncorrect: 'Incorreto! A produção de açúcar teve grande importância econômica durante os primeiros séculos da colonização.'
    },

    {
      question: 'Qual era a principal função dos engenhos de açúcar?',
      options: [
        'Produzir ferramentas de mineração.',
        'Transformar a cana-de-açúcar em açúcar para comercialização.',
        'Construir embarcações para Portugal.',
        'Armazenar exclusivamente produtos indígenas.',
        'Produzir tecidos para o mercado europeu.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os engenhos eram estruturas destinadas ao processamento da cana-de-açúcar e à produção de açúcar.',
      feedbackIncorrect: 'Incorreto! Os engenhos eram responsáveis por processar a cana-de-açúcar e produzir açúcar para o comércio.'
    },

    {
      question: 'Qual foi a principal característica do trabalho utilizado na produção açucareira colonial?',
      options: [
        'Trabalho exclusivamente voluntário.',
        'Trabalho assalariado com direitos trabalhistas.',
        'Utilização predominante de máquinas industriais.',
        'Trabalho escravizado, principalmente de africanos e seus descendentes.',
        'Trabalho realizado somente por funcionários portugueses.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! A economia açucareira utilizou amplamente o trabalho escravizado, principalmente de africanos e seus descendentes.',
      feedbackIncorrect: 'Incorreto! A produção açucareira colonial foi marcada pelo uso intenso da mão de obra escravizada.'
    },

    {
      question: 'Qual foi a importância da mão de obra indígena nos primeiros anos da colonização?',
      options: [
        'Foi utilizada em atividades como extração do pau-brasil e outros trabalhos, apesar da resistência indígena.',
        'Foi completamente proibida desde o início da colonização.',
        'Era utilizada exclusivamente na administração portuguesa.',
        'Substituiu toda a mão de obra africana até o século XIX.',
        'Era composta somente por trabalhadores remunerados.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! Muitos povos indígenas foram submetidos à exploração do trabalho, especialmente nos primeiros períodos da colonização, mas também resistiram a essa dominação.',
      feedbackIncorrect: 'Incorreto! A mão de obra indígena foi explorada em diversas atividades coloniais, embora muitos povos tenham resistido à escravização e à ocupação de seus territórios.'
    },

    {
      question: 'O que contribuiu para o desenvolvimento da mineração no Brasil durante o século XVIII?',
      options: [
        'A descoberta de grandes jazidas de ouro e diamantes.',
        'A construção das primeiras fábricas de automóveis.',
        'A independência política do Brasil.',
        'A descoberta de reservas de petróleo.',
        'A substituição da agricultura pela indústria moderna.'
      ],
      answer: 0,
      feedbackCorrect: 'Correto! A descoberta de ouro e diamantes, principalmente na região de Minas Gerais, impulsionou a mineração no século XVIII.',
      feedbackIncorrect: 'Incorreto! A descoberta de jazidas de ouro e diamantes foi fundamental para o crescimento da mineração colonial.'
    },

    {
      question: 'O que foi a Inconfidência Mineira, ocorrida em 1789?',
      options: [
        'Uma revolta contra a invasão holandesa.',
        'Um movimento que defendia a manutenção do domínio português.',
        'Um movimento de contestação ao domínio português e à cobrança de impostos.',
        'Uma guerra entre indígenas e espanhóis.',
        'Uma revolta organizada exclusivamente por pessoas escravizadas.'
      ],
      answer: 2,
      feedbackCorrect: 'Correto! A Inconfidência Mineira foi um movimento de caráter separatista que contestava o domínio português e a cobrança de impostos.',
      feedbackIncorrect: 'Incorreto! A Inconfidência Mineira foi um movimento de contestação ao domínio português, relacionado também à cobrança de impostos sobre a mineração.'
    },

    {
      question: 'Qual foi uma das principais consequências da invasão holandesa no Nordeste brasileiro no século XVII?',
      options: [
        'O fim imediato da produção de açúcar.',
        'A ocupação de áreas produtoras de açúcar e mudanças na administração dessas regiões.',
        'A independência política de Pernambuco.',
        'A transferência definitiva da capital para o Rio de Janeiro.',
        'A extinção do comércio atlântico.'
      ],
      answer: 1,
      feedbackCorrect: 'Correto! Os holandeses ocuparam áreas importantes da produção açucareira nordestina, especialmente Pernambuco, entre 1630 e 1654.',
      feedbackIncorrect: 'Incorreto! A presença holandesa atingiu regiões importantes da economia açucareira, principalmente Pernambuco.'
    },

    {
      question: 'O que foi o Quilombo dos Palmares?',
      options: [
        'Uma cidade fundada pela Coroa portuguesa.',
        'Uma região de mineração de ouro.',
        'Um centro comercial controlado pelos holandeses.',
        'Uma comunidade formada por pessoas que resistiam à escravidão.',
        'Uma organização criada para administrar os engenhos.'
      ],
      answer: 3,
      feedbackCorrect: 'Correto! Palmares foi um importante conjunto de comunidades de resistência à escravidão, formado principalmente por africanos e seus descendentes.',
      feedbackIncorrect: 'Incorreto! O Quilombo dos Palmares foi um símbolo de resistência à escravidão e de luta pela liberdade.'
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
