import { Component, OnInit } from '@angular/core';
import { BugService, BugReport } from '../../services/bug.service';

@Component({
  selector: 'app-bug-list',
  imports: [],
  templateUrl: './bug-list.component.html',
  styleUrl: './bug-list.component.css'
})
export class BugListComponent implements OnInit{
  bugReports: BugReport[] = [];
  
  constructor(private bugService: BugService){}

  ngOnInit(): void{
    this.bugService.getBugs().subscribe((data) => {
      this.bugReports = data;
    });
  }
}
