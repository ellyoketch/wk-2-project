// Arithmetic to determine the day of birth
var weekDays = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "kofi","Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];


//validating variables
var myDay = birthDay();
var myMonth = birthMonth();
var myYear = birthYear();

//gender validation code
function gender(){
var genders = document.getElementsByClassName("genders")
    if (gender.checked)
    {
      return gender.value;
    }
  }
var genderType = gender();
alert(genderType)

//Year of birth validation code>>>>>>>>!
function birthYear(){
var yearOfBirth = document.getElementById("year"); 
 if (yearOfBirth <=0 && yearOfBirth <=2022)
 {
 return true; 
 }
 else (yearOfBirth < 1900 && yearOfBirth > 2021)
 {
   return false;
 }
}

//month of birth validation code>>>>>>>>!
function birthMonth(){
var monthOfBirth = document.getElementById("month");
  if (monthOfBirth > 1 && monthOfBirth <= 12)
  {
  return true;
  }
  else (monthOfBirth > 12 && monthOfBirth < 0)
  {
    return false;
  }
}

//birth day validation code
function birthDay(){
var  dayOfBirth = document.getElementById("day");
    if (dayOfBirth <= 31 && dayOfBirth > 0)
    {
      return true;
    }
    else (dayOfBirth > 31 && dayOfBirth < 0)
    {
    return false;
    }
  }
  
//using index method to select items in the arrays 
var index
if (weekDay == 0)
{
  index = 6
}
else 
{
  index=weekDays -1;
  console.log(index);
  if (genderType == "male" && myDay && myMonth && myYear)
  {
    document.getElementById("output").textContent = "Born on" + weekDays[index] + ", your mane is" + maleNames[index];
    return false;
  }
  else if (genderType == "female" && myDay && myMonth && myYear)
  {
    document.getElementById("output").textContent = "Born on" + weekDays[index] + ", your mane is" + femaleNames[index];
    return false;
  }
  else
  {
    alert("Enter valid character!")
  }
}