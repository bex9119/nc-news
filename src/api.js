import axios from 'axios'

const newsApi = axios.create({
  baseURL: "https://news-13r8.onrender.com/api"
});

const getAllArticles = () => {
    return newsApi.get('/articles')
        .then(({data}) => {
        return data.articles
    })
}

const getIndividualArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const postComment = (article_id, commentToPost) => {
  return newsApi.post(`/articles/${article_id}/comments`, commentToPost)
    .then(({data}) => {
      return data.postedComment
    });
};

export default getAllArticles
export {getIndividualArticle, postComment}