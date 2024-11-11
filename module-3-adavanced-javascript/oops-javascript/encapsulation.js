/* encapsulation : wrapping up data in a single object there we used encapsulations 
                   encapsulation is also used to warp a small - small objects in a single data there we used encapsulations 
                   
                   examples : capsule | ATM  | automatic car

*/


class Student 
{
    constructor()
    {
        var name;
        var marks;

    }
    getName()
    {
        return this.name;
    }

    setName(name)
    {
       this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }

    setMarks(marks)
    {
        this.marks=marks;
    }
}

var obj=new Student();
obj.setName("Brijesh kumar Pandey");
obj.setMarks(69);
console.log(obj);