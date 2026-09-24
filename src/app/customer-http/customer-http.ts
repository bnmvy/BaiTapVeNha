import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICustomerGroup } from '../icustomer-group/icustomer-group';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  private _url: string = 'app/assets/data/customers.json';

  constructor(private _http: HttpClient) { }

  getCustomerGroups(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || "Server Error"));
  }
}