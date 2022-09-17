import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { CtaComponent } from "../cta/cta.component";

// export type CtaView = 'common' | 'warning' | 'error' | 'info' | 'transparent'

@Component({
  selector: 'button[kas-cta-primary], a[kas-cta-primary], input[kas-cta-primary]',
  templateUrl: './cta-primary.component.html',
  styleUrls: ['./cta-primary.component.scss'],
  host: {
    'class': 'kas-cta-primary'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaPrimaryComponent extends CtaComponent {

  constructor() {
    super();
  }

  @Input() @HostBinding('class.activeClass') activeClass: boolean = false;
  @Input() @HostBinding('class.disabledClass') disabledClass: boolean = false;
  @Input() @HostBinding('class.danger') danger: boolean = false;
  @Input() @HostBinding('class.info') info: boolean = false;
  @Input() @HostBinding('class.transparent') transparent: boolean = false;
  @Input() @HostBinding('class.clear') clear: boolean = false;
  @Input() @HostBinding('class.textColorWhite') textColorWhite: boolean = false;
  @Input() @HostBinding('class.textColorBlack') textColorBlack: boolean = false;
  @Input() @HostBinding('class.hoverTextColorWhite') hoverTextColorWhite: boolean = false;
  @Input() @HostBinding('class.hoverTextColorBlack') hoverTextColorBlack: boolean = false;

}
