import { FormControl, ValidationErrors } from "@angular/forms";

export const cantBeStrider = (control: FormControl): ValidationErrors | null => {
  const inputValue: string | null = control.value;
  if (inputValue !== null) {
    const trimmedValue: string = inputValue.trim().toLowerCase();
    if (trimmedValue === 'strider') {
      return { hasUserNameStrider: true };
    }
  }
  return null;
};

export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
