"use client";
import React from "react";

import { apiPost } from "@/lib/api";
import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";
import Input from "@/ui-kit/molecules/Input";

import styles from "./feedback.module.css";

interface IFeedback {
  name: string;
  phone: string;
  email: string;
}

const Feedback: React.FC = () => {
  const [data, setData] = React.useState<IFeedback>({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = React.useState("");

  const handleChangeFabric = React.useCallback(
    (value: string, field: keyof IFeedback) =>
      setData((p) => ({ ...p, [field]: value })),
    []
  );

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        handleChangeFabric(e.target.value, "name");
      },
      [handleChangeFabric]
    );

  const handleChangePhone: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        handleChangeFabric(e.target.value, "phone");
      },
      [handleChangeFabric]
    );
  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        handleChangeFabric(e.target.value, "email");
      },
      [handleChangeFabric]
    );

  const handleSubmit = React.useCallback(async () => {
    try {
      setError("");
      await apiPost("mail/feedback", data, "text");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка отправки формы");
    }
  }, [data]);

  return (
    <Box className={styles.wrapper} component="section" id="Оставить_заявку">
      <Box className={styles.root}>
        <Typography className={styles.title} variant="h4">
          Оставьте свой контакт и мы разработаем и изготовим идеальное решение
          для вас
        </Typography>
        <Box className={styles.fields}>
          <Input
            value={data.name}
            onChange={handleChangeName}
            color="grey_4"
            textColor="text_common"
            placeholder="ФИО"
          />
          <Input
            value={data.phone}
            onChange={handleChangePhone}
            color="grey_4"
            textColor="text_common"
            placeholder="Ваш телефон"
          />
          <Input
            value={data.email}
            onChange={handleChangeEmail}
            color="grey_4"
            textColor="text_common"
            placeholder="Электронная почта"
          />
        </Box>
        <Box className={styles.btn}>
          <Button
            onClick={handleSubmit}
            typographyProps={{ fontWeight: 400, variant: "body2" }}
          >
            Оставить заявку
          </Button>
          <Typography className={styles.error} variant="body4">
            {error}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Feedback);
