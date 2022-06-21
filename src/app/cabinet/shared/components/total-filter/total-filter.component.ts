import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-total-filter',
  templateUrl: './total-filter.component.html'
})

export class TotalFilterComponent {
  @Input() perPageDataCount: number = 10
  @Input() isSearchWorking?: boolean = true

  @Output() onChangePerPageDataCount: EventEmitter<number> = new EventEmitter<number>()
  @Output() onSearchValue: EventEmitter<string> = new EventEmitter<string>()

  public searchValue: string = ''
}
