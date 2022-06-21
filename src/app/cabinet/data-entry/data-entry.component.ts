import { Component, OnInit } from '@angular/core'

@Component({
   selector: 'app-data-entry',
   templateUrl: './data-entry.component.html',
   styleUrls: ['./data-entry.component.scss']
})

export class DataEntryComponent implements OnInit {
   public isModalOpen = false

   constructor() {
   }

   ngOnInit(): void {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            this.isModalOpen = false
         }
      })
   }
}
