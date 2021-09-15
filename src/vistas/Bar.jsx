import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  return(
      <>
  <header>
        <div className="topbar dark-color">
            <div className="ed-grid m-grid-3">
                <Link to="/"><p className="s-mb-1 m-mb-0 s-center m-left t1" style={{color: 'white'}}>GYM Glofox</p></Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
                
            </div>
        </div>
    </header>   
       </> 
  );
}

export default Bar;
