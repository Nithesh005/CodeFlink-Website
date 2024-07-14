
const errors = {};
const V_mail = (Entered_mail) => {
    if (!Entered_mail || Entered_mail == null || Entered_mail == "") {
        errors.mail = "Email can't be empty";
        return errors;
    }
    const mail_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (!mail_re.test(Entered_mail)) {
        errors.mail = "Invalid email address";
    } 
    else {
        errors.mail = null;
    }
    return errors;
}
const V_name = (Entered_name) => {
    if (!Entered_name || Entered_name == null || Entered_name == "") {
        errors.name = "Name can't be empty";
        return errors;
    }
    const name_re = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (!name_re.test(Entered_name)) {
        errors.name = "Invalid Name Format";
    } 
    else {
        errors.name = null;
    }
    return errors;
}
const V_lname = (Entered_name) => {
    if (!Entered_name || Entered_name == null || Entered_name == "") {
        errors.lname = "Name can't be empty";
        return errors;
    }
    const name_re = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (!name_re.test(Entered_name)) {
        errors.lname = "Invalid Name Format";
    } 
    else {
        errors.lname = null;
    }
    return errors;
}
const V_phoneNumber = (Entered_name) => {
    if (!Entered_name || Entered_name == null || Entered_name == "") {
        errors.phoneNumber = "Mobile Number can't be empty";
        return errors;
    }
    const name_re = /^\+?(\d{1,3})?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;
    if (!name_re.test(Entered_name)) {
        errors.phoneNumber = "Invalid Mobile Number";
    } 
    else {
        errors.phoneNumber = null;
    }
    return errors;
}
const V_message = (Entered_name) => {
    if (!Entered_name || Entered_name == null || Entered_name == "") {
        errors.message = "Message can't be empty";
        return errors;
    }
    const name_re = /^.{3,200}$/;
    if (!name_re.test(Entered_name)) {
        errors.message = "Min 3 characters should be there and max 200 characters";
    } 
    else {
        errors.message = null;
    }
    return errors;
}


const V_Form = (formdata) => {
    V_name(formdata.fname);
    V_lname(formdata.lname);
    V_mail(formdata.e_mail);
    V_phoneNumber(formdata.phone_number);
    V_message(formdata.message);
    return errors;
}
const V_password = () => {
    alert("validate password");
}
export { V_Form, V_mail, V_name,V_lname,V_phoneNumber,V_message, errors }