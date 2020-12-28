import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitServicesService {

  public urlGit: string;
  public token: string

  constructor(private httpClient: HttpClient) {
    this.urlGit = environment.urlGit;
    this.token = environment.tokenGit;
  }

  /**
   * get all my repos
   */
  public getRepos(): Observable <any> {
    let head = new HttpHeaders().set("Authorization", this.token);
    return this.httpClient.get<any>(`${this.urlGit}users/hectoraramirez/repos`, {headers: head});
  }

  /**
   * get all commits for every repo
   */
  public getCommits(repo: string): Observable <any> {
    let head = new HttpHeaders().set("Authorization", this.token);
    return this.httpClient.get<any>(`${this.urlGit}repos/hectoraramirez/${repo}/commits`, {headers: head});
  }

  /**
   * get commit page
   */
  public getCommitsPage(repo: string, page:number): Observable<any> {
    let head = new HttpHeaders().set("Authorization", this.token);
    return this.httpClient.get<any>(`${this.urlGit}repos/hectoraramirez/${repo}/commits?per_page=6&page=${page}`, {headers: head});
  }
}
