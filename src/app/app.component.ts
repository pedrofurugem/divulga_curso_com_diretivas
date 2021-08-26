import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBotao = "Esconder";
  esconder = false;

  //testanto ngFor
  cursos = [
    { nome: "Python", carga_horaria: '50' },
    { nome: "Java", carga_horaria: '50' }
    ];
   
    adicionar (nome, carga_horaria) {
      this.cursos = [{ nome: nome, carga_horaria: carga_horaria}, ...this.cursos];
    }
    
    onAdicionarCurso(curso) {
      this.cursos = [curso, ...this.cursos];
      }
     

 
}
