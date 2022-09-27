import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'kas-card, [kas-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'kas-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() @HostBinding('class.isColored') isColored: boolean = false;
  @Input() @HostBinding('class.bigView') bigView: boolean = false;
  @Input() @HostBinding('class.mediumView') mediumView: boolean = false;
  @Input() @HostBinding('class.scrollable') scrollable: boolean = false;
  @Input() @HostBinding('class.clear') clear: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
