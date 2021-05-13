import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Bug } from "../models/bug";

@Injectable({
    providedIn :'root'
})
export class BugApiService{
    constructor (private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(environment.bugServiceEndPoint)
    }

    save(bug : Bug) : Observable<Bug>{
        if (bug.id === 0){
            return this.httpClient
                .post<Bug>(environment.bugServiceEndPoint, bug)
        } else {
            return this.httpClient
                .put<Bug>(`${environment.bugServiceEndPoint}/${bug.id}`, bug)
        }
    }

    remove(bug : Bug) : Observable<any>{
        return this.httpClient
                .delete<Bug>(`${environment.bugServiceEndPoint}/${bug.id}`)
    }
}