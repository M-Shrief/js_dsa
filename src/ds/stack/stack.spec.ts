import { describe, test, expect } from 'vitest';
import { Stack } from './stack';

describe.concurrent('Testing Stack', async () => {
  test('Testing Push()', async () => {
    let s = new Stack<number>();
    s.push(1);
    expect(s.getTop()).toEqual(1);
    s.push(2);
    expect(s.getTop()).toEqual(2);
    s.push(3);
    expect(s.getTop()).toEqual(3);

    expect(s.getSize()).toEqual(3);
  });

  test('Testing Pop()', async () => {
    let s = new Stack<number>();
    s.push(1);
    s.push(2);
    s.push(3);

    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.getSize()).toEqual(1);
  });
});
