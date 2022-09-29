import './App.css';
import Usbar from './componente/usbar/Usbar';
import Info from './componente/info/Info';

function Dashapp() {
  return (
    <div className="dashboard">
     <Usbar />
   <Info/>
    </div>

  );
}

export default Dashapp;