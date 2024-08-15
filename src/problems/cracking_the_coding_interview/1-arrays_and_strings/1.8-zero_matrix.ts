/**
 *  Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0.
 */

// Time: O(n^2) - Space: O(n)
function zero_matrix_v1(matrix: number[][]): number[][] {
    let targetRows = [];
    let targetCols = [];

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0) {
                targetRows.push(i);
                targetCols.push(j);
            }
        }
    }

    for(let i = 0; i < targetRows.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            matrix[targetRows[i]][j] = 0;
        }    
    }

    for(let i = 0; i < targetCols.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            matrix[j][targetCols[i]] = 0;
        }    
    }

    return matrix;
}

if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe.concurrent('Testing 1.8 - zero matrix', () => {
        const matrix = [
            [1,2,3,4],
            [5,6,7,0],
            [9,10,11,12],
            [13,14,15,16]
        ];
        const result = [
            [1,2,3,0],
            [0,0,0,0],
            [9,10,11,0],
            [13,14,15,0]
        ];
        test("Testing zero_matrix_v1", () => {
            expect(zero_matrix_v1(matrix)).toEqual(result)
        })
    })
}