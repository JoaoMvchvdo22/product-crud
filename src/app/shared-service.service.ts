import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  showOptions: BehaviorSubject<boolean> = new BehaviorSubject(false);

  apiRestUrl: string = "https://server-product-production.up.railway.app/products";

  constructor(private http: HttpClient) { }

  post(body: any): Observable<any> {
    return this.http.post(this.apiRestUrl, body);
  }

  get(): Observable<any> {
    return this.http.get(this.apiRestUrl);
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put(this.apiRestUrl + `/${id}`, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiRestUrl + `/${id}`);
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(this.apiRestUrl + `/${id}`);
  }
}
