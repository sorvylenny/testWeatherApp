import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private urlLWX : string = environment.UrlLWX;
  private urlTOP : string = environment.UrlTOP;

  constructor(private http: HttpClient) { }


  getForecast(location: string): Observable<any> {
    let url = '';
    if (location === 'LWX') {
      url = this.urlLWX;
    } else if (location === 'TOP') {
      url = this.urlTOP;
    } else {
      throw new Error('Location not supported');
    }
    return this.http.get(url);
  }

}
