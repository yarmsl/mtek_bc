import MobileDetect from "mobile-detect";
import { headers } from "next/headers";

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
  const refInfo = await apiGet<IRefInfo>("refInfo", {
    next: { revalidate: 3600 },
  });

  const articles = await apiGet<IArticle[]>("articles", {
    next: { revalidate: 3600 },
  });

  const longAddress = `${refInfo?.address_area}, ${refInfo?.address_city}, ${refInfo?.address_street} ${refInfo?.address_house} ${refInfo?.address_office}`;
  const shortAddress = `${refInfo?.address_city}, ${refInfo?.address_street} ${refInfo?.address_house} ${refInfo?.address_office}`;
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const detected = new MobileDetect(userAgent);
  const isMobile = Boolean(detected.mobile());

  return (
    <>
      <MainSlider
        shortAddress={shortAddress}
        phoneNumber={refInfo?.phoneNumber || ""}
      />
      <CommunicationsButtons
        personalAreaLink={refInfo?.personalArea_externalLink || ""}
        isPersonalArea={refInfo?.personalArea_isShow || false}
        managerPhoneNumber={refInfo?.manager_phoneNumber || ""}
        isMobile={isMobile}
      />
      <Advantages />
      <CargoOwner />
      <DeliveryBanner />
      <ReasonsIcons />
      <ReasonsInfo
        mail={refInfo?.mail || ""}
        phoneNumber={refInfo?.phoneNumber || ""}
      />
      <RelatedProducts />
      <Feedback />
      <Usefull />
      <Articles articles={articles || []} />
      <About />
      <Partners />
      <DownloadFiles isMobile={isMobile} />
      <Contacts
        organization={refInfo?.organization_name}
        inn={refInfo?.organization_inn}
        kpp={refInfo?.organization_kpp}
        phone={refInfo?.phoneNumber}
        mail={refInfo?.mail}
        address={longAddress}
      />
      <Map />
    </>
  );
}
