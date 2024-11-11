/*
method overloading ??
  method overloading is a types of polymorphism
  Method overloading meanse when we used same function pass with different arguments i.e called method overloading.
  


*/

class Add 
{
    constructor(a,b,c)
    {
        this.a=a;
        this.b=b;
        this.c=c;
        this.c=a+b;


    }
}
class Mult extends Add 
{
    constructor(a,b,c,d)
    {
        super(a,b,c);
        this.d=d;
        this.d=a*b*c;
    }
}

var obj=new Mult(10,20,30);
console.log(obj);