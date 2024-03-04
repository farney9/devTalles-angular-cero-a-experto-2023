import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  public emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const inputValue: string | null = control.value;
    if (inputValue !== null) {
      const trimmedValue: string = inputValue.trim().toLowerCase();
      if (trimmedValue === 'strider') {
        return { hasUserNameStrider: true };
      }
    }
    return null;
  };

  isvalidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

}
