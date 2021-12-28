import {HttpHeaders} from '@angular/common/http';

export const EMPTY_STRING = '';
export const AUTH_FAIL_MSG = 'Echec authentification';
export const SUCESS = 'SUCCES';

export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
