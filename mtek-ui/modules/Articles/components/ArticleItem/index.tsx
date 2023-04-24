import React from "react";

import Image from "next/image";

import { SERVER_URL } from "@/lib/constants";
import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./articleItem.module.css";

interface IArticleItemProps {
  title: string;
  text: string;
  src: string;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ title, text, src }) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.info}>
        <Typography fontWeight={700} variant="h4">
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
      <Box className={styles.imgBox}>
        <Image
          fill
          sizes="(max-width: 780px) 100vw"
          src={`${SERVER_URL}/${src}`}
          alt={title}
        />
      </Box>
    </Box>
  );
};

export default React.memo(ArticleItem);
