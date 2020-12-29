export const getTodoItemsFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    let todoItems = null;
    try {
      const parsedData = JSON.parse(value);
      if (Array.isArray(parsedData)) {
        todoItems = parsedData;
      }
    } catch (e) {
      console.log(e);
      todoItems = [];
    }
    console.log(todoItems);
  
    return todoItems;
  };
  
  export const saveTodosInLocalStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));
  