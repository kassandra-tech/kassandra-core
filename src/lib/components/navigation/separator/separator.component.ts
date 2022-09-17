import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `div[kas-separator], span[kas-separator]`,
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
  host: {
    'class': 'kas-separator'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeparatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
