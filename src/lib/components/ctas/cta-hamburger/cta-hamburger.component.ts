import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'kas-cta-hamburger',
  templateUrl: './cta-hamburger.component.html',
  styleUrls: ['./cta-hamburger.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaHamburgerComponent implements OnInit {

  @Input() state = false;
  @Input() elementId = 'cta-hamburger'

  constructor() {
  }

  ngOnInit(): void {
  }

}
