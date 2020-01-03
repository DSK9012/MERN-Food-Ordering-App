import * as ActionTypes from './ActionTypes';


export const Item= (state = { isLoading:true, errMsg:null, items:[], specificItems:[], cartItems:[] }, action) => {
    switch(action.type)
    {
        case ActionTypes.itemsLoading:
            return {...state, isLoading:true};

        case ActionTypes.itemsLoadingFailed:
            return {...state, isLoading:false, errMsg:action.payload};

        case ActionTypes.getAllItems:
            return {...state, isLoading:false, errMsg:null, items:action.payload};   
        
        case ActionTypes.getSpecificItems:
        case ActionTypes.getSortedItems:
            return {...state, isLoading:false, errMsg:null, specificItems:action.payload}; 
        
        case ActionTypes.getCartItems:
            return {...state, isLoading:false, errMsg:null, cartItems:action.payload};
        default:
            return state;
    }
};
