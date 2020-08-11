export const ideas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [...state, { id: Date.now(), idea: action.idea }]
        case 'DELETE_IDEA':
            console.log('here')
            const updatedIdeas = state.filter(idea => idea.id !== action.id)
            return updatedIdeas
        default:
            return state
    }
}