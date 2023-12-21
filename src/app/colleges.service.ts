import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  constructor(private httpClient: HttpClient ) { }

  usLinks(){
    console.log("here you can find colleges");
     return this.httpClient.get('http://universities.hipolabs.com/search?country=United+States');
  }
  ukLinks(){
    console.log("here you can find colleges");
    return this.httpClient.get('http://universities.hipolabs.com/search?country=United+kingdom');
 }
 indLinks(){
 console.log("here you can find colleges");
 return this.httpClient.get('http://universities.hipolabs.com/search?country=India');

}


  }

