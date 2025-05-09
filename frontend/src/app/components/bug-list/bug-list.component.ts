import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugService, BugReport } from '../../services/bug.service';

@Component({
  selector: 'app-bug-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
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
