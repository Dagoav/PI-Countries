export const validate = (values) => {
    let result = {
        error: "",
        success: false
    };

    if (values.name === "") {
        result.error = true
        result.name = "Name is required";
    } else if (/[^a-zA-Z ]/.test(values.name)) {
        result.error = true
        result.name = "Character special in name";
    }

    if (values.countries) {
        if (values.countries.length === 0) {
            result.error = true
            result.country = "No Country Select";
        }
    }


    if (result.error && !result.success) return result

    result.error = false
    result.success = true
    return result;
}


// export const validateCountry = (values) => {
//     let result = {
//         error: "",
//         success: false
//     };

//     if (values.countries.length === 0) {
//         result.error = "No Country Select";
//         return result;
//     }


//     result.error = false
//     result.success = true
//     return result;
// }