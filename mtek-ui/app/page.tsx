import About from "@/modules/About";
import Advantages from "@/modules/Advantages";
import CargoOwner from "@/modules/CargoOwner";
import CommunicationsButtons from "@/modules/CommunicationsButtons";
import DeliveryBanner from "@/modules/DeliveryBanner";
import MainSlider from "@/modules/MainSlider";
import WhyCustomersChoose from "@/modules/WhyCustomersChoose";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CommunicationsButtons />
      <Advantages />
      <CargoOwner />
      <DeliveryBanner />
      <WhyCustomersChoose />
      <About />
    </>
  );
}
