import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export interface LoginFormData {
  userName: string;
  password: string;
}

@Component({
  selector: 'kas-login-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  host: {
    'class': 'kas-login-form'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() errorMessage = '';
  @Input() ids: {
    usernameField: string;
    passwordField: string;
    showPasswordButton: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    passwordField: 'password-field',
    showPasswordButton: 'show-password-button',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<LoginFormData> = new EventEmitter<LoginFormData>();

  public loginFormGroup: FormGroup = this.fb.group({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  public showPassword = false;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public onSubmit(formData: LoginFormData) {
    if (this.loginFormGroup.valid && !this.isDisabled) {
      this.formDataEmit.emit(formData);
    }
  }
}
