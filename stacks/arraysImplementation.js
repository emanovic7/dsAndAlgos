//ARRAYS


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[0]
  }

}
