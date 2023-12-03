import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  showOptions: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  post(body: any): Observable<any> {
    return this.http.post('http://localhost:3333/products', body);
  }

  get(): Observable<any> {
    return this.http.get('http://localhost:3333/products');
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put(`http://localhost:3333/products/${id}`, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3333/products/${id}`);
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(`http://localhost:3333/products/${id}`);
  }
}
