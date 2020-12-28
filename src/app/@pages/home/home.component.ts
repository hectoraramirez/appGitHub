import { Component, OnInit } from '@angular/core';
import { GitServicesService } from './../../services/git-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public commits: any[]=[];

  constructor(private gitServices: GitServicesService) { }

  ngOnInit(): void {

  }

  /**
   *  get array data for component table-commits
   * @param event
   */
  public getAllCommits( event: string ) {
    this.gitServices.getCommits(event).subscribe(
      data=>{
        this.commits = data;
      },error=>{
        console.log(error);
      });
  }

}
