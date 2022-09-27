import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CtaComponent } from "./cta/cta.component";
import { CtaPrimaryComponent } from "./cta-primary/cta-primary.component";
import { CtaHamburgerComponent } from "./cta-hamburger/cta-hamburger.component";


@NgModule({
  declarations: [
    CtaComponent,
    CtaPrimaryComponent,
    CtaHamburgerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CtaComponent,
    CtaPrimaryComponent,
    CtaHamburgerComponent
  ]
})
export class KassandraCtaModule {
}
