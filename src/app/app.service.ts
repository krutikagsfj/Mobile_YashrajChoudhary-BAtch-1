import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http:HttpClient) {}
  getMobileList() {
    return this.http.get('assets/mobile.json')
  }
}
