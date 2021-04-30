/* tslint:disable:typedef */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestroService {
  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {}

  getList(){
    return this.http.get(this.url);
  }
  saveRestro(data: any){
    // console.warn('Service', data);
    return this.http.post(this.url, data);
  }
  deleteRestro(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getContentRestro(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateRestro(id: any, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }
}
// @ts-ignore
