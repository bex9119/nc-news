import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../api";
import formatDate from "../Utils/utils"
import ArticleInfoBar from "./ArticleInfoBar";
import Votes from "./Votes";
import Stack from "@mui/material/Stack";


const IndividualArticle = () => {
  const { article_id } = useParams("");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIndividualArticle(article_id)
      .then((articleRes) => {
        setArticle(articleRes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);


  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return (
      <section>
        <h2>{error.response.status}</h2>
        <p>{error.response.data.msg}</p>
      </section>
    );
  } else {
    return (
      <article className="individualArticle">
        <header>
          <h2>{article.title}</h2>
          <p>{formatDate(article)}</p>
        </header>
        <main>
          <img id="articleimg" src={article.article_img_url} />
          <p>{article.body}</p>
          <Stack direction="row" spacing={2}>
            <ArticleInfoBar article={article} setArticle={setArticle} />
            <Votes article={article} setArticle={setArticle} />
          </Stack>
        </main>
      </article>
    );
  }
};

export default IndividualArticle;
