import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  filmIcon = faCaretDown;
  selecction: number = 1;
  showMenu: boolean = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
