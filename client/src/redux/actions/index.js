import dotenv from "dotenv"
dotenv.config()
console.log(process.env);

const backendURL = process.env.REACT_APP_API || "http://127.0.0.1:3001";

export const getAllCountries = () => dispatch => {
    return fetch(`${backendURL}/countries`)
        .then(response => response.json())
        .then(countries => {
            dispatch({ type: "GET_ALL_COUNTRIES", payload: countries })
        })
};

export const getCountriesByname = (name) => dispatch => {
    return fetch(`${backendURL}/countries/search?name=${name}`)
        .then(response => response.json())
        .then(countries => {
            dispatch({ type: "GET_COUNTRIES_BYNAME", payload: countries })
        })
        .catch((response) => console.log(response))
};

export const getCountryDetail = (id) => dispatch => {
    return fetch(`${backendURL}/countries/${id}`)
        .then(response => response.json())
        .then(country => {
            dispatch({ type: "GET_COUNTRY_DETAIL", payload: country })
        })
};


export const getActivities = () => dispatch => {
    return fetch(`${backendURL}/activities`)
        .then(response => response.json())
        .then(activities => {
            dispatch({ type: "GET_ALL_ACTIVITIES", payload: activities })
        })
};

export const getContinents = () => dispatch => {
    return fetch(`${backendURL}/countries/continents`)
        .then(response => response.json())
        .then(continents => {
            dispatch({ type: "GET_ALL_CONTINENTS", payload: continents })
        })
};

// Create activity
export const postActivity = (_body) => dispatch => {
    return fetch(`${backendURL}/activities/byCountry`,
        {
            method: "POST",
            body: JSON.stringify(_body),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(newActivity => {
            if (newActivity) {
                dispatch({ type: "POST_ACTIVITY", payload: newActivity })

            }
            return newActivity;
        })

};


// filters
export const orderByContinents = (continent) => dispatch => {
    return fetch(`${backendURL}/countries/byContinent?name=${continent}`)
        .then(response => response.json())
        .then(continents => {
            dispatch({ type: "ORDER_BY_CONTINENTS", payload: continents })
        })
}

export const orderByActivity = (activity) => dispatch => {
    return fetch(`${backendURL}/countries/byActivity?name=${activity}`)
        .then(response => response.json())
        .then(countries => {
            dispatch({ type: "ORDER_BY_ACTIVITY", payload: countries })
        })
}


export const orderByname = (order) => {
    return {
        type: "ORDER_BY_NAME",
        payload: order
    }
}

export const orderByPopulation = (order) => {
    return {
        type: "ORDER_BY_POPULATION",
        payload: order
    }
}

// pagination
export const setPaginationParams = (parameters) => {
    return {
        type: "SET_PAGINATION",
        payload: parameters
    }
}