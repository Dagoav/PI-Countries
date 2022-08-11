
const initialState = {
  countries: [],
  filter: [],
  activities: [],
  continents: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        countries: action.payload
      }
    case "GET_COUNTRIES_BYNAME":
      return {
        ...state,
        countries: action.payload
      }

    case "GET_ALL_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      }
    case "GET_ALL_CONTINENTS":
      return {
        ...state,
        continents: action.payload
      }

    // filters
    case "ORDER_BY_CONTINENTS":
      return {
        ...state,
        countries: action.payload,
      }
    case "ORDER_BY_NAME":
      return {
        ...state,
        filter: action.payload,
      }
    case "ORDER_BY_POPULATION":
      return {
        ...state,
        filter: action.payload,
      }




    // case CREATE_HOUSE:
    //   return {
    //     ...state,
    //     houses: [...state.houses, action.payload]
    //   }
    // case DELETE_HOUSE:
    //   return {
    //     ...state,
    //     houses: state.houses.countries(house => house.id !== action.payload)
    //   }
    default: return state

  };
};

export default rootReducer;