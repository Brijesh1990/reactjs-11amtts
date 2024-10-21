function Valid()
{
// for applied name field
if(document.frm.name.value=="")
{
alert('Please enter patient Name here *')
document.frm.name.focus();
return false;
}
// for applied only alphabetic character accept regular expression /^[A-Za-z]+$/
var nm=/^[A-Za-z]+$/;
if(!nm.test(document.frm.name.value))
{
alert('Please enter patient Name alphabetic character Only *')
document.frm.name.focus();
return false;
}
// for applied email field
if(document.frm.email.value=="")
{
alert('Please enter email here *')
document.frm.email.focus();
return false;
}
// for applied only alphabetic character accept regular expression /^[A-Za-z]+$/
var em=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
if(!em.test(document.frm.email.value))
{
alert('Please enter a valid Email Address  *')
document.frm.email.focus();
return false;
}

// for applied booking date field
if(document.frm.datetime.value=="")
{
alert('Please enter datetime here *')
document.frm.datetime.focus();
return false;
}

// for applied booking date field
if(document.frm.doctor.value=="")
{
alert('Please enter doctor name here *')
document.frm.doctor.focus();
return false;
}


// for applied booking date field
if(document.frm.phone.value=="")
{
alert('Please enter Phone Numbers  here *')
document.frm.phone.focus();
return false;
}

// for applied booking date field
if(document.frm.address.value=="")
{
alert('Please enter your address here *')
document.frm.address.focus();
return false;
}

// for applied booking date field
if(document.frm.deseases.value=="")
{
alert('Please enter your deseases  here *')
document.frm.deseases.focus();
return false;
}

// for applied booking date field
if(document.frm.comment.value=="")
{
alert('Please enter your Comments  here *')
document.frm.comment.focus();
return false;
}

}