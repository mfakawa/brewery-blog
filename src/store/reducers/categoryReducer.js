const initState = {}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            return state;

        case 'CREATE_ENTRY_ERROR':
            return state;

        default:
            return state;
    }

}

export default categoryReducer;