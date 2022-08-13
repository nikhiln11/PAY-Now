import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamecheckService {

  constructor(private httpClient: HttpClient) { }
  nameCheck(c:string)
  {
      const url = "http://localhost:8081/sdnsearch?c="+c;
      return this.httpClient.get(url);

  }
}
