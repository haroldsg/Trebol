import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="panel">
      <img class="fondo" src="assets/FondoMorado.jpg">
      <div class="registro">
        <h1 class="titulo">Trebol reúne todas tus tareas, compañeros de equipo y herramientas</h1>
        <p class="sub-texto">Mantén todo en el mismo lugar, incluso si tu equipo 
          <br>no lo está.</p>
          <div class="separado">
            <input class="barra-texto" type="text" id="email" name="email" placeholder="Introduce tu email"> 
            <button class="boton">Registrate</button>
          </div>
      </div>
      <div class="decoracion">
      <img src="assets/imagenDecoracion.png">
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
