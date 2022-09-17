import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { CardHomePageComponent } from "./card-home-page/card-home-page.component";
import { CardGalleryComponent } from "./card-gallery/card-gallery.component";


@NgModule({
  declarations: [
    CardComponent,
    CardHomePageComponent,
    CardGalleryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    CardHomePageComponent,
    CardGalleryComponent
  ]
})
export class KassandraCardsModule {
}
