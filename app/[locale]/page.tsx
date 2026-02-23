import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPlaces from "../components/FeaturedPlaces";
import PlacesGrid from "../components/PlacesGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <FeaturedPlaces />
      <PlacesGrid />
      <Footer />
    </main>
  );
}
