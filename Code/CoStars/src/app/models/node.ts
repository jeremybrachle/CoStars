export class Node {
    constructor(
    // name of current node
      public name: string,
    // type of node, 'actor' or 'film'
      public type: string,
    // boolean for if the first element in array
      public isFirst: boolean,
    // boolean for if last element in array
      public isLast: boolean
      ) { }
  }
