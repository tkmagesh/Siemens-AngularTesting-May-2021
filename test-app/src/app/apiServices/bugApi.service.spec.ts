import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BugApiService } from "./bugApi.service"
import { bugs as mockBugs } from '../mock-data/bugs';

describe("BugApi Service", () => {
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
        req.flush(mockBugs);
    });

    it("Should make POST requests when saving a bug for bugs with id 0", () => {
        const testBugData = {
            id : 0,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        };
        bugApi
            .save(testBugData)
            .subscribe(newBug => {
                expect(newBug).toBeTruthy();
                expect(newBug.id).toBe(100);
            });

        var req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toBe('POST');
        req.flush({
            id : 100,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        });
    })

    it("Should make PUT requests when saving a bug for bugs with non zero id", () => {
        const testBugData = {
            id : 100,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        };
        bugApi
            .save(testBugData)
            .subscribe(newBug => {
                expect(newBug).toBeTruthy();
                expect(newBug.id).toBe(100);
            });

        var req = httpTestingController.expectOne('http://localhost:3000/bugs/100');
        expect(req.request.method).toBe('PUT');
        req.flush({
            id : 100,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        });
    });

    it("Should throw an error when deleting a bug that doesn't exist", () => {
        const bugToRemove = {
            id : 300,
            name : 'Dummy Bug',
            isClosed : false,
            createdAt : new Date()
        };
        bugApi
            .remove(bugToRemove)
            .subscribe( bug => {
                //verify the success criteria
            }, err => {
                expect(err).toBeTruthy();
                expect(err.error.type).toBe('Bug does not exist');
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs/300')
        expect(req.request.method).toBe('DELETE');
        req.error(new ErrorEvent("Bug does not exist"));
    })
})