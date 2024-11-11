/*
method overloading ??
  method overriding is a types of polymorphism
  Method overridding meanse when we used same function pass with same arguments i.e called method overriding.
  


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
    constructor(a,b,c)
    {
        super(a,b,c);
        this.c=a*b;
    }
}

var obj=new Mult(10,20);
console.log(obj);