import { apiGet } from "@/lib/api";
import About from "@/modules/About";
import Advantages from "@/modules/Advantages";
import Articles from "@/modules/Articles";
import CargoOwner from "@/modules/CargoOwner";
import CommunicationsButtons from "@/modules/CommunicationsButtons";
import Contacts from "@/modules/Contacts";
import DeliveryBanner from "@/modules/DeliveryBanner";
import DownloadFiles from "@/modules/DownloadFiles";
import Feedback from "@/modules/Feedback";
import MainSlider from "@/modules/MainSlider";
import Map from "@/modules/Map";
import Partners from "@/modules/Partners";
import ReasonsIcons from "@/modules/ReasonsIcons";
import ReasonsInfo from "@/modules/ReasonsInfo";
import RelatedProducts from "@/modules/RelatedProducts";
import Usefull from "@/modules/Usefull";

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
    organization_name,
    organization_kpp,
    organization_inn,
  } = await apiGet<IRefInfo>("refInfo", { next: { revalidate: 3600 } });

  const articles = await apiGet<IArticle[]>("articles", {
    next: { revalidate: 3600 },
  });

  const longAddress = `${address_area}, ${address_city}, ${address_street} ${address_house} ${address_office}`;
  const shortAddress = `${address_city}, ${address_street} ${address_house} ${address_office}`;

  return (
    <>
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
      <Usefull />
      <Articles articles={articles} />
      <About />
      <Partners />
      <DownloadFiles />
      <Contacts
        organization={organization_name}
        inn={organization_inn}
        kpp={organization_kpp}
        phone={phoneNumber}
        mail={mail}
        address={longAddress}
      />
      <Map />
    </>
  );
}
