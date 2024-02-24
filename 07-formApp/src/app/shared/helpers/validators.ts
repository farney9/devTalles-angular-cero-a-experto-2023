import { FormControl } from "@angular/forms";





export const cantBeStrider = (control: FormControl) => {

  const inputValue: string = control.value.trim().toLowerCase();

  if (inputValue === 'strider') {
    return {
      hasUserNameStrider: true
    }
  }

  return null;
}
