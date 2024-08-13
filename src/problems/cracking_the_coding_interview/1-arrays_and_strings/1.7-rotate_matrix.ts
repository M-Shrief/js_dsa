/**
 * Rotate Matrix: Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 */


// Version 1, doing it in place.
function rotate_matrix_v1(matrix: number[][]): number[][] | null {
    // If it's empty or invalid matrix --> return null
    if(matrix.length == 0 || matrix.length != matrix[0].length) return null;
    
    for(let layer = 0; layer < matrix.length / 2; layer++) {
        let first = layer;
        let last = matrix.length - 1 - layer;
        for(let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i]; // save top
            // left -> top
            matrix[first][i] = matrix[last-offset][first]; 
            // bottom -> left
            matrix[last-offset][first] = matrix[last][last-offset];
            // right -> bottom
            matrix[last][last-offset] = matrix[i][last];
            // top -> right
            matrix[i][last] = top;
        }
    }

    return matrix;
}


if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe.concurrent('Testing 1.7 - rotate matrix', () => {
        const matrix = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
        ];
        const result = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4],
        ];
        test("Testing rotate_matrix_v1", () => {
            expect(rotate_matrix_v1(matrix)).toEqual(result)
            expect(rotate_matrix_v1([[1], [2,3], [1,2,3]])).toEqual(null)
        })
    })
}


  