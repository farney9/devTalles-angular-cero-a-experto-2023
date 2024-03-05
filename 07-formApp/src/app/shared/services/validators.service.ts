import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  // Función de validación personalizada para comparar contraseñas
  public passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get('password');
      const confirmPasswordControl = formGroup.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      const passwordValue = passwordControl.value;
      const confirmPasswordValue = confirmPasswordControl.value;

      // Compara los valores de las contraseñas
      if (passwordValue !== confirmPasswordValue) {
        // Si no coinciden, establece un error de validación
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      }

      // Si coinciden, no hay errores de validación
      confirmPasswordControl.setErrors(null);
      return null;
    };
  }

  isvalidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }



}
