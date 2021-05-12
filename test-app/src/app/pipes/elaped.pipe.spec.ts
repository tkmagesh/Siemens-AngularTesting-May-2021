import { TestBed } from "@angular/core/testing"

import { ElapsedPipe } from "./elapsed.pipe"

describe("Elapsed Pipe", () => {
    it("Should return elapsed time", () => {
        
        /* const moment = () => ({
            fromNow : () => '4 months ago'
        }); */
        //object returned by the moment(...) call
        const momentObj = jasmine.createSpyObj("momentObj", {
            "fromNow" : "5 months ago"
        });
        
        //spy for the moment() function (created as a method of momentNs object)
        const momentNs = jasmine.createSpyObj("momentNs", {
            "moment" : momentObj
        });

        
        const elapsedPipe = new ElapsedPipe(momentNs.moment);
        const transformedTime = elapsedPipe.transform('sadfas');
        expect(transformedTime).toBe('5 months ago');
        expect(momentNs.moment).toHaveBeenCalledWith('sadfas');
        expect(momentObj.fromNow).toHaveBeenCalledTimes(1);
        
    }) 
})