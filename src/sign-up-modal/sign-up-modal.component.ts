import { A11yModule } from '@angular/cdk/a11y';
import { Component, EventEmitter, Output } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'],
  standalone: true,
  imports: [SignUpFormComponent, A11yModule]
})
export class SignUpModalComponent {
  @Output() modalClose = new EventEmitter<void>();
}