// import { SEARCH_BY_NAME, FILTER_BY_GENRES, FILTER_BY_GAMES, GET_ALL_GAMES } from '../actions/actions'

const initialState = {
    allGames: [],
    gamesBakcUp: [],
    gameDetail: {},
    genres: [],
    filtered: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_GAMES':
            return{
                ...state,
                allGames: state.allGames.concat(action.payload),
                gamesBakcUp: state.gamesBakcUp.concat(action.payload),
                filtered: state.filtered.concat(action.payload)
            }
        case 'GAME_DETAILS':
            return{
                ...state,
                gameDetail: action.payload
            }
        case 'SEARCH_BY_NAME':
            return{
                ...state,
                filtered: action.payload
            }
        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload
            }
        case 'BACK_TO_HOME':
            return{
                ...state,
                filtered: action.payload
            }
        case 'FILTER BY':
            return{
                ...state,
                filtered: action.payload
            }
        case 'ORDER BY':
            if(action.payload === 'A-Z'){
                return{
                    ...state,
                    filtered: [...state.filtered].sort((prev, next) => {
                        if(prev.name > next.name)return 1
                        if(prev.name < next.name)return -1   
                    else return 0
                    }) 
                }
            }
            if(action.payload === "ascend"){
                return{
                    ...state,
                    filtered: [...state.filtered].sort((prev, next) => next.rating - prev.rating)
                }
            }
            if(action.payload === "descend"){
                return{
                    ...state,
                    filtered: [...state.filtered].sort((prev, next) => prev.rating - next.rating)
                }
    }
}   

}

