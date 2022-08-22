import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { KassandraCtaModule } from "../ctas/kassandra-cta.module";
import { CheckBoxComponent } from "./check-box/check-box.component";
import { FormItemComponent } from "./form-item/form-item.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { RecoveryPasswordComponent } from "./recovery-password/recovery-password.component";
import { ContactUsFormComponent } from "./contact-us-form/contact-us-form.component";


@NgModule({
  declarations: [
    CheckBoxComponent,
    FormItemComponent,
    LoginFormComponent,
    SignupFormComponent,
    RecoveryPasswordComponent,
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
    SignupFormComponent,
    RecoveryPasswordComponent,
    ContactUsFormComponent,
  ]
})
export class KassandraFormsModule {
}
