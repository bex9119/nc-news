import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import ErrorHandling from "./ErrorHandling";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ArticleHome = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitedArticles, setLimitedArticles] = useState([]);
  const [mostCommentedArticle, setMostCommentedArticle] = useState([])
  const [mostLikedArticle, setMostLikedArticle] = useState([])
     const [error, setError] = useState(null);

  useEffect(() => {
      getAllArticles()
        .then((allArticles) => {
          setArticlesList(allArticles);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    getAllArticles(null, null, "comment_count")
      .then((commentArticles) => {
        setMostCommentedArticle([commentArticles[0]]);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    getAllArticles(null, null, 'votes').then((voteArticles) => {
      setMostLikedArticle([voteArticles[0]])
      })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
  }, [])
    
    useEffect(() => {
        setLimitedArticles([...articlesList].slice(0, 5));
    }, [articlesList])

  if (isLoading) {
      return <h2>Loading...</h2>
  }
    if (error) {
      return (
        <ErrorHandling
          status={error.response.status}
          message={error.response.data.msg}
        />
      );
    } else {
    return (
      <>
        <main>
          <h2>Newest</h2>
          <ArticleCard multipleArticles={limitedArticles} />
          <Row xs={1} md={2}>
            <Col >
              <h2>Most Commented:</h2>
              <ArticleCard multipleArticles={[...mostCommentedArticle]} />
            </Col>
            <Col >
              <h2>Most Liked:</h2>
              <ArticleCard multipleArticles={[...mostLikedArticle]} />
            </Col>
          </Row>
        </main>
      </>
    );
    }
}

export default ArticleHome;
