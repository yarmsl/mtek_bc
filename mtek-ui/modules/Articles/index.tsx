import React from "react";

import Box from "@/ui-kit/atoms/Box";

import styles from "./articles.module.css";
import ArticleItem from "./components/ArticleItem";

interface IArticlesProps {
  articles: IArticle[];
}

const Articles: React.FC<IArticlesProps> = ({ articles }) => {
  return (
    <Box className={styles.root}>
      {articles?.map((article, i) => (
        <ArticleItem key={i} {...article} />
      ))}
    </Box>
  );
};

export default React.memo(Articles);
