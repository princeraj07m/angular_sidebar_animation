import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss'],
  standalone: true
})
export class PageMenuComponent {
  @Output() close = new EventEmitter<void>();
  protected items = [
    'Shoes',
    'Clothing',
    'Accessories',
    'Sale',
    'Gift guide',
    'Customs',
    'Skateboarding',
    'More' 
  ];
}
