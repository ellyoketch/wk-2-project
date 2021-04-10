function nameCalculator() { 
  let dayOfBirth = number(document.getElementById("day").value);
  let monthOfBirth = number(document.getElementById("month").value);
  let yearOfBirth = number(document.getElementById("year").value); 
  let gender = document.getElementsByClassName("gender");
}
    

//gender validation code
function gender(male, female){
  m = 0;
  if (male.checked){
    m++;
  }
  if(female.ckecked){
    m++;
  }
  if(m==0){
    alert("please select your gender!");
    male.focus();
    return false;
  }
  else{
    alert("gender selected successfully");
    window.location.reload()
    return true;}
  }