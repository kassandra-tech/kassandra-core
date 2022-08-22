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

export interface RecoveryPasswordFormData {
  userName: string;
  password: string;
}

@Component({
  selector: 'kas-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  host: {
    'class': 'kas-recovery-password'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoveryPasswordComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() ids: {
    usernameField: string;
    passwordField: string;
    passwordFieldToggleButton: string;
    securityTokenField: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    passwordField: 'password-field',
    passwordFieldToggleButton: 'password-toggle-button',
    securityTokenField: 'security-token-field',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<RecoveryPasswordFormData> = new EventEmitter<RecoveryPasswordFormData>();

  public recoveryPasswordForm: FormGroup = this.fb.group({
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

  public onSubmit(formData: RecoveryPasswordFormData) {
    if (this.recoveryPasswordForm.valid && !this.isDisabled) {
      this.submitted = true;
      console.log('onSubmit', formData)
      this.formDataEmit.emit(formData);
    }
  }

}

