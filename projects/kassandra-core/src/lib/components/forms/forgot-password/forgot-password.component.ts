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
  password: string;
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
    passwordField: string;
    showPasswordButton: string;
    securityTokenField: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    passwordField: 'password-field',
    showPasswordButton: 'show-password-button',
    securityTokenField: 'security-token-field',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<ForgotPasswordFormData> = new EventEmitter<ForgotPasswordFormData>();

  public forgotPasswordForm: FormGroup = this.fb.group({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    securityToken: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  });

  public showPassword = false;
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
