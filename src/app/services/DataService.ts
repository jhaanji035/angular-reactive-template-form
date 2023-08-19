import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import { Observable } from "rxjs";
import { IReport } from "../model/IReport";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}

    setReport(data: any) {
        return this.http.post("http://localhost:8080/api/add/report", data).subscribe((response) => {
            console.log(response);
        })
    }

    getReport(): Observable<any>{
        return this.http.get("http://localhost:8080/api/report");
    }
}