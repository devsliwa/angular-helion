import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwHttpApiService {

  constructor(public http: HttpClient) { }

  getSwApiData(page: number, item: string): Observable<any> {
    return this.http.get('https://swapi.dev/api/' + item + '/?page=' + page)
  }
}
