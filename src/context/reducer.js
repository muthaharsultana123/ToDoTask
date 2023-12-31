import { reducerCases } from "./Constants";

export const initialState = {
    currentProject: "",
    projects:[]
}


const reducer = (state, action) => {
    switch (action.type){
        case reducerCases.SET_PROJECT:
            return {
                ...state,
                currentProject: action.currentProject,
            }
        case reducerCases.PROJECTS:
            return {
                ...state,
                projects:action.projects,
            }
        
    }
}

export default reducer;