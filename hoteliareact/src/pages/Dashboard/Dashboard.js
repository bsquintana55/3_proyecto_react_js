import './dash.css';
import Usbar from '../../componente/usbar/Usbar.js'
import Info from '../../componente/info/Info.js';

function Dashapp() {
  return (
    <div className="dashboard">
     <Usbar />
   <Info/>
    </div>

  );
}

export default Dashapp;