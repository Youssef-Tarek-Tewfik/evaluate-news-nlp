import {checkForName} from '../src/client/js/nameChecker';

describe("Testing the checking functionality", () => {
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
        expect(() => checkForName()).toThrow();
        expect(checkForName("www.valid.com")).toBe(true);
        expect(checkForName(".comwwwhttp")).toBe(true);
        expect(checkForName("localhost:0000/somewhere")).toBe(false);
        expect(checkForName("")).toBe(false);
})});