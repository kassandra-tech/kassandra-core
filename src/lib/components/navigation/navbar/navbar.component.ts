import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `nav[kas-navbar], div[kas-cta]`,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    'class': 'kas-navbar'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
