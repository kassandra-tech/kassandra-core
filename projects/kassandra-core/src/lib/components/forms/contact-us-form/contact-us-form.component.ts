import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  OnDestroy,
  EventEmitter, Input
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import { Subscription } from "rxjs";

export interface ContactUsFormData {
  displayName: string;
  email: string;
  massage: string;
}

@Component({
  selector: 'kas-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
  host: {
    'class': 'kas-contact-us-form'
  },
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsFormComponent implements OnInit, OnDestroy {

  @Input() title: string = '';
  @Input() isDisabled = false;
  @Input() ids: {
    usernameField: string;
    emailField: string;
    messageField: string;
    submitButton: string;
  } = {
    usernameField: 'username-field',
    emailField: 'email-field',
    messageField: 'message-field',
    submitButton: 'submit-button'
  };
  @Output() formDataEmit: EventEmitter<ContactUsFormData> = new EventEmitter<ContactUsFormData>();

  private user: any;
  public contactUsFormGroup: FormGroup | undefined;

  public submitted = false;

  // public subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  ngOnDestroy(): void {
    // this.subscriptions.unsubscribe();
  }

  private getUser(): void {
    // TODO if User exist set initial data in form
    this.initForm(this.user);
  }

  private initForm(user: any): void {
    this.contactUsFormGroup = this.fb.group({
      displayName: [user?.displayName ? user.displayName : '', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: [user?.email ? user.email : '', [
        Validators.required,
        Validators.email,
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(1)
      ]]
    });
  }

  public onSubmit(formData: ContactUsFormData): void {
    if (this.contactUsFormGroup?.valid && !this.isDisabled) {
      this.submitted = true;
      console.log('onSubmit', formData)
      this.formDataEmit.emit(formData);
    }
  }

}

