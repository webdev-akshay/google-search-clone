import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl='https://serpapi.com/search'
  private apiKey='fe249a7da11f3d840dde368801d976daabf7c992739d3d855a5df88d9f7f5d4c'
  constructor(private http:HttpClient) { }

  getData(query:string):Observable<any>{
    const params={
      q:query,
      api_key:this.apiKey
    }
    return  this.http.get(this.apiUrl, {params})
  }
}
