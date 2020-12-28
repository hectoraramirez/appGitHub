import { Component, OnInit } from '@angular/core';
import { GitServicesService } from './../../services/git-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public repoPage: string='';
  public commits: any[]=[];
  public pagesArray: number[]=[];

  constructor(private gitServices: GitServicesService) { }

  ngOnInit(): void {

  }

  /**
   *  get array data for component table-commits
   * @param event
   */
  public getAllCommits( event: string ) {
    this.repoPage = event;
    this.pagesArray = [];
    this.gitServices.getCommits(event).subscribe(
      data=>{
        const commits = data;
        if ( commits.length > 6) {

          let idP = 0;
          let pages = commits.length/6;

          while (idP < pages) {
            this.pagesArray.push(idP+1);
            idP++;
          }

          this.gitServices.getCommitsPage(event, 1).subscribe(page=>{
            this.commits = page;
          });

        } else {
          this.commits = commits;
        }
      },error=>{
        console.log(error);
      });
  }

  /**
   * git commits for pages
   */
  public getCommitPage(page:number){
    this.gitServices.getCommitsPage(this.repoPage, page).subscribe(data=>{
      this.commits = data;
    });
  }
}
