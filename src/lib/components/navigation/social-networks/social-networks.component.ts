import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kas-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
  host: {
    'class': 'kas-social-networks'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworksComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
