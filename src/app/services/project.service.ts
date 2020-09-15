import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  getProjects(){
    const url = 'https://run.mocky.io/v3/2774a0ea-4f9e-47cb-bd73-991d1f8d86d8'
      return this.http.get(url)
  }

}
