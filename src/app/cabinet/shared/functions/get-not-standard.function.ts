export function getNotStandardCar(
   brand: string, 
   carNumber: number, 
   trainNumber: string,
   classService: string, 
   seatsCount: number, 
   carType: string): number | null {
   if (brand === 'Афрасияб') {
      if (classService === '1В' && seatsCount === 11 && carNumber === 1) {
         return 10
      }
      if (classService === '1В' && seatsCount === 11) {
         return 14
      }
      if (classService === '2Е' && seatsCount === 36) {
         return 11
      }
      if (classService === '1С' && seatsCount === 22) {
         return 12
      }
      if (classService === '1С' && seatsCount === 26) {
         return 13
      }
      return 11
   }
   if (classService === '1С' && seatsCount === 30) {
      return 15
   }
   if (classService === '1В' && seatsCount === 16) {
      return 16
   }
   if (classService === '1С' && seatsCount === 44) {
      return 17
   }
   if (classService === '2В' && seatsCount === 46) {
      return 18
   }
   if (classService === '1С' && seatsCount === 40) {
      return 19
   }
   if (classService === '2В' && seatsCount === 47) {
      return 20
   }
   if (classService === '2В' && seatsCount === 49) {
      return 21
   }
   if (classService === '2В' && seatsCount === 54) {
      return 22
   }
   if (classService === '2В' && seatsCount === 51) {
      return 23
   }
   if (classService === '2В' && seatsCount === 50) {
      return 24
   }
   if ((classService === '1С' || classService === '1Р' || classService === '2В') && seatsCount === 39) {
      return 25
   }
   if (classService === '2В' && seatsCount === 48 && (trainNumber === '009Ф' || trainNumber === '010Ф')) {
      return 26
   }
   if (classService === '2В' && seatsCount === 48 && (trainNumber === '059Ф' || trainNumber === '060Ф' || trainNumber === '061Ф' || trainNumber === '062Ф')) {
      return 27
   }
   if (['Общий', 'Сидячий', 'Плацкартный', 'Купе', 'Мягкий', 'Люкс'].indexOf(carType) + 1 === 2) {
      return 21
   }
   return null
}
