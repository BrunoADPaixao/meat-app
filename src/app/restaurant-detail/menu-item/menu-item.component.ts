import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter(); // implementando emissão de um evento // objeto add contendo o item do evento (item que foi clicado)

  constructor() { }

  ngOnInit() {
    console.log(this.menuItem)
  }

  emitAddEvent(){
    
    this.add.emit(this.menuItem)
  }

}
