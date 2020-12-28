import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TableCommitsComponent } from './table-commits/table-commits.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    TableCommitsComponent,
    ProjectsComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    TableCommitsComponent,
    ProjectsComponent,
  ]
})
export class SharedModule { }
