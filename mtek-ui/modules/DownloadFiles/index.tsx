import { SERVER_URL } from "@/lib/constants";
import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import { DownloadIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./downloadFiles.module.css";

const btns = [
  { label: "Карточка  предприятия", href: "companyCard" },
  { label: "Презентация компании", href: "companyPres" },
  { label: "Реквизиты компании", href: "companyDetails" },
];

interface IDownloadFilesProps {
  isMobile: boolean;
}

const DownloadFiles: React.FC<IDownloadFilesProps> = ({ isMobile }) => {
  return (
    <Box component="section" id="Загружаемые_файлы" className={styles.root}>
      <Typography variant="h2" fontWeight={700}>
        Загружаемые файлы
      </Typography>
      <Box className={styles.btns}>
        {btns.map(({ label, href }, i) => (
          <a href={`${SERVER_URL}/api/files/${href}`} key={i}>
            <Button
              fullWidth
              shadow={1}
              icon={<DownloadIcon />}
              iconAside
              variant="text"
              size={isMobile ? "small" : "large"}
              typographyProps={{ fontWeight: 700 }}
              iconProps={{ size: isMobile ? 16 : 32 }}
            >
              {label}
            </Button>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default DownloadFiles;
