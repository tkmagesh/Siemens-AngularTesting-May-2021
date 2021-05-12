import { TestBed } from "@angular/core/testing"
import { TrimTextPipe } from "./trimText.pipe"

fdescribe("TrimText pipe", () => {
    fit("Short strings are returned as they are", () => {
        const trimTextPipe = new TrimTextPipe();
        expect(trimTextPipe).toBeDefined()

        var shortString = 'asjfla asdjflsaf asdf';
        var expectedResult = 'asjfla asdjflsaf asdf';

        var result = trimTextPipe.transform(shortString);

        expect(result).toBe(expectedResult)
    })
     fit("Long strings are truncated", () => {
        const trimTextPipe = new TrimTextPipe();
        expect(trimTextPipe).toBeDefined()

        var longString = 'Proident veniam aute dolore officia incididunt duis est officia sit pariatur. Non qui consequat exercitation laboris eu ea dolore ipsum aliqua consequat in ad nostrud veniam. Voluptate pariatur dolor culpa labore deserunt dolore et dolore ex occaecat cillum. Elit irure ea do minim mollit amet irure aliquip Lorem. Et adipisicing proident dolore voluptate dolore nostrud ipsum reprehenderit. Laboris amet tempor adipisicing dolore laborum non officia aliqua.';
        var expectedResult = 'Proident veniam aute dolore of...';

        var result = trimTextPipe.transform(longString);

        expect(result).toBe(expectedResult)
    })
})