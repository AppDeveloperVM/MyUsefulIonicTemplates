import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
