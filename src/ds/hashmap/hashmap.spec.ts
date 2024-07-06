import { describe, test, expect } from 'vitest';
import { HashMap, Node } from './hashmap';

describe.concurrent('Testing HashMap', async () => {
  test('Testing Put & Get', async () => {
    let hm = new HashMap<number>(3);

    let one = await hm.put('one', 1);
    expect(one).toEqual('one');

    let isOne = await hm.get('one');
    expect(isOne).toBe(1);

    let two = await hm.put('two', 2);
    expect(two).toEqual('two');

    let isTwo = await hm.get('two');
    expect(isTwo).toBe(2);

    let three = await hm.put('three', 3);
    expect(three).toEqual('three');

    let isThree = await hm.get('three');
    expect(isThree).toBe(3);

    let four = await hm.put('four', 4);
    expect(four).toEqual(null);

    let isFour = await hm.get('four');
    expect(isFour).toBe(null);
  });

  // Need to make getHelper puplic.
  // test("Testing getHelper for collisions", async() => {
  //     let hm = new HashMap<number>(3);
  //     let h1Node = new Node<number>("h1", 10);
  //     let h2Node = new Node<number>("h2", 20);
  //     h2Node.next = h1Node;
  //     let h3Node = new Node<number>("h3", 30);
  //     h3Node.next = h2Node;
  //     let h4Node = new Node<number>("h4", 40);
  //     h4Node.next = h3Node;

  //     hm.map[1] = h4Node

  //     let getH1 = await hm.getHelper("h1", 1);
  //     expect(getH1).toEqual(h1Node.value)

  //     let getH2 = await hm.getHelper("h2", 1);
  //     expect(getH2).toEqual(h2Node.value)

  //     let getH3 = await hm.getHelper("h3", 1);
  //     expect(getH3).toEqual(h3Node.value)

  //     let getH4 = await hm.getHelper("h4", 1);
  //     expect(getH4).toEqual(h4Node.value)
  // })
});
