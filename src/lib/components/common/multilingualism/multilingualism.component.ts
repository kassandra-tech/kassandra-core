import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

export interface Language {
  elementId: string;
  abbr: string;
  url: string;
  url2x: string;
}

@Component({
  selector: 'kas-multilingualism',
  templateUrl: './multilingualism.component.html',
  styleUrls: ['./multilingualism.component.scss'],
  host: {
    'class': 'kas-multilingualism'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultilingualismComponent implements OnInit {

  @Input() languages: Language[] = [];
  @Output() emitLanguageIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public trackByString(index: number, item: any): number {
    return item.abbr;
  }

  public setLanguage(idx: number): void {
    this.emitLanguageIndex.emit(idx);
  }

}
