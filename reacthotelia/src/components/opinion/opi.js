import './opi.css';

function Opinion() { 
    return(
      
    
     <section>
        <section class="opinio">
        <div class="titulo"><h1>Nuestros usuarios dicen...</h1></div>
        <div class="cards">       

            <div id="op" >
                    <div class="nombreP">
                        <img src="https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg
                        "/>
                        
                        <h5>Camilo Sanchez</h5>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star roja"></i>
                    </div>  
                    
                    <div class="descripcion">                            
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum.</p>
                    </div>
            </div>

            <div id="op">
                <div class="nombreP">
                    <img src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg
                    "/>
                    
                    <h5>Fernada Peralta</h5>
                   
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="descripcion">                            
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum.</p>
                </div>
            </div>
            <div id="op">
                <div class="nombreP">
                 <img src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000
                    "/> 
                   
                        <h5>Andres Martinez</h5>
                    
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star roja"></i>
                </div>
                <div class="descripcion">                            
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.Elit quis enim 
                        ultricies ullamcorper. Nunc aenean auctor vel diam dictum.</p>
                </div>
            </div>
        </div>
    </section>


    <div class="carruselOp">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div id="op" class="d-block w-100">
                    <div class="nombreP">
                        <img src="https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg
                        "/>
                        <h5>Camilo Sanchez</h5>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star roja"></i>
                    </div>  
                    
                    <div class="descripcion">                            
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
    
              <div class="carousel-item">
                 <div id="op"  class="d-block w-100">
                    <div class="nombreP">
                       <img src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg
                       "/>
                        <h5>Fernanda Peralta</h5>
                       
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="descripcion">                            
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <div id="op"  class="d-block w-100">
                    <div class="nombreP">
                        <img
                            src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000
                            "/> 
                        <h5>Andres Martinez</h5>
                        
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star roja"></i>
                    </div>
                    <div class="descripcion">                            
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.Elit quis enim 
                            ultricies ullamcorper. Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>



    </section>
    

    );
}
export default Opinion;