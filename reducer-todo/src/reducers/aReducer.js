export  const initialState = {
    todos: [
        {
            item: "Learn about reducers",
            completed: false, 
            id : 3892987589
        }
    ]
}
export const aReducer = (state, action)=>{
    switch (action.type){
        case "ADD":
            return {
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
          case "CLEAR":
                return {
                    todos: state.todos.filter(item=>!item.completed)
                }
          case "TOGGLE":
                return {
                    todos: state.todos.map(todo => {
                        if (action.payload === todo.id){
                            return { ...todo, completed: !todo.completed }
                        }else{
                            return todo
                        }
                    })
                }
        default:
             return state
    }
   
}


