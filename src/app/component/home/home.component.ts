import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  products = [
    {
      image: './assets/imagen1Front.webp',
      name: 'MINI CONSOLE',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow',
      price: '249$',
      preorder: true
    },
    {
      image: './assets/imagen2Front.webp',
      name: 'AUDIO CONSOLE',
      description: 'Ideal for music & audio. Adaptable to any workflow',
      price: '499$',
      preorder: false
    },
    {
      image: './assets/imagen3Front.webp',
      name: 'PHOTO CONSOLE',
      description: 'Ideal for photo & video. Adaptable to any workflow',
      price: '599$',
      preorder: false
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: false
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: false
    },
    {
      image: './assets/imagen1Front.webp',
      name: 'MINI CONSOLE',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow',
      price: '249$',
      preorder: true
    },
    {
      image: './assets/imagen2Front.webp',
      name: 'AUDIO CONSOLE',
      description: 'Ideal for music & audio. Adaptable to any workflow',
      price: '499$',
      preorder: true
    },
    {
      image: './assets/imagen3Front.webp',
      name: 'PHOTO CONSOLE',
      description: 'Ideal for photo & video. Adaptable to any workflow',
      price: '599$',
      preorder: true
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: true
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: false
    },
    {
      image: './assets/imagen1Front.webp',
      name: 'MINI CONSOLE',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow',
      price: '249$',
      preorder: false
    },
    {
      image: './assets/imagen2Front.webp',
      name: 'AUDIO CONSOLE',
      description: 'Ideal for music & audio. Adaptable to any workflow',
      price: '499$',
      preorder: true
    },
    {
      image: './assets/imagen3Front.webp',
      name: 'PHOTO CONSOLE',
      description: 'Ideal for photo & video. Adaptable to any workflow',
      price: '599$',
      preorder: false
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: false
    },
    {
      image: './assets/imagen4Front.webp',
      name: 'VIDEO CONSOLE',
      description: 'Ideal for video & film. Adaptable to any workflow',
      price: '899$',
      preorder: false
    }

  ];
}
