import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataScene } from './DataScene';

@Injectable({
  providedIn: 'root'
})
export class CtrlphsService {
  private dataUrl = 'static-pages/MyFile.json';

  constructor(private http:HttpClient) { }

  getData(name:string):Observable<DataScene>{
    return this.http.get<DataScene[]>(this.dataUrl).pipe(map(x => { return x.find(xx => xx.Name === name) }));
  }


}
