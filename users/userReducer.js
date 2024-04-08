import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "./actions";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId ? action.payload.newItem : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;
