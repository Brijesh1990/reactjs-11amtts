/* 
what is inheritance in oops ?
 inheritance is used to access one class properties by another class i.e called inheritance
examples : A => B
           parent class => child class or sub class or base class 


Note : A class property used by another class using extends keyword 
       in javascript parent class properties access by its child class using super() method.

syntax :

class A
{
 member function()
 {
 statements;
 }

} 

class B extends A 
{

  member function()
  {
      super();
      statements;
  }


}

create an object
call a function

*/

class Car 
{
    constructor(nm,brand,year)
    {
        this.nm=nm;
        this.brand=brand;
        this.year=year;
    }
}
class Garage extends Car
{
    constructor(nm,brand,year,garagename,address)
    {
      super(nm,brand,year);
      this.garagename=garagename;
      this.address=address;
    }
}
var obj=new Garage("maruti 800","alto maruti",2016,"shiv automobiles pvt ltd","150 feet ring road near mavadi chowk Rajkot-360005");
console.log(obj);