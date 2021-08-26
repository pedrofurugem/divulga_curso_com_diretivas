import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-exibe-curso',
  templateUrl: './exibe-curso.component.html',
  styleUrls: ['./exibe-curso.component.css']
})
export class ExibeCursoComponent {

  @Output() cursoAdicionado = new EventEmitter();
   
    adicionar(nome, carga_horaria) {
     const curso = {
      nome: nome, 
      carga_horaria: carga_horaria
     };
     this.cursoAdicionado.emit(curso)
    }

}
