import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CopyrightComponent } from './components/common/copyright/copyright.component';
import { InnerHtmlComponent } from './components/common/inner-html/inner-html.component';
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { KassandraCtaModule } from "./components/ctas/kassandra-cta.module";
import { MultilingualismComponent } from "./components/common/multilingualism/multilingualism.component";

@NgModule({
  declarations: [
    CopyrightComponent,
    InnerHtmlComponent,
    MultilingualismComponent,
    ClickOutsideDirective,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    KassandraCtaModule,
  ],
  exports: [
    CopyrightComponent,
    InnerHtmlComponent,
    MultilingualismComponent,
    ClickOutsideDirective,
    SafeHtmlPipe,
  ]
})
export class KassandraCoreModule {
}
