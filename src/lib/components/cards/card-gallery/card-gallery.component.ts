import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

export interface CardGallery {
  id: number;
  url: string;
  url2x: string;
  urlD?: string;
  urlD2x?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'kas-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardGalleryComponent extends CardComponent implements OnInit {

  @Input() isMobile = true;
  @Input() card: CardGallery = {
    id: 0,
    url: '',
    url2x: '',
    urlD: '',
    urlD2x: '',
    title: '',
    description: ''
  };

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
