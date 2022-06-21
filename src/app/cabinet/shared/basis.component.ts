export class BasisComponent {
  public currentPageNumber = 1
  public perPageDataCount = 10
  public dataList: Array<any> = []
  public totalDataCount: number = 0
  public searchValue: string = ''

  constructor() {}
}
