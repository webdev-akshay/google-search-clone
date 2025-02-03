import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl='https://serpapi.com/search'
  private apiKey='fe249a7da11f3d840dde368801d976daabf7c992739d3d855a5df88d9f7f5d4c'
  constructor(private http:HttpClient) { }

  getData(query:string, page:number=1):Observable<any>{
    const params =new HttpParams()
     .set('q',query)
     .set('engine','google')
     .set('api_key',this.apiKey)
     .set ('start',((page-1)*10).toString())
     .set('num','10')
    
    return  this.http.get(this.apiUrl, {params})
  }
}
