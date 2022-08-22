import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { CustomValidators } from "../../../helpers/validators";

export interface SignupFormData {
  userName: string;
  email: string;
  password: string;
  termsAndConditions: boolean;
}

@Component({
  selector: 'kas-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  host: {
    'class': 'kas-signup-form'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() errorMessage = '';
  @Input() ids: {
    usernameField: string;
    emailField: string;
    passwordField: string;
    passwordFieldToggleButton: string;
    confirmPasswordField: string;
    confirmPasswordFieldToggleButton: string;
    termsAndConditionsCheckBox: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    emailField: 'email-field',
    passwordField: 'password-field',
    passwordFieldToggleButton: 'password-toggle-button',
    confirmPasswordField: 'confirm-password-field',
    confirmPasswordFieldToggleButton: 'confirm-password-toggle-button',
    termsAndConditionsCheckBox: 'terms-and-conditions-check-box',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<SignupFormData> = new EventEmitter<SignupFormData>();

  public signupFormGroup: FormGroup = this.fb.group({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        // Validators.minLength(6)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      termsAndConditions: new FormControl(true, [
        Validators.required,
      ])
    }, {
      validators: CustomValidators
        .mustMatch('password', 'confirmPassword')
    }
  );

  public showPassword = false;
  public showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public get f(): { [key: string]: AbstractControl; } {
    return this.signupFormGroup.controls;
  }

  public get userName(): AbstractControl | null {
    return this.signupFormGroup.get('userName');
  }

  public get email(): AbstractControl | null {
    return this.signupFormGroup.get('email');
  }

  public get password(): AbstractControl | null {
    return this.signupFormGroup.get('password');
  }

  public get confirmPassword(): AbstractControl | null {
    return this.signupFormGroup.get('confirmPassword');
  }

  public get termsAndConditions(): AbstractControl | null {
    return this.signupFormGroup.get('termsAndConditions');
  }

  public onSubmit(formData: SignupFormData) {
    if (this.signupFormGroup.valid && !this.isDisabled) {
      this.formDataEmit.emit(formData);
    }
  }

}

