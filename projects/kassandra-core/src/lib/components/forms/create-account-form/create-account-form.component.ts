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

export interface CreateAccountFormData {
  userName: string;
  email: string;
  password: string;
  termsAndConditions: boolean;
}

@Component({
  selector: 'kas-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  host: {
    'class': 'kas-create-account-form'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountFormComponent implements OnInit {

  @Input() isDisabled = false;
  @Input() errorMessage = '';
  @Input() ids: {
    usernameField: string;
    emailField: string;
    passwordField: string;
    showPasswordButton: string;
    confirmPasswordField: string;
    termsAndConditionsCheckBox: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    emailField: 'email-field',
    passwordField: 'password-field',
    showPasswordButton: 'show-password-button',
    confirmPasswordField: 'confirm-password-field',
    termsAndConditionsCheckBox: 'terms-and-conditions-check-box',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<CreateAccountFormData> = new EventEmitter<CreateAccountFormData>();

  public createAccountFormGroup: FormGroup = this.fb.group({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
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

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public get f(): { [key: string]: AbstractControl; } {
    return this.createAccountFormGroup.controls;
  }

  public get userName(): AbstractControl | null {
    return this.createAccountFormGroup.get('userName');
  }

  public get email(): AbstractControl | null {
    return this.createAccountFormGroup.get('email');
  }

  public get password(): AbstractControl | null {
    return this.createAccountFormGroup.get('password');
  }

  public get confirmPassword(): AbstractControl | null {
    return this.createAccountFormGroup.get('confirmPassword');
  }

  public get termsAndConditions(): AbstractControl | null {
    return this.createAccountFormGroup.get('termsAndConditions');
  }

  public onSubmit(formData: CreateAccountFormData) {
    if (this.createAccountFormGroup.valid && !this.isDisabled) {
      this.formDataEmit.emit(formData);
    }
  }
}
