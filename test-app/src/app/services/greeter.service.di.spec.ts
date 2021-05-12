import { TestBed } from '@angular/core/testing';
import { GreeterService } from './greeter.service';
import { LoggerService } from './logger.service';
import { TimeService } from './time.service';

describe("Greeter Service (DI)", () => {
    it("Should greet the user 'Good Morning' when greeted before 12 hours", () => {
        //arrange
            const ts = jasmine.createSpyObj("TimeService", {
                getCurrent : new Date("10-May-2021 9:00:00")
            });
            const ls = jasmine.createSpyObj("LoggerService", ["log"]);

            TestBed.configureTestingModule({
                providers : [
                    { provide : GreeterService, useClass : GreeterService },
                    { provide : TimeService, useValue : ts },
                    { provide : LoggerService, useValue : ls }
                ]
            })
            
            const greeter = TestBed.inject(GreeterService),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Morning!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
            
    });
    it("Should greet the user 'Good Day' when greeted after 12 hours", () => {
         //arrange
            const ts = jasmine.createSpyObj("TimeService", {
                getCurrent : new Date("10-May-2021 14:00:00")
            });
            const ls = jasmine.createSpyObj("LoggerService", ["log"]);

            TestBed.configureTestingModule({
                providers : [
                    { provide : GreeterService, useClass : GreeterService },
                    { provide : TimeService, useValue : ts },
                    { provide : LoggerService, useValue : ls }
                ]
            })
            
            const greeter = TestBed.inject(GreeterService),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Day!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult);
    });
    
    it("Should log a message when greeting an user", () => {
        //arrange
            const ts = jasmine.createSpyObj("TimeService", {
                    getCurrent : new Date("10-May-2021 9:00:00")
                }),
                ls = jasmine.createSpyObj("LoggerService", ["log"]);
            TestBed.configureTestingModule({
                providers : [
                    { provide : GreeterService, useClass : GreeterService },
                    { provide : TimeService, useValue : ts },
                    { provide : LoggerService, useValue : ls }
                ]
            })
            const greeter = TestBed.inject(GreeterService),
                name = "Magesh";
                
        //act
            greeter.greet(name);

        //assert
            expect(ls.log).toHaveBeenCalledOnceWith(`user Magesh greeted`)
    })
})