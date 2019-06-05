const initialeState = {
 article: [],
 source: [],
}

export const articleReducer = (state=initialeState, action) => {
 switch (action.type) {
   case 'GET_ARTICLES':
     return {...state, article:[...action.payload]};
   case 'GET_ARTICLES_REJECTED':
     return action.payload
     case 'GET_CATEGORIES':
       return {...state, article:[...action.payload]};
     case 'GET_CATEGORIES_REJECTED':
       return action.payload
       case 'GET_SOURCES':
         return {...state, source:[...action.payload]};
       case 'GET_SOURCES_REJECTED':
         return action.payload
         case 'GET_SOURCESICON':
           return {...state, source:[...action.payload]};
         case 'GET_SOURCESICON_REJECTED':
           return action.payload
   default: {
     return state
   }
 }
}
