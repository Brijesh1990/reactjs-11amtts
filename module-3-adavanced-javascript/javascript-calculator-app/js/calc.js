// create a function for clear a result values 
function clr()
{
    document.getElementById("result").value="";
}
// create a function for input data from button in result 
function getValue(val)
{
    document.getElementById("result").value+=val;
}
// create a function for slice each values from last element in result
function SliceValue()
{
    var data=document.getElementById("result").value;
    var res=data.slice(0,-1);
    document.getElementById("result").value=res;
}
// create a function for airthmatic all expressions 
function finalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
// create a function for find square of result number
function sq()
{
    var num=document.getElementById("result").value;
    var res=Math.pow(num,2);
    document.getElementById("result").value=res;
}

// create a function for find square of result number
function squareRoot()
{
    var num=document.getElementById("result").value;
    var res=Math.sqrt(num);
    document.getElementById("result").value=res;
}