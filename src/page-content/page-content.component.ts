import { Component, Output, EventEmitter } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
  standalone: true,
  imports: [SignUpModalComponent, SignUpFormComponent]
})
export class PageContentComponent {
  @Output() menuClick = new EventEmitter<void>();
  protected signUpModalOpen = false;
}