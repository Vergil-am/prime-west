import Buy from "@/components/home/buy";
import Contact from "@/components/home/contact";
import Home from "@/components/home/home";
import Invest from "@/components/home/invest";
import Rent from "@/components/home/rent";
export default function HomePage() {
  return (
    <>
      <Home />
      <Buy />
      <Rent />
      <Invest />
      <Contact />
    </>
  );
}
