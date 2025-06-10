export const initialState = {
  todos: [],
  loading: false,
};

export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

function generateUniqueId() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  let availableChars = chars.split("");

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    result += availableChars[randomIndex];
    availableChars.splice(randomIndex, 1); // Remove used character to avoid repetition
  }

  return result;
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: generateUniqueId(), text: action.payload, completed: false },
        ],
      };
    }
    case actionTypes.UPDATE_TODO: {
      const updatedArr = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, text: action.payload.text };
        } else {
          return item;
        }
      });
      console.log(updatedArr);

      return {
        ...state,
        todos: updatedArr,
      };
    }
  }
};
