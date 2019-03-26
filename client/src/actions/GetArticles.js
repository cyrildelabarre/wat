import axios from 'axios';

export function getArticles() {
 return function(dispatch) {
   axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=be5007db5e5c4895a77579be8c5d173e')
   .then(function(response) {
     dispatch({type:'GET_ARTICLES', payload:response.data.articles})
   })
   .catch(function(err) {
     dispatch({type:'GET_ARTICLES_REJECTED', payload:err})
   })
 }
}
