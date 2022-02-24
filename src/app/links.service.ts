import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor(private http: HttpClient) {}
  getData(x) {
    return this.http.get(
      `https://api.edamam.com/api/nutrition-data?app_id=a36c5305&app_key=dc1e96f06d866456a9f066607974fb67&nutrition-type=cooking&ingr=${x} `
    );
  }
}
