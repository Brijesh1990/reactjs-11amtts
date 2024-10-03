/*  
if elseif  : if are executed when condition is true elseif are executed while checking multiple true conditions at once time
else is executed when conditions is false.

          syntax :

             if(condition)
             {
                 statements;
             }
             elseif(condition)
             {
             statements;
             }
             elseif(condition)
             {
             statements;
             }
             elseif(condition)
             {
             statements;
             }
             
             else 
             {
             statements;
             }


*/


   var a=100;
   var b=100;

   if(a>b)
   {
      console.log('a is greter than b')
   }
   else if(b>a)
   {  
      console.log('b is greter than a')
   }
   else 
   {
     console.log('both are equal numbers')
   }
