export function swap(list: number[], a: number, b: number) {
  [list[a], list[b]] = [list[b], list[a]];
}

export enum DIRECTION {
  ASC = 'ASC',
  DESC = 'DESC',
}
