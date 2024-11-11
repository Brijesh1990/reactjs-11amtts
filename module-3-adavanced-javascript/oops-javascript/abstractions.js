/* 
abstract class :  abstraction is a data hidding process where we hide some data prom some users there we used abstractions 
Note : abstraction or abstract class is never create an object but we can access abstract class using inheritance
       abstract class is not supported in javascript it is used in type script
       
       
*/

abstract class A 
{
    constructor(a)
    {
        this.a=a;
    }
}

class B extends A 
{
    constructor(a,b)
    {
        super(a)
        this.b=b;
    }

}


var obj=new A("Brijesh kumar pandey",35);
console.log(obj);