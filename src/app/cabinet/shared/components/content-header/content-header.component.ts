import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})

export class ContentHeaderComponent {
  @Input() headerIcon: string = ''
  @Input() headerTitle: string = ''
  @Input() headerDescription?: string = ''
  @Input() headerDescriptionValue?: string = ''
  @Input() headerLinkURL?: string = ''
  @Input() headerLinkText?: string = 'Назад'
}
