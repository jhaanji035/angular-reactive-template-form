import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    setReport(data: any) {
        return this.http.post("http://localhost:8080/add/report", data).subscribe((response) => {
            console.log(response);
        })
    }
}