import Products from '../Components/Products/Products';
import Title from '../Components/Title/Title';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Campus from '../Components/Campus/Campus';
import Brands from '../Components/Brands/Brands';
import Tours from '../Components/Tours/Tours';
import Hero from '../Components/Hero/Hero';


const Home = () => {
    return (
        <section>
            <Hero/>            
            <div className="container">
            <About />
            <Title subTitle="TOUR GUIDE" title="Places To Visit" />
            <Products />
    
            <Title subTitle="GALLERY" title="Our Team In Action" />
            <Campus />
            <Title subTitle="OUR BRANDS" title=" Collaboration With Global Brands" />
            <Brands />

            
            <Title subTitle="HOTELS" title="Book Our Hotels" />
            <Tours /> 
            
            <Title subTitle="CONTACT US" title="Get In Touch" />
            <Contact />
            </div>

        </section>


    )
}

export default Home;