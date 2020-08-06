class Polygon {
  constructor (sides = []){
    this.sides =sides;
  }
  get countSides (){
    return  this.sides.length;
  }
  get perimeter  (){
    const reducer = (accu, currVal) => accu + currVal;
    return  this.sides.reduce(reducer , 0);
  }
}

class Triangle extends Polygon {

  get isValid  (){
      if(this.countSides === 3 && this.sides[0] + this.sides[1] >= this.sides[2] &&
         this.sides[0] + this.sides[2] >= this.sides[1] &&
         this.sides[1] + this.sides[2] >= this.sides[0]){
           return true ;
         }
    return false ;
  }
}

class Square extends Polygon {

  get isValid  (){
    let flag  ;
    if(this.countSides === 4) {
      for (let i = 1 ; i < this.countSides ; i++) {
        flage = this.sides[0] === this.sides[i];
        if(!flage) {
          return false ;
        }
      }
      return flage ;
    }


  }
}
