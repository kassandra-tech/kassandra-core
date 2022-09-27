import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { CardComponent } from "../card/card.component";

export interface Card {
  id: number;
  title: string;
  decoreTitleImage?: string;
  iconPath: string;
  alt: string;
  html: string
}

@Component({
  selector: 'kas-card-home-page',
  templateUrl: './card-home-page.component.html',
  styleUrls: ['./card-home-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHomePageComponent extends CardComponent implements OnInit {

  @Input() card: Card = {
    id: 0,
    title: '',
    iconPath: '',
    alt: '',
    html: ''
  }
  @Input() @HostBinding('class.isSmallView') isSmallView: boolean = false;
  @Input() @HostBinding('class.isBigView') isBigView: boolean = false;
  @Input() textDecoreFirstCharacter = false;
  @Input() imageDecoreFirstCharacter = false;

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
