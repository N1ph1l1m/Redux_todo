import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
        {
            id:1,
            text:'Learn React',
            completed:false,
        },
        {
            id:2,
            text:'Learn Redux',
            completed:false,
        },
        {
            id:3,
            text:'Learn Redux ToolKit',
            completed:false,
        }  
    ],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
