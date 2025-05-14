import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BugService, BugReport } from '../../services/bug.service';

@Component({
  selector: 'app-bug-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bug-create.component.html',
  styleUrl: './bug-create.component.css'
})
export class BugCreateComponent {
  newBug: Partial<BugReport> = {
    title: '',
    description: '',
    assignedTo: '',
    status: 'Open'
  }

  constructor(private bugService: BugService){}

  submitBug() {
    this.bugService.createBug(this.newBug as BugReport).subscribe((result: BugReport) => {
      console.log('Bug created:', result);
      this.newBug = {title: '', description: '', assignedTo: '', status: 'Open' };
    });
  }
}
