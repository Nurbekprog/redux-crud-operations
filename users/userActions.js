export const addUser = (userData) => ({
  type: "ADD_USER",
  payload: userData,
});

export const removeUser = (userId) => ({
  type: "REMOVE_USER",
  payload: userId,
});

export const updateUser = (userId, updatedUserData) => ({
  type: "UPDATE_USER",
  payload: { userId, updatedUserData },
});

export const fetchUsers = () => ({
  type: "FETCH_USERS",
});

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});
