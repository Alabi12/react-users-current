import { ADD_USER, DELETE_USER, EDIT_USER } from "../actions/userActions";

const initialState = {
  users: [
    {
      name: "Zakyyyyyy",
      email: "zak@email.com",
      gen: 23,
      id: "84379843.fsdjhj",
    },
    { name: "Kobi", email: "kobu@email.com", gen: 3, id: "skdlj4839483" },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state.users, users: [...state.users, action.payload] };
    case DELETE_USER:
      const savedUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
        return{...state, users: savedUsers };
    case EDIT_USER:
      return {...state, users: state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      )}
      
    default:
      return state;
  }
};

export default usersReducer;