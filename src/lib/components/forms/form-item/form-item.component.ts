import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: `
  input[type="text"][kas-form-item],
  input[type="password"][kas-form-item],
  input[type="email"][kas-form-item],
  textarea[kas-form-item]`,
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
  host: {
    'class': 'kas-form-item'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
