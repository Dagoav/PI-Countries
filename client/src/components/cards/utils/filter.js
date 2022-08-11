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


export const applyFilterName = (option, root, copy) => {
    let result
    if (option === "none") {
        result = root;
    } else {
        result =
            option === "ASC"
                ? sortNameASC(copy)
                : sortNameDESC(copy);
    }

    return result
}

export const applyFilterPop = (option, root, copy) => {
    let result
    if (option === "none") {
        result = root;
        return;
    } else {
        result =
            option === "ASC"
                ? sortPopASC(copy)
                : sortPopDESC(copy);
    }

    return result
}


