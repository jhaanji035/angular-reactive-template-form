import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  subscribtion!: Subscription
  constructor(private uiService: UiService) {
    this.subscribtion = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value
    })
  }
  title: string = "Task Tracker"
  showAddTask: boolean = false
  ngOnInit() { 
  }
  toggleAddTask() {
    console.log("Message received");
    this.uiService.toggleAddTask()
  }
}
