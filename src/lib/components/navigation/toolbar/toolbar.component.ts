import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kas-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  host: {
    'class': 'kas-toolbar'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
