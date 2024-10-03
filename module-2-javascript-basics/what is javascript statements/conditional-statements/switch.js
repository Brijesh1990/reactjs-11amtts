/*   

switch case is used to just like a if else if we can check multiple case if case is false default is executed.

   syntax :

     switch(condition)
     {
        case A:
             statements;
             break;

        case B:
             statements;
             break;
        case C:
             statements;
             break;

        default:
            statements;
            break;     

     
     }
*/


var grade='A';
switch(grade)
{
    case 'A':
        console.log('<h2>You are a Topper students &#9786</h2>');
        break;
        
    case 'B':
        console.log('<h2>You are a Average students &#9786</h2>');
        break;

        
    case 'C':
        console.log('<h2>You are a failed students &#9785</h2>');
        break;
        
    default:
        console.log('<h2>sorry your grade is not found anywhere contact with admin</h2>');
        break;
}
