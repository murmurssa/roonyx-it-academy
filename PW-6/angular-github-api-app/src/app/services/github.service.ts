import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { User } from '../interfaces';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  getUsers(userNames: any): Observable<User[]> {
    return forkJoin(userNames.map(user => this.http.get(`https://api.github.com/users/${user}`)))
  }

  getUserNames(searchInput: string): string[] {
    const userNames: string[] = [];
    searchInput.split(',').forEach(user => { userNames.push(user.trim()); });
    return userNames;
  }
}
