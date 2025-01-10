// constructor is a same name of class whenever we call the object of class constructor automatically called
class Address
{
  constructor(fnm,lnm,nm,age,mob,address)
  {
      this.fnm=fnm;
      this.lnm=lnm;
      this.nm=nm;
      this.age=age;
      this.mob=mob;
      this.address=address;

  }
}

var obj=new Address("Brijesh","Pandey","Brij",35,9998003879,"150 feet ring road rajkot");
console.log(obj);