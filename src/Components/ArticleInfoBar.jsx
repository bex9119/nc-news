import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import TopicSharpIcon from "@mui/icons-material/TopicSharp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const ArticleInfoBar = ({ article }) => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton
        disabled={true}
        style={{ color: "inherit", fontSize: "small" }}
      >
        <CreateSharpIcon />
        <span> {article.author}</span>
      </IconButton>
      <IconButton
        disabled={true}
        style={{ color: "inherit", fontSize: "small" }}
      >
        <TopicSharpIcon />
        <span> {article.topic}</span>
      </IconButton>
      <IconButton
        disabled={true}
        style={{ color: "inherit", fontSize: "small" }}
      >
        <CommentSharpIcon />
        <span> {article.comment_count}</span>
      </IconButton>
    </Stack>
  );
};

export default ArticleInfoBar;
