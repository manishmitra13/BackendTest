
export function validateCheck(testArray1, testArray2) {
    const sortArray1 = testArray1.sort((a, b) => a - b);
    const sortArray2 = testArray2.sort((a, b) => a - b);

    const countArray1 = sortArray1.reduce((acc, curr) => {
        if (typeof acc[curr] == 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});


    const countArray2 = sortArray2.reduce((acc, curr) => {
        if (typeof acc[curr] == 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});

    const result = 'Failed';
    if (testArray2.length >= testArray1.length) {
        const newResult = checkArray(sortArray1, sortArray2);
        if (newResult) {
            const result = calculateResult(countArray1, countArray2);
            if (result != false) {
                const result = "Passed"
                return result;
            }
        }
        else
            return result;
    }
    else {
        const newResult = checkArray(sortArray1, sortArray2);
        if (newResult) {
            const result = calculateResult(countArray2, countArray1);
            if (result != false) {
                const result = "Passed"
                return result;
            }
        }
        return result;
    }
}
export function calculateResult(countArray1, countArray2) {

    const positiveArray = [];
    const negativeArray = [];
    Object.keys(countArray1).filter((countArray1item) => {
        Object.keys(countArray2).filter((countArray2item) => {
            if (countArray1item === countArray2item) {
                if (countArray2[countArray2item] - countArray1[countArray1item] > 3) {
                    positiveArray.push(countArray1item);
                }
                else {
                    negativeArray.push(countArray2item);
                }
            }
        })
    })

    if (positiveArray.length > 0) {
        if (negativeArray.length > 0) {
            return false
        }
        return true
    }
    else {
        return false
    }

}
export function checkArray(Array1, Array2) {
    const foundAgain = false;
    const found = Array1.every(r => Array2.includes(r));
    if (found) {
        const foundAgain = Array2.every(r => Array1.includes(r));
        return foundAgain;
    }
    return foundAgain
}

