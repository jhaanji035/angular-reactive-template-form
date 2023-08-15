import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text!: string
  day!: string
  reminder!: boolean
  showAddTask!: boolean
  subscription: Subscription
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value
    })
  }
  

  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter()
  handleSubmit(): void | false {
    if (!this.text) {
      alert("please add a task")
      return false
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onSubmitTask.emit(newTask)
  }
}
