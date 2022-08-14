
const initialState = {
  countries: [],
  activities: [],
  activity: {},
  continents: [],
  filterState: {},
  pagination_params: {},
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

    case "GET_ALL_CONTINENTS":
      return {
        ...state,
        continents: action.payload
      }

    // activities 
    case "GET_ALL_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      }

    case "POST_ACTIVITY":
      return {
        ...state,
        activity: action.payload
      }


    // filters
    case "ORDER_BY_CONTINENTS":
      return {
        ...state,
        countries: action.payload,
      }
    case "ORDER_BY_ACTIVITY":
      return {
        ...state,
        countries: action.payload,
      }
    case "ORDER_BY_NAME":
      return {
        ...state,
        filterState: action.payload,
      }
    case "ORDER_BY_POPULATION":
      return {
        ...state,
        filterState: action.payload,
      }


    // pagination 

    case "SET_PAGINATION":
      return {
        ...state,
        pagination_params: action.payload,
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