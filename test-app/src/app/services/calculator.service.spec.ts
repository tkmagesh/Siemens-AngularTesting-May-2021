import { CalculatorService } from './calculator.service'

describe("Calculator Service", () => {
    it("Should add 2 numbers", () => {
        //arrange
        const x = 100,
            y = 200,
            expectedResult = 300;
        const calculatorService : CalculatorService = new CalculatorService()

        //act
        const result = calculatorService.add(x,y);

        //assert
        expect(result).toBe(expectedResult);
    })
})