"use client";

import { memo, useCallback, useEffect, useState } from "react";

import Link from "next/link";

import Box from "@/ui-kit/atoms/Box";
import UiLink from "@/ui-kit/atoms/Link";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";
import Modal from "@/ui-kit/molecules/Modal";

import styles from "./cookieBanner.module.css";

const CookieBanner: React.FC = memo(() => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isAccepted = localStorage.getItem("cookie_banner_accepted");

    if (!isAccepted) {
      setIsOpen(true);
    }

    return () => {
      setIsMounted(false);
      setIsOpen(false);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem("cookie_banner_accepted", "true");
  }, []);

  if (!isMounted) return null;

  return (
    <Modal isOpen={isOpen} onBackdropClick={handleClose} position="bottom">
      <Box className={styles.root}>
        <Typography className={styles.text} variant="body2">
          Мы используем cookie, сервисы веб-аналитики Яндекс Метрика,
          top.mail.ru и иные аналогичные технологии для анализа посещаемости
          сайта — они помогают нам понять, как вы взаимодействуете с нашим
          сайтом и сделать его удобнее и лучше. Оставаясь на сайте, вы
          подтверждаете свое согласие на их использование и предоставляете
          согласие на обработку ваших персональных данных с помощью сервисов
          веб-аналитики . Если вы не согласны, вам нужно покинуть сайт.{" "}
          <Link
            href={`/${encodeURIComponent("Политика_конфиденциальности")}`}
            passHref
            legacyBehavior
          >
            <UiLink color="primary_dark" variant="body2">
              Политика конфиденциальности
            </UiLink>
          </Link>
        </Typography>
        <Box className={styles.actions}>
          <Button size="small" onClick={handleClose}>
            Принять
          </Button>
        </Box>
      </Box>
    </Modal>
  );
});

CookieBanner.displayName = "CookieBanner";
export default CookieBanner;
