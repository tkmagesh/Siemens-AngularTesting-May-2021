import { fakeAsync, flush } from "@angular/core/testing";

fdescribe("Async Operations", () => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result =  x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    it("Sync operation test", () => {
        let x = 100,
            y = 200,
            expectedResult = 300;

        let result = addSync(x,y);

        expect(result).toBe(expectedResult);
    })

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(() => {
            const result =  x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        },3000)
    }

    it("Async operation test", (done) => {
        let x = 100,
            y = 200,
            expectedResult = 300;

        addAsync(x,y, (result) => {
            expect(result).toBe(expectedResult);
            done();
        });
    })

    it("testing multiple async operations", fakeAsync(() => {
        let test1 = false;
        setTimeout(() => {
            test1 = true;
        }, 1000);

        let test2 = false;
        setTimeout(() => {
            test2 = true;
        }, 3000);

        flush();
        expect(test1).toBeTrue()
        expect(test2).toBeTrue()
    }))
})