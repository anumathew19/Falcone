import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any>{
    var getPlanetsURL = environment.planetsUrl;

    return this.http.get(getPlanetsURL);
  }

  getVehicles(): Observable<any>{
    var getVehiclesURL = environment.vehiclesUrl;

    return this.http.get(getVehiclesURL);
  }

  getToken() : Observable<any> {
    var getTokenURL = environment.tokenUrl;

    var headers = new HttpHeaders()
    headers = headers.append('Accept', 'application/json');

    return this.http.post(getTokenURL, {}, {headers: headers});
  }

  findFalcone(body) : Observable<any> {
    var findFalconeURL = environment.findingFalconeUrl;

    var headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post(findFalconeURL, body, {headers: headers});
  }
}
