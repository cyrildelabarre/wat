const initialeState = {
 article: []
}

export const articleReducer = (state=initialeState, action) => {
 switch (action.type) {
   case 'GET_ARTICLES':
     return {...state, article:[...action.payload]};
   case 'GET_ARTICLES_REJECTED':
     return action.payload
   default: {
     return state
   }
 }
}
