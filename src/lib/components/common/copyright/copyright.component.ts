import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export interface CopyrightData {
  name: string;
  year: number;
}

@Component({
  selector: 'kas-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  host: {
    'class': 'kas-copyright'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyrightComponent implements OnInit {

  @Input() data: CopyrightData = {
    name: 'Kassandra',
    year: 2022,
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
