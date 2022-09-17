import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kas-kassandra-core',
  template: `
    <p>
      kassandra-core works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class KassandraCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
