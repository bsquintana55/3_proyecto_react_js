
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Info from '../../components/info/Info';
import Feat from '../../components/features/Features';
import Ubicanos from '../../components/ubicanos/Ubicanos';
import Opinion from '../../components/opinion/Opinion';
import Footer from '../../components/footer/Footer';



function Inicio() {
    return(
        <div>   
            <Navbar/>
            <Banner/>
            <Info/>
            <Feat/>
            <Ubicanos/>
            <Opinion/>
            <Footer/>

        </div>
    );
    
}

export default Inicio;


