import {HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpHandler} from '@angular/common/http';
import 'rxjs/Rx';

import {User} from './user.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(name: string): Observable<User[]> {
    return this.http.get('https://api.github.com/search/users?q=' + name)
      .map((data: User[]) => {
        return data['items'].slice(0,10);
      }, error => {
        Observable.throw(error);
        }
      );
  }
}
