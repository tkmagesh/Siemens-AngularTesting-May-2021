import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BugApiService } from "./bugApi.service"

fdescribe("BugApi Service", () => {
    let httpTestingController, bugApi;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [BugApiService],
            imports : [ HttpClientTestingModule]
        });

        httpTestingController = TestBed.inject(HttpTestingController)
        bugApi = TestBed.inject(BugApiService)
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("Should get all the bugs", () => {
        bugApi
            .getAll()
            .subscribe(bugs => {
                expect(bugs).toBeTruthy("No bugs are returned")
                expect(bugs.length).toBe(3, "Not all the bugs are returned")
                const bug = bugs.find(bug => bug.id == 1)
                expect(bug).toBeDefined();
                expect(bug.name).toBe('Data integrity checks failed')
                //verify only open bugs are returned by the getAll() call
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toBe('GET');
        req.flush([
            {
                "id": 1,
                "name": "Data integrity checks failed",
                "isClosed": true,
                "createdAt": "2019-09-27T06:34:45.852Z"
            },
            {
                "id": 2,
                "name": "Server communication failure",
                "createdAt": "2020-11-26T11:17:31.342Z",
                "isClosed": false
            },
            {
                "id": 3,
                "name": "Salary not credited",
                "createdAt": "2020-11-26T11:30:23.139Z",
                "isClosed": false
                }
        ]);
        
    })
})