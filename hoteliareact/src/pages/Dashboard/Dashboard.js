import './dash.css';
import Usbar from '../../components/usbar/Usbar.js'
import InfoD from '../../components/infodash/InfoD.js';

function Dashapp() {
  return (
    <div class="bodyDash" >
     <Usbar />
      <InfoD />
    </div>

  );
}

export default Dashapp;