import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `button[kas-cta], a[kas-cta], input[kas-cta]`,
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
  host: {
    'class': 'kas-cta'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
