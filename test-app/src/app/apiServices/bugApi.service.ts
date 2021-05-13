import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";

@Injectable({
    providedIn : 'root'
})
export class BugApiService{
    private serviceEndPoint = 'http://localhost:3000/bugs';

    constructor(private http : HttpClient){
        
    }
    
    getAll() : Observable<Bug[]>{
        //modify this to return only the open bugs (filter only the open bugs and return)
        return this.http.get<Bug[]>(this.serviceEndPoint);
    }

    getById(id : number) : Observable<Bug>{
        return this.http.get<Bug>(`${this.serviceEndPoint}/${id}`)
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.http.post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.http.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }

    remove(bugData : Bug) : Observable<any>{
        return this.http.delete<Bug>(`${this.serviceEndPoint}/${bugData.id}`);
    }
}