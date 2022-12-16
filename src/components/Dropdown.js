//Michelle 

import React, {useState} from "react";
import "../styles/Dropdown.css";



export default function dropdown() {

  return(
  <>
  <div className="dropdown_container">
    <div className="">
      <label className="">Vælg service</label>
      <select name="service" className="overblik">

        <option>Vælg service</option>

        <option>Dameklip</option>
        <option>Herreklip</option>
      </select>

    </div>

  </div>
  
  </>

  )
}
 



// const Dropdown = () => {
//   const [open, setOpen] = React.useState(false); 

//   const handleOpen = () => {
//     setOpen(!open); 
//   }; 

//   const handleMenuOne = () => {
//     setOpen(false); 
//   }; 

//   const handleMenuTwo = () => {
//     setOpen(false); 
//   }; 

//   const handleMenuthree = () => {
//     setOpen(false); 
//   }; 

//   const handleMenufour = () => {
//     setOpen(false); 
//   }; 

//   const handleMenufive = () => {
//     setOpen(false); 
//   }; 





// return (
//   <section className="dropdown_container">
    
  
//   </section>
// );
// }; 

// export default Dropdown; 






{/* <div className="Search">
          <button className="Search_Input" onClick={handleOpen}>Vælg service</button>
            {open ? (
         <ul className="menu">
               <li className="menu-item">
              <button onClick={handleMenuOne}>Dame Klip</button>
            </li>
            <li className="menu-item">
             <button onClick={handleMenuTwo}>Herre Klip</button>
           </li>
           <li className="menu-item">
            <button onClick={handleMenuthree}>Farvning</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenufour}>Permanent</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenufive}>Hår opsætning</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div></div>}
    </div> */}