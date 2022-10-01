import './dash.css';
import Usbar from '../../../../hoteliareact/src/components/usbar/Usbar.js'
import Info from '../../../../hoteliareact/src/components/infodash/Info.js';

function Dashapp() {
  return (
    <div class="bodydash" >
     <Usbar />
   <Info/>
    </div>

  );
}

export default Dashapp;