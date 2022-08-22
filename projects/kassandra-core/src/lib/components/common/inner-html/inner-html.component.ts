import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kas-inner-html',
  templateUrl: './inner-html.component.html',
  styleUrls: ['./inner-html.component.scss'],
  host: {
    'class': 'kas-inner-html'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerHtmlComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
