import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PageContentComponent } from './page-content/page-content.component';
import { CommonModule } from '@angular/common';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-page-content (menuClick)="menuState = 'open'"></app-page-content>
    <app-page-menu [@openClose]="menuState" (close)="menuState = 'closed'"></app-page-menu>
  `,
  imports: [PageContentComponent, PageMenuComponent, CommonModule],
  animations: [
    trigger('openClose', [
      state('closed', style({ transform: 'translateX(100%)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed <=> open', [animate('0.3s ease-in')]),
    ]),
  ],
})
export class App {
  protected menuState: 'open' | 'closed' = 'closed';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
