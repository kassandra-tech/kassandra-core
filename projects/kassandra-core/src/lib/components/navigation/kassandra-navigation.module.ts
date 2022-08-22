import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { KassandraCtaModule } from "../ctas/kassandra-cta.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { SeparatorComponent } from "./separator/separator.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SocialNetworksComponent } from "./social-networks/social-networks.component";


@NgModule({
  declarations: [
    NavbarComponent,
    SeparatorComponent,
    ToolbarComponent,
    SocialNetworksComponent
  ],
  imports: [
    CommonModule,
    KassandraCtaModule
  ],
  exports: [
    NavbarComponent,
    SeparatorComponent,
    ToolbarComponent,
    SocialNetworksComponent
  ]
})
export class KassandraNavigationModule {
}
