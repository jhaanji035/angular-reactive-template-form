import { Injectable } from '@angular/core';
import { Task } from '../Task'
import { Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private API_URL: string = "http://localhost:5000/tasks"
  getTasks(): Observable<Task[]> {
    return  this.http.get<Task[]>(this.API_URL)
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`
    return this.http.put<Task>(url, task, httpOption)
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task, httpOption)
  }
}
