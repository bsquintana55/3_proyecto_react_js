import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from'sweetalert2';

function ListarReg({us,setUplist,upList,handleOpen,setDataModal}){

    /*1. Crear petición asíncrona*/
    const url="https://hoteliakuepa.herokuapp.com/users"; 

    /*2. Función para borrar un registro a partir del evento botón eliminar*/
       const handleDelete=async()=>{
        
        Swal.fire({
            title: 'Está seguro que desea eliminar este registro?',
            text: "No se puede revertir está acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:"Cancelar",
            confirmButtonText: 'Borrar!'
          }).then((result) => {

            if (result.isConfirmed) {
                /*Eliminando de la BD */
                axios.delete(`${url}/${us._id}`).then((response)=>{
                console.log(response);
                
                /*Eliminando estado */
                  if (response.status === 200) {
                    Swal.fire(
                        'Eliminado!',
                        `El usuario ha sido eliminado exitosamente!`,
                        'success'
                    )
                    setUplist(!upList);
                }else {
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al eliminar el usuario!',
                        'error'
                    )
                }
       });
            }
        
          })
        
        
    }

    /*3. Función para editar un registro*/
    const handleEdit=()=>{
        handleOpen();
        setDataModal(us);
    }
    return(
        <div className="col-4 mb-3">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="text-center">{us.nombre} {us.apellido}</Card.Title>
                <Card.Text>
                <strong>Tipo Documento: </strong>{us._id}<br/>
                <strong>Tipo de documento: </strong>{us.tipodoc}<br/>      
                <strong> Nombre </strong>{us.nombre}<br/>      
                <strong> Apellido </strong>{us.apellido}<br/>      
                <strong>Fecha de nacimiento </strong>{us.fnacimiento}<br/>   
                <strong>Genero </strong>{us.genero}<br/> 
                <strong> Gmail </strong>{us.email}<br/> 
                <strong> telefono </strong>{us.telefono}<br/> 
                <strong> Pais Origen </strong>{us.paisorigen}<br/> 
                <strong> Clave </strong>{us.password}<br/> 
                <strong> Tipo de Usuario </strong>{us.tipouser}<br/>              
                </Card.Text>
                <button className="btn btn-warning me-2" onClick={handleEdit}>Editar</button>
                <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </Card.Body>
            
        </Card>
        </div>
      
    );
}
export default ListarReg;