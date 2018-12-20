import {AbstractControl} from '@angular/forms';


export function zipcodeValidator(control: AbstractControl) {
    if (control && (control.value != null)) {
        const regex = new RegExp('^[0-9]{6}$');

        if (!regex.test(control.value)) {
            return {
                error: 'Ce champs doit être un zip code'
            };
        }
    }
    return null;
}

export function matchValidator(formControlName, title) {
    return (control: AbstractControl) => {
        if (control && (control.value != null)) {
            const field = control.root.get(formControlName);
            if (field) {
                if (control.value !== field.value || control.value === '') {
                    return {
                        error: 'Ce champs doit être le même que le champs ' + title
                    };
                }
            }
        }
        return null;
    };
}


export function inListValidator(list: any) {
    return (control: AbstractControl) => {
        if (control && (control.value != null)) {
            if (list.indexOf(control.value) === -1) {
                return {error: 'Ce champs doit être dans la liste'};
            }
        }
        return null;
    };
}

export function emailValidator(control: AbstractControl) {
    if (control && control.value != null && control.value !== '') {
        const EMAIL_REGEXP = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
        if (!EMAIL_REGEXP.test(control.value)) {
            return {error: 'Ce champs doit être un email valide'};
        }
    }
    return null;
}

export function lengthBetweenValidator(min, max) {
    return (control: AbstractControl) => {
        if (control && (control.value != null)) {
            const length = control.value.length;
            if (length < min || length > max) {
                return {error: 'Ce champs doit contenir entre ' + min + ' et ' + max + ' caractères'};
            } else {
                return null;
            }
        }
        return null;
    };
}

export function regexValidator(regex, text) {
    return (control: AbstractControl) => {
        if (control && (control.value != null)) {
            const CUSTOM_REGEXP = new RegExp(regex);
            if (!CUSTOM_REGEXP.test(control.value)) {
                return {error: text};
            }
        }
        return null;
    };
}

export function dateValidator(control: AbstractControl) {

    if (control && (control.value != null)) {
        if (!Date.parse(control.value)) {
            return {error: 'Ce champs n\'est pas bon'};
        }
    }
    return null;
}


// a faire
// export function uniqueValidator() {
//     return (control: AbstractControl) => {
//
//         if (control && (control.value != null)) {
//
//         }
//         return null;
//     };
// }


export function naturalNumberValidator(control: AbstractControl) {
    if (control && (control.value != null)) {
        const value = control.value.toString(),
            n1 = Math.abs(value),
            n2 = parseInt(value, 10);
        if (!isNaN(n1) && n2 === n1 && n1.toString() === value) {

        } else {
            return {error: 'Ce champs n\'est pas bon'};
        }
    }
    return null;
}

export function booleanValidator(control: AbstractControl) {
    if (control && (control.value != null)) {
        if (typeof (control.value) !== 'boolean') {
            return {error: 'Ce champs n\'est pas bon'};
        }
    }
    return null;
}

export function requiredValidator(control: AbstractControl) {
    if (control && (control.value == null || control.value === false)) {
        return {error: 'Veuillez remplir ce champs'};
    }
    return null;
}