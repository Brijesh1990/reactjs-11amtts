/*  
nested if : nested if meanse if we checked conditions withing another conditions there we used nested if conditions

  syntax :    
  if(condition)
  {
     if(condition)
     {
       statements;
     }
  }

  else 
  {
    statements
  }


*/


    var a=40;
    var b=20;
    if(a>b)
    {
        if(a!=0 && b!=0)
        {
           console.log('a is greater than b and both are a positive numbers');
        }
    }
    else 
    {
     console.log('a is less than b')
    }