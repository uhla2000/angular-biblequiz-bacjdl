import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  x = 0;
  
  questao1 = ['Quem matou Abel?', 'c', 'a. Noé', 'b. José', 'c. Caim'];
  questao2 = ['Quem construiu a arca de Noé?', 'b', 'a. José', 'b. Noé', 'c. Moisés'];
  questao3 = ['O segredo da força de Sansão era...', 'a', 'a. sua relação com Jeová', 'b. o cabelo comprido', 'c. muito exercício e boa alimentação'];
  questao4 = ['Rei de Judá: ', 'c', 'a. Salomão', 'b. Davi', 'c. Josias'];
  questao5 = ['Quem foi a mulher que jogou óleo perfumado caro na cabeça e nos pés de Jesus?', 'a', 'a. Maria, irmã de Lázaro', 'b. Maria Madalena', 'c. Marta'];
  questao6 = ['Qual o significado do nome da cidade de Jerusalém?', 'b', 'a. Glória a Deus', 'b. Alicerce da Paz Dupla', 'c. Cidade de Davi'];
  
  questoes_ = [this.questao1, this.questao2, this.questao3, this.questao4, this.questao5, this.questao6];

  questoes = this.shuffle(this.questoes_);

  pergunta = this.questoes[0][0];
  opcao1 = this.questoes[0][2];
  opcao2 = this.questoes[0][3];
  opcao3 = this.questoes[0][4];

  valor = '';
  certas = 0;
  rodadas = 3;
  
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  conferir(radios) {
    radios = document.getElementsByName('alternativas');

    for (var i = 0; i < 3; i++) {
      if (radios[i].checked) {
        this.valor = (radios[i].value);
        break;
      }
    }

    if (this.valor == this.questoes[this.x][1]) {
      alert(' Parabéns! Você acertou!');
      document.getElementById('alerta').innerHTML = 'Parabéns! Continue se esforçando para acertar!';
      this.certas += 1;
    } else {
      alert(' Que pena! Você errou...');
      document.getElementById('alerta').innerHTML = 'Que pena! Você errou! Mas não desanime!'
    }

    for (var i = 0; i < 3; i++) {
      radios[i].checked = false;
    }

    this.x += 1;

    if (this.x === this.rodadas) {
      this.pergunta = [][0];
      this.opcao1 = '';
      this.opcao2 = '';
      this.opcao3 = '';

      alert('Fim do jogo! Você acertou ' + this.certas + ' respostas de ' + this.rodadas + ' questões! ');
      document.getElementById('alerta').innerHTML = 'O jogo acabou! Você acertou ' + this.certas + ' respostas de ' + this.rodadas + ' questões! ';
      document.getElementById('botao').setAttribute('disabled', 'disabled');
            
      document.getElementById('div-botao').innerHTML = "<button id='botao2' class='btn btn-primary' >Jogar Novamente</button>";
      document.getElementById('botao2').addEventListener('click', (event) => this.jogarNovamente(event));
            
    } else {

      this.pergunta = this.questoes[this.x][0];
      this.opcao1 = this.questoes[this.x][2];
      this.opcao2 = this.questoes[this.x][3];
      this.opcao3 = this.questoes[this.x][4];

    }
    
  }
 
  jogarNovamente(event) {
    location.reload();

  }

}

