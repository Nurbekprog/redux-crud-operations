const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").thunk; // Import the default export of redux-thunk

const axios = require("axios");

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"; 
// Corrected typo here

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUsersSuccess(data));
        dispayTodos(data);
      })
      .catch((err) => {
        dispatch(fetchUsersError(err.message));
      });
  };
};

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("Initial state: ", store.getState());
store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(fetchUsers());
