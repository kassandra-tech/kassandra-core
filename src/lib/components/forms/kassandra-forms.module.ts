import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { KassandraCtaModule } from "../ctas/kassandra-cta.module";
import { CheckBoxComponent } from "./check-box/check-box.component";
import { FormItemComponent } from "./form-item/form-item.component";
import { LoginFormComponent } from "./log-in-form/log-in-form.component";
import { CreateAccountFormComponent } from "./create-account-form/create-account-form.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ContactUsFormComponent } from "./contact-us-form/contact-us-form.component";

@NgModule({
  declarations: [
    CheckBoxComponent,
    FormItemComponent,
    LoginFormComponent,
    CreateAccountFormComponent,
    ForgotPasswordComponent,
    ContactUsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KassandraCtaModule
  ],
  exports: [
    CheckBoxComponent,
    FormItemComponent,
    LoginFormComponent,
    CreateAccountFormComponent,
    ForgotPasswordComponent,
    ContactUsFormComponent,
  ]
})
export class KassandraFormsModule {
}
