import { GitServicesService } from './../../services/git-services.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /**
   * repoName that send table-commits
   */
  @Output() repoName = new EventEmitter();

  /**
   * array projects
   */
  public projects: any [] = [];

  constructor(private gitServices: GitServicesService) { }

  ngOnInit(): void {
    this.getAllRepos();
  }

  /**
   * get all repos form GitApi
   */
  public getAllRepos () {
    this.gitServices.getRepos().subscribe(
      data=> {
        this.projects = data;
      }, error=>{
        console.log(error);
      });
  }

  /**
   * function send repoName to component table-commits
   */
  public getCommits(repo: string) {
    this.repoName.emit(repo);
  }

}
