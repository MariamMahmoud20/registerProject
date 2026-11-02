
function validateData(){
    var user= document.getElementById("user").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var confirm= document.getElementById("confirm").value;
    var result= document.getElementById("result");

    result.setAttribute("class","alert theme-danger text-center d-block")
    if(user=="" && password=="" && confirm=="" && email==""){
        result.innerHTML="Enter data";
        return false;
    }else if(user.length <5 || user.length >15){
        result.innerHTML="Enter 5-15 character";
        return false;
    }else if(email.indexOf("@",1)==-1 || email.indexOf(".com",5)==-1){
        result.innerHTML="Enter Valid Email";
        return false;
    }else if(password.length<8){
        result.innerHTML="Week Password";
        return false;
    }else if(password!= confirm){
        result.innerHTML="Not Matched Password";
        return false;
    }

}