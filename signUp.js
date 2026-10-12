const signupForm = document.getElementById("signUp-form");

signupForm.addEventListener("submit", (event) =>{
  event.preventDefault();

  const fullName=signupForm['fullName'].value;
    const email=signupForm['email'].value;
    const phone=signupForm['phone'].value;
    const location=signupForm['location'].value;
    const password=signupForm['password'].value;
    const confirmPassword=signupForm['confirmpassword'].value;
     let isValid=true
    if(fullName.trim()===""){
        document.getElementById("fullNameError").innerHTML="Enter your full name"
        isValid=false
    }
    if(phone.length>10){
              document.getElementById("phoneError").innerHTML=  "Please enter a valid phone number"
isValid=false
        }
    if(location.trim()===""){
          document.getElementById("locationError").innerHTML="Pleaseenter your location"
          isValid=false
    }
    const locationRegex = /^[a-zA-Z\s]+$/;
    if(!location.match(locationRegex)){
            document.getElementById("locationError").innerHTML="Please enter a valid location"
            isValid=false
    }
    
    if(email.trim()===""){
            document.getElementById("emailError").innerHTML="Please Enter your email address"
            isValid=false
    }
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
    if(!email.match(emailRegex)){
        document.getElementById("emailError").innerHTML="Please enter a valid email address"
        isValid=false
    }
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;    if(!password.match(passwordRegex)){
            document.getElementById("passwordError").innerHTML="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            isValid=false
    }
    if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").innerHTML="password do not match"
    isValid=false
    }
     // Store the details
if (isValid) {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("location", location);
    localStorage.setItem("password", password);

    alert("Sign Up Successful!");

window.location.href = "./signIn.html";
} } );
