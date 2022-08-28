import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export interface ForgotPasswordFormData {
  userName: string;
  email: string;
}

@Component({
  selector: 'kas-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    'class': 'kas-forgot-password'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() ids: {
    usernameField: string;
    emailField: string;
    resetButton: string;
  } = {
    usernameField: 'username-field',
    emailField: 'email-field',
    resetButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<ForgotPasswordFormData> = new EventEmitter<ForgotPasswordFormData>();

  public forgotPasswordForm: FormGroup = this.fb.group({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5)
    ]),
  });

  public submitted = false;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public onSubmit(formData: ForgotPasswordFormData) {
    if (this.forgotPasswordForm.valid && !this.isDisabled) {
      this.submitted = true;
      console.log('onSubmit', formData)
      this.formDataEmit.emit(formData);
    }
  }
}
