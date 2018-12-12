import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BtcRateService {

  constructor(private http: HttpClient) { }

  getRateBtcToEur(): Observable<any> {

    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json');
  
  }
}
