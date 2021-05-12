import { GreeterService } from "./greeter.service"

/* class FakeTimeServiceForMorning {
    getCurrent() : Date {
        return new Date("10-May-2021 9:00:00")
    }
}

class FakeTimeServiceForAfternoon {
    getCurrent() : Date {
        return new Date("10-May-2021 14:00:00")
    }
}

describe("Greeter Service", () => {
    it("Should greet the user 'Good Morning' when greeted before 12 hours", () => {
        //arrange
            const ts = new FakeTimeServiceForMorning(),
                greeter = new GreeterService(ts),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Morning!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult)
    });
    it("Should greet the user 'Good Day' when greeted after 12 hours", () => {
         //arrange
            const ts = new FakeTimeServiceForAfternoon(),
                greeter = new GreeterService(ts),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Day!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult)
    });
}) */

class FakeTimeService {
    constructor(private setupTime : string){

    }
    getCurrent() : Date {
        return new Date(this.setupTime)
    }
}



describe("Greeter Service", () => {
    it("Should greet the user 'Good Morning' when greeted before 12 hours", () => {
        //arrange
            const ts = new FakeTimeService("10-May-2021 9:00:00"),
                greeter = new GreeterService(ts),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Morning!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult)
    });
    it("Should greet the user 'Good Day' when greeted after 12 hours", () => {
         //arrange
            const ts = new FakeTimeService("10-May-2021 14:00:00"),
                greeter = new GreeterService(ts),
                name = "Magesh",
                expectedResult = "Hi Magesh, Good Day!";
        //act
            var result = greeter.greet(name);

        //assert
            expect(result).toBe(expectedResult)
    });
})