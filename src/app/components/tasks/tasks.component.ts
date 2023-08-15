import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TASKS } from '../../mock-task'
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  tasks: Task[] = []
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }
  toggleItem(task: Task) {
    console.log("toggle clicked", task);
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe(() => {
    })
  }
  onAddTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task).subscribe(() => {
      this.tasks = [...this.tasks, task]
    })
  }
  
}
