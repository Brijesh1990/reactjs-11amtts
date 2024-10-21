/* what is object ?  
   object is an instances of class
   or 
   An object is instances or examples of class 
   
   Note : an object is always created with new keyword of class name

*/

class Car
{
    constructor(name,year,brand)
    {
        this.name=name;
        this.year=year;
        this.brand=brand;

    }
}
var obj=new Car("maruti alto 800",2016,"maruti suzuki");  //new Car() is an object of class Car 
console.log(obj);