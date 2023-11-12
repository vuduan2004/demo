function changePass(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("new-password").value;
    var currentPassword = document.getElementById("current-password").value;
    var rePassword = document.getElementById("re-password").value;
    
    var checkName = document.getElementById("check-name");
    var checkAge = document.getElementById("check-age");
    var checkEmail = document.getElementById("check-email");
    var checkNewpassword = document.getElementById("check-new-password");
    var checkCurrentPassword = document.getElementById("check-current-password");
    var checkRePassword = document.getElementById("check-re-password");
    
    
    if(name.trim() == "") {
        checkName.innerHTML = "Vui lòng nhập tên"
    } else {
        checkName.innerHTML = ""
    }  

    if(age.trim() == "") {
        checkAge.innerHTML = "Vui lòng nhập tuổi"
    } else if(isNaN(age)) {
        checkAge.innerHTML = "Tuổi phải là số"
    } else {
        checkAge.innerHTML = ""
    }

    if(email.trim() == "") {
        checkEmail.innerHTML = "vui long nhap email"
    } else if(email.indexOf(".") == -1 || email.indexOf("@")== -1){
        checkEmail.innerHTML = "Email khong dung dinh dang"
    }
    else {
        checkEmail.innerHTML = ""
    }

    if(currentPassword.trim() == "") {
        checkCurrentPassword.innerHTML = "VuI long nhap mat khau"
    } else if (currentPassword != "123@123") {
        checkCurrentPassword.innerHTML = "Mat khau khong chinh sac"
    } else {
        checkCurrentPassword.innerHTML = ""
    }

    if(newPassword.trim() == "") {
        checkNewpassword.innerHTML = "Vui long nhap mat khau moi"
    } else if(newPassword.length < 6) {
        checkNewpassword.innerHTML = "mat khau phai dai hon 5 ki tu"
    } else {
        checkNewpassword = ""
    }
    if(rePassword.trim() == "") {
        checkRePassword.innerHTML = "vui long nhap lai mk"
    } else if (rePassword != newPassword) {
        checkRePassword.innerHTML = "mat khau khong trung khop"
    } else {
        checkRePassword.innerHTML = ""
    }
}
