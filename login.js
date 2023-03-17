function validate() {
    var Email = document.getElementById("email").value;
    var Pass = document.getElementById("pass").value;



    console.log(Email);
    console.log(Pass);

    var EmailId = /^\S+@\S+\.\S+$/;
    var Numbers = /^[1-9]\d{5}$/;
    
   if (!Email.match(EmailId)) {
        alert("Pl. Enter valid UserName");
    }
    else if  (!Pass.match(Numbers)) {
        alert("Password should contain 6 digit pin!!!");
    }

    else {
        alert("Login successfully!")
    }
}

