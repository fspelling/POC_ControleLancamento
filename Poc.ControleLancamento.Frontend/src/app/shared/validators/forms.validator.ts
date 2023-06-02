import { AbstractControl } from "@angular/forms";

export function valoresPositivos(control: AbstractControl) {
    if (Number(control.value) <= 0 && control.value.length > 0)
      return { valoresPositivos: true }; 
    else
      return null;
  }