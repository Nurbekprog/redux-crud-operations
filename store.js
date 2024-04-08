import store from "./store";
import { addItem, removeItem, updateItem } from "./actions";

store.dispatch(addItem({ id: 1, name: "Item 1" }));
store.dispatch(addItem({ id: 2, name: "Item 2" }));
console.log(store.getState());

store.dispatch(removeItem(1));
console.log(store.getState()); 

store.dispatch(updateItem(2, { id: 2, name: "Updated Item 2" }));
console.log(store.getState()); 
