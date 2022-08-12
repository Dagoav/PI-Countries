const sortNameASC = (array) => {
    return array.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    })
}

const sortNameDESC = (array) => {
    return array.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
    })
}


const sortPopASC = (array) => {
    return array.sort((a, b) => {
        if (a.population > b.population) return 1;
        if (a.population < b.population) return -1;
        return 0;
    })
}

const sortPopDESC = (array) => {
    return array.sort((a, b) => {
        if (a.population < b.population) return 1;
        if (a.population > b.population) return -1;
        return 0;
    })
}


export const applyFilter = (state, countries) => {
    let copyCountries = Array.from(countries);
    let filterCards = [];

    if (state.hasOwnProperty("order")) {
        if (state.value === "ASC") {
            filterCards = sortNameASC(copyCountries);
        } else if (state.value === "DESC") {
            filterCards = sortNameDESC(copyCountries);
        } else {
            filterCards = countries
        }
    } else if (state.hasOwnProperty("population")) {
        if (state.value === "ASC") {
            filterCards = sortPopASC(copyCountries);
        } else if (state.value === "DESC") {
            filterCards = sortPopDESC(copyCountries);
        } else {
            filterCards = countries
        }
    } else {
        filterCards = countries
    }
    return filterCards;
}