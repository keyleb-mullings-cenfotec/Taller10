import { CREATE_TODO, REMOVE_TODO, MARK_COMPLETE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case MARK_COMPLETE_TODO: {
            const { text } = payload;
            const index = state.findIndex(todo => todo.text === text);
            state[index].isCompleted = true;
            return [...state];
        }
        // case MARK_COMPLETE_TODO: {
        //     const { text } = payload;
        //     const updateTodo = {
        //         text,
        //         isCompleted: true,
        //     };
        //     const index = state.findIndex(todo => todo.text === text);
        //     if (state[index].isCompleted) {
        //         delete state[index].isCompleted;
        //     }else{
        //         state[index].isCompleted = true;
        //     }
            
        //     return [...state];
        // }

        default: {
            return state;
        }
    }
};