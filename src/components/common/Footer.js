import NavigateList from "./footerComponents/NavigateList";
import ServiceList from "./footerComponents/ServiceList";
import FleetItems from "./footerComponents/FleetItems";
import AboutUs from "./footerComponents/AboutUs";
import ContactUs from "./footerComponents/ContactUs";
import RightsPart from "./footerComponents/RightsPart";

export default function Footer() {
  return (
    <footer className="bg-[#16181A] pt-6">
      <div className="sm:align-items-center pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:gap-x grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 1024:grid-cols-5 lg:col-span-3 2xl:grid-cols-5">
            <AboutUs />

            <ServiceList />

            <FleetItems />

            <NavigateList />

            <ContactUs />
          </div>
        </div>
      </div>

      <RightsPart />
    </footer>
  );
}
