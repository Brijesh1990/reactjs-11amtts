// map : map is a function od array i.e used to map each value and generate a list of array
var emp=["brijesh","rajesh","mitesh","trupesh","manish"];
//emp.map(callback function);
emp.map(display);
function display(item)
{
    console.log(item);
}