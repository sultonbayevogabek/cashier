export class PaginationService {
  constructor() {}

  setPerPageDataCount(pageName: string, pageCount: number) {
    localStorage.setItem(pageName, pageCount.toString())
  }

  getPerPageDataCount(pageName: string): number {
    if (localStorage.getItem(pageName)) {
      return Number(localStorage.getItem(pageName))
    }

    return 10
  }
}
