import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const toDateLargerValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const fromDate = control.get('fromDate')
  const toDate = control.get('toDate')
  return new Date(toDate?.value) >= new Date(fromDate?.value) ? null : { notLarger: true }
}
