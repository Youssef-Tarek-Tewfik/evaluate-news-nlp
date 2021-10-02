import {handleSubmit} from '../src/client/js/formHandler';

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
        expect(() => handleSubmit()).toThrow();
        expect(() => handleSubmit({preventDefault: function() {}})).toThrow();
})});