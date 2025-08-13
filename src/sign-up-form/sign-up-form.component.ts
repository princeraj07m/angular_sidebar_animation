import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  standalone: true
})
export class SignUpFormComponent {
  @Output() formSubmitted = new EventEmitter<void>();
}