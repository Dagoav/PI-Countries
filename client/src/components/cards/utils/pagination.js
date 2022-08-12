export const pagination = (pag_params, cards) => {

    let displayCards = []
    if (Object.entries(pag_params).length > 0) {
        const { start, end } = pag_params
        displayCards = cards.slice(start, end);
        return displayCards;
    }

    displayCards = cards.slice(0, 9)
    return displayCards;
}