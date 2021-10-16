

const initialState = {
    is_logged : false
} 

const Reducer = (state = initialState, action) => {
    switch (action.type){
        case 'SetLogginStatus' : 
            state.is_logged = !state.is_logged;
            return state;
    }
    return state;
};

export default Reducer;