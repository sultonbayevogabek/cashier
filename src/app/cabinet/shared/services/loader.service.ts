import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  public loader: EventEmitter<boolean> = new EventEmitter()
  
  constructor() {
  }
  
  showLoader(): void {
    this.loader.emit(true)
  }
  
  hideLoader(): void {
    this.loader.emit(false)
  }
}
