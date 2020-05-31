import { validateCheck } from "./codeCheck";

describe('Testing validateCheck', () => {
    it('Validate the get function Negative Scenario', async () => {
        const testArray1 = [10, 10, 5, 10, 3];
        const testArray2 = [10, 10, 5, 5, 10, 10, 10, 10, 10, 5, 5, 5];
        const result = validateCheck(testArray1,testArray2);
        expect(result).toEqual('Failed');
    });
    it('Validate the get function again Positive Sceanrio', async () => {
        const testArray1 = [10, 10, 5, 10];
        const testArray2 = [10, 10, 5, 5, 10, 10, 10, 10, 10, 5, 5, 5];
        const result = validateCheck(testArray1,testArray2);
        expect(result).toEqual('Passed');
    });

    it('Validate the get function again Positive Sceanrio with negative numbers', async () => {
        const testArray1 = [-10, -10, -5, -10];
        const testArray2 = [-10, -10, -5, -5, -10, -10, -10, -10, -10, -5, -5, -5];
        const result = validateCheck(testArray1,testArray2);
        expect(result).toEqual('Passed');
    });

    it('Validate the get function again Positive Sceanrio with positive numbers and negative numbers', async () => {
        const testArray1 = [-10, -10, -5, -10];
        const testArray2 = [-10, -10, -5, -5, -10, -10, -10, -10, -10, -5, -5, 5];
        const result = validateCheck(testArray1,testArray2);
        expect(result).toEqual('Failed');
    });
})