import { TestBed } from '@angular/core/testing';
import { GreeterService } from './greeter.service';
import { LoggerService } from './logger.service';
import { TimeService } from './time.service';

fdescribe("Greeter Service (DI) (2)", () => {
    let greeter, ts, ls;

    beforeEach(() => {
        TestBed.configureTestingModule({
                providers : [
                    GreeterService,
                    LoggerService,
                    TimeService
                ]
            });
        greeter = TestBed.inject(GreeterService)
        ts = TestBed.inject(TimeService)
        ls = TestBed.inject(LoggerService)
    });

    it("Should greet the user 'Good Morning' when greeted before 12 hours", () => {
        //arrange
            spyOn(ts, "getCurrent").and.returnValue(new Date("10-May-2021 9:00:00"));
            spyOn(ls, "log");

            const name = "Magesh",
                expectedResult = "Hi Magesh, Good Morning!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
            
    });

    it("Should greet the user 'Good Day' when greeted after 12 hours", () => {
        //arrange
            spyOn(ts, "getCurrent").and.returnValue(new Date("10-May-2021 14:00:00"))
            spyOn(ls, "log")

            const name = "Magesh",
                expectedResult = "Hi Magesh, Good Day!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
            
    });

    it("Should log a message when greeting an user", () => {
        //arrange
            spyOn(ts, "getCurrent").and.returnValue(new Date("10-May-2021 14:00:00"))
            spyOn(ls, "log")

            const name = "Magesh";
                
        //act
            greeter.greet(name);

        //assert
            expect(ls.log).toHaveBeenCalledOnceWith(`user Magesh greeted`)
    })
    
})