import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {

  constructor(public http: HttpClient) { }

  /* generic method to do GET data through http
   @input paramer :  base server url to call
   @input endpoint : api end point
   @input content type : response format of the content type
   */
  public getData(basepath: string, endpoint: string, contenType: string, id: string): Observable<T> {
    const params = new HttpParams();
    let headers = new HttpHeaders();
    let endPoint: string;
    headers = headers.append('Content-Type', contenType);
    headers = headers.set('Accept', contenType);
    endPoint = id ? basepath.concat(endpoint).concat('/').concat(id) : basepath.concat(endpoint);
    return this.http.get<T>(endPoint, { headers, params });

  }
  /* generic method to do POST data through http
  @input postdata - Data to be saved in the database
   @input paramer :  base server url to call
   @input endpoint : api end point
   @input content type : response format of the content type
   */

  public postData(postData: any, basepath: string, endpoint: string, contenType: string, acceptType: string): Observable<T> {

    const params = new HttpParams();
    let headers = new HttpHeaders();
    let endPoint: string;
    headers = headers.append('Content-Type', contenType);
    headers = headers.set('Accept', acceptType);
    endPoint = basepath.concat(endpoint);
    return this.http.post<T>(endPoint, postData, { headers, params });
  }

  /* generic method to do DELETE through http
  @input ID - id of the item to be deleted
   @input paramer :  base server url to call
   @input endpoint : api end point
   @input content type : response format of the content type
   */

  public deleteData(id: string, basepath: string, endpoint: string, contenType: string, acceptType: string) {
    const params = new HttpParams();
    let headers = new HttpHeaders();
    let endPoint: string;
    headers = headers.append('Content-Type', contenType);
    headers = headers.set('Accept', acceptType);
    endPoint = basepath.concat(endpoint).concat('/').concat(id);
    return this.http.delete<T>(endPoint, { headers, params });

  }

  /* generic method to do UPDATE data through http
 @input postdata - Data to be saved in the database
  @input paramer :  base server url to call
  @input endpoint : api end point
  @input content type : response format of the content type
  */
  public putData(postData: any, basepath: string, endpoint: string, contenType: string, acceptType: string, id?: string): Observable<T> {
    const params = new HttpParams();
    let headers = new HttpHeaders();
    let endPoint: string;
    headers = headers.append('Content-Type', contenType);
    headers = headers.set('Accept', acceptType);
    endPoint = id ? basepath.concat(endpoint).concat('/').concat(id) : basepath.concat(endpoint);
    return this.http.put<T>(endPoint, postData, { headers, params });
  }


}
