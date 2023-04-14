interface IArticle {
  id: number;
  src: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

interface IArticleDto {
  title: string;
  text: string;
}
