function validation(values) {
    let error = {}

    if (values.email === "") {
        error.email ="Email should not be empty";
    } else {
        error.email = "";
    }
    if (values.password ==="") {
        error.password = "Password should not be empty";
    
    } else {
        error.password = "";
    }

    if (values.username ==="") {
        error.username = "username should not be empty";
    } else {
        error.username = "";
    }

    
    return error
}

export default validation;