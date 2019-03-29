import axios from 'axios';




export function getArticles() {
  let articleArray = []
  return function(dispatch) {
    axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=be5007db5e5c4895a77579be8c5d173e')
    .then(function(response) {
      response.data.articles.map((article, i) => {
        if(article.content !== null && article.description !== null && article.publishedAt !== null && article.source.name !== null && article.title !== null && article.urlToImage !== null && article.url !== null && article.description !== "" && article.content !== "") {
          articleArray.push(article)
          return true
        }
        return false
      })
    })
    .then(function() {
      dispatch({type:'GET_ARTICLES', payload:articleArray})
    })
    .catch(function(err) {
      dispatch({type:'GET_ARTICLES_REJECTED', payload:err})
    })
  }
}

export function getCategories(category) {
  let articleCategories = []
  return function(dispatch) {
    axios.get('https://newsapi.org/v2/top-headlines?country=fr&category='+category+'&apiKey=be5007db5e5c4895a77579be8c5d173e')
    .then(function(response) {
      response.data.articles.map((article, i) => {
        if(article.content !== null && article.description !== null && article.publishedAt !== null && article.source.name !== null && article.title !== null && article.urlToImage !== null && article.url !== null && article.description !== "" && article.content !== "") {
            articleCategories.push(article)
            return true
        }
        return false
      })
    })
    .then(function() {
      dispatch({type:'GET_ARTICLES', payload:articleCategories})
    })
    .catch(function(err) {
      dispatch({type:'GET_CATEGORIES_REJECTED', payload:err})
    })
  }
}

export function getSources() {
  return function(dispatch) {
    axios.get('https://newsapi.org/v2/sources?apiKey=be5007db5e5c4895a77579be8c5d173e')
    .then(function(response) {
      dispatch({type:'GET_SOURCES', payload:response.data.sources})
    })
    .catch(function(err) {
      dispatch({type:'GET_SOURCES_REJECTED', payload:err})
    })
  }
}
