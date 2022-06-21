import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-total-data',
  templateUrl: './total-data.component.html'
})

export class TotalDataComponent implements OnInit, OnChanges {
  @Input() currentPageNumber: number = 1
  @Input() perPageDataCount: number = 10
  @Input() totalDataCount: number = 0

  public from: number = 1
  public to: number = 10

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit() {
    if (this.totalDataCount) this.changeRange()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeRange()
  }

  changeRange() {
    this.from = this.perPageDataCount * (this.currentPageNumber - 1) + 1
    this.to = this.from + (this.perPageDataCount - 1) <= this.totalDataCount ? this.from + (this.perPageDataCount - 1) : this.totalDataCount
  }
}
