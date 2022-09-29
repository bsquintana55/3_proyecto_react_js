import './dash.css';
import Usbar from '../../../../reacthotelia/src/components/usbar/Usbar.js'
import Info from '../../../../reacthotelia/src/components/infodash/Info.js';

function Dashapp() {
  return (
    <div className="dashboard">
     <Usbar />
   <Info/>
    </div>

  );
}

export default Dashapp;