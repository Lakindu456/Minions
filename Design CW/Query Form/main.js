let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let FirstName = id("FirstName"),
    LastName = id("LastName"),
    MobileNumber = id("MobileNumber"),
    EmailAddress = id("EmailAddress"),
    QueryDetails = id("QueryDetails"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    engine(FirstName, 0, "First Name cannot be blank");
    engine(LastName, 1, "Last Name cannot be blank");
    engine(MobileNumber, 2, "Mobile number cannot be blank");
    engine(EmailAddress, 3, "Email address cannot be blank");
    engine(QueryDetails, 4, "Query details cannot be blank");

});

let engine = (id, serial, message)=> {

    if (id.value === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }

};
 









