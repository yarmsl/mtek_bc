import { apiGet } from "@/lib/api";
import About from "@/modules/About";
import Advantages from "@/modules/Advantages";
import CargoOwner from "@/modules/CargoOwner";
import CommunicationsButtons from "@/modules/CommunicationsButtons";
import DeliveryBanner from "@/modules/DeliveryBanner";
import Feedback from "@/modules/Feedback";
import Footer from "@/modules/layouts/Footer";
import Header from "@/modules/layouts/Header";
import MainSlider from "@/modules/MainSlider";
import ReasonsIcons from "@/modules/ReasonsIcons";
import ReasonsInfo from "@/modules/ReasonsInfo";
import RelatedProducts from "@/modules/RelatedProducts";
import Box from "@/ui-kit/atoms/Box";

import styles from "./page.module.css";

export default async function Home() {
  const {
    personalArea_externalLink,
    personalArea_isShow,
    address_area,
    address_city,
    address_street,
    address_house,
    address_office,
    manager_phoneNumber,
    phoneNumber,
    mail,
  } = await apiGet<IRefInfo>("refInfo");

  const longAddress = `${address_area}, ${address_city}, ${address_street} ${address_house} ${address_office}`;
  const shortAddress = `${address_city}, ${address_street} ${address_house} ${address_office}`;

  return (
    <>
      <Header
        personalAreaLink={personalArea_externalLink}
        isPersonalArea={personalArea_isShow}
      />
      <Box component="main" className={styles.container}>
        <MainSlider shortAddress={shortAddress} phoneNumber={phoneNumber} />
        <CommunicationsButtons
          personalAreaLink={personalArea_externalLink}
          isPersonalArea={personalArea_isShow}
          managerPhoneNumber={manager_phoneNumber}
        />
        <Advantages />
        <CargoOwner />
        <DeliveryBanner />
        <ReasonsIcons />
        <ReasonsInfo mail={mail} phoneNumber={phoneNumber} />
        <RelatedProducts />
        <Feedback />
        <About />
      </Box>
      <Footer />
    </>
  );
}
