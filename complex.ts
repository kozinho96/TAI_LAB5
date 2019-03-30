class  Complex {
    private re: number;
    private im: number;

    constructor(re:number, im:number){
        this.re = re;
        this.im = im;
    }

    add(obj: Complex){
        return new Complex(this.re + obj.re, this.im + obj.im);
    }

    sub(obj: Complex){
        return new Complex(this.re - obj.re, this.im - obj.im);
    }

    abs(){
        return Math.sqrt((this.re * this.re) + (this.im * this.im));
    }

    toString(){
        return  this.re + "+" + this.im +"i";
    }

}

let obj = new Complex(4,2);
let obj2 = new Complex(2,1);

console.log(obj.add(obj2));
console.log(obj.sub(obj2));
console.log(obj.abs());
console.log(obj.toString());
