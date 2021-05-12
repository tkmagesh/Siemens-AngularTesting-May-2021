import { TestBed } from '@angular/core/testing';
import { GreeterService } from './greeter.service';
import { LoggerService } from './logger.service';
import { TimeService } from './time.service';

fdescribe("Greeter Service (DI) (3) ", () => {
    let greeter, ls, ts
    beforeEach(() => {
        ts = jasmine.createSpyObj("TimeService", ["getCurrent"]);
        ls = jasmine.createSpyObj("LoggerService", ["log"]);
        TestBed.configureTestingModule({
            providers : [
                { provide : GreeterService, useClass : GreeterService },
                { provide : TimeService, useValue : ts },
                { provide : LoggerService, useValue : ls }
            ]
        });
        greeter = TestBed.inject(GreeterService)
    })
    it("Should greet the user 'Good Morning' when greeted before 12 hours", () => {
        //arrange
           ts.getCurrent.and.returnValue(new Date("10-May-2021 9:00:00"))
            const name = "Magesh",
                expectedResult = "Hi Magesh, Good Morning!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
            
    });
    it("Should greet the user 'Good Day' when greeted after 12 hours", () => {
         //arrange
           ts.getCurrent.and.returnValue(new Date("10-May-2021 14:00:00"))
            const name = "Magesh",
                expectedResult = "Hi Magesh, Good Day!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
    });
    
    it("Should log a message when greeting an user", () => {
        //arrange
            ts.getCurrent.and.returnValue(new Date("10-May-2021 14:00:00"))
            const greeter = TestBed.inject(GreeterService),
                name = "Magesh";
                
        //act
            greeter.greet(name);

        //assert
            expect(ls.log).toHaveBeenCalledOnceWith(`user Magesh greeted`)
    })
})