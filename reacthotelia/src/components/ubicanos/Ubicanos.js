import './ubi.css';
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1217.0042570013009!2d-74.07685339049154!3d4.600487973222492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1658804876648!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


function Ubicanos() { 

    const props=0;
    const {
        iframeSource ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.964412016966!2d-74.07746738568648!3d4.600397243801156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1659027279856!5m2!1ses!2sco"></iframe>'
    } = props;
    
    return(
      
    <section class="ubicacion">
    
    <div class="ubicanos">
        <h1>Ubícanos</h1>
    </div>
    
    <div class="mapa">
    <div className="Ubicacion" dangerouslySetInnerHTML={{__html: iframeSource}}/>
    </div>
    
    <div class="direccion"><h3>AVENIDA CARRERA 8. #12A-42, BOGOTÀ DC, COLOMBIA</h3><div class="linea"></div><h3>+57 601 4567899</h3></div>
    </section>
    

    );
}
export default Ubicanos;