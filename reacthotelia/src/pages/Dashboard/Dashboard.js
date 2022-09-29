import './dash.css';
import Usbar from '../../components/usbar/Usbar.js'
import Info from '../../components/infodash/Info.js';

function Dashapp() {
  return (
    <div className="dashboard">
     <Usbar />
   <Info/>
    </div>

  );
}

export default Dashapp;