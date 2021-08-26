import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { ExibeCursoComponent } from './exibe-curso/exibe-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoCartaoComponent,
    ExibeCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
