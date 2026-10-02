import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUs from "../components/WhyChooseUs";

function Home () {
    return (
        <div className="bg-white">
            <main>
                <Navbar/>
                <Hero/>
                <Categories/>
                <FeaturedProducts/>
                <PromoBanner/>
                <WhyChooseUs/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home;