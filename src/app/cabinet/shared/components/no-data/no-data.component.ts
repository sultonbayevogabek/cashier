import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html'
})

export class NoDataComponent {
  @Input() colspan = ''

  constructor() {}
}
