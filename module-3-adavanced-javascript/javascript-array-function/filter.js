/* 
 filter : is a function of array i.e used to filter any elements from array on conditional based  with callback function

var age=[12,45,66,55,85,99,87,65,34,24,11,5,2,1,6];
console.log(age);


*/ 

var age=[12,45,66,55,85,99,87,65,34,24,11,5,2,1,6,18,17];
// console.log(age);
//age.filter(callback);
age.filter(chk);
function chk(item)
{
    if(item>=18)
    {
        console.log(item)
    }   
}