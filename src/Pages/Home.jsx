import Products from '../Components/Products/Products';
import Title from '../Components/Title/Title';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Campus from '../Components/Campus/Campus';
import Brands from '../Components/Brands/Brands';
import Tours from '../Components/Tours/Tours';
import Hero from '../Components/Hero/Hero';
import Cars from '../Components/Cars/Cars';


const Home = () => {
    return (
        <section>
            <Hero/>            
            <div className="container">
            <About />
            <Title subTitle="Movie Collection" title="Movies To Watch" />
            <Products />
    
            <Title subTitle="Upcoming Movies" title="Upcoming releases 2025" />
            <Campus />
         
            
            <Title subTitle="TRENDS" title="Most Watched Movies" />
            <Tours /> 

            
            <Title subTitle="Series" title="Television Show" />
            <Cars /> 
            
            <Title subTitle="CONTACT US" title="Get In Touch" />
            <Contact />
            </div>

        </section>

    )
}

export default Home;