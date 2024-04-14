import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})



export class AppComponent {
  title = 'trebol';
  
  menuFuncion = false;
  
  abrirPaginaTrello(){
    const url = 'https://trello.com/';
    window.open(url, '_blank');
  }
  toggleFuncion() {
    this.menuFuncion = !this.menuFuncion;
  }

}
