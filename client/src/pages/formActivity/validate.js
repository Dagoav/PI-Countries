export const validate = (values) => {
    let result = {
        error: "",
        success: false
    };

    if (values.name === "" || values.name.trim().length === 0) {
        result.error = true
        result["name"] = "Name is required";
    }
    if (/[^a-zA-Z ]/.test(values.name)) {
        result.error = true
        result["name"] = "Character special in name";
    }

    if (values.countries) {
        if (values.countries.length === 0) {
            result.error = true
            result["country"] = "No Country Select";
        }
    }

    if (values.duration) {
        if (values.duration > 24) {
            result.error = true
            result["duration"] = "Max duration 24 hrs";
        }
    }

    if (!/^[0-9]+$/.test(values.duration)) {
        result.error = true
        result["duration"] = "Characters in duration";
    }

    if (values.dificulty) {
        if (values.dificulty > 5) {
            result.error = true
            result["dificulty"] = "Max dificulty 5 hrs";
        }
    }

    if (!/^[0-9]+$/.test(values.dificulty)) {
        result.error = true
        result["dificulty"] = "Characters in duration";
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