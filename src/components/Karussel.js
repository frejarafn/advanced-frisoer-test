// Michelle

import React from "react"; 
import {motion} from "framer-motion"; 
import "../styles/Karussel.css";
import {useRef, useEffect, useState} from "react"; 


export default function karussel(){

  const image= [1,2,3,4,5].map(n => `/images/KigInd${n}.jpg`); 


    return ( 
        <section>
            <motion.div className="carousel">
                <motion.div drag="x" 
                dragConstraints={{right:0}} 
                className="inner-carousel">
                {image.map ((image, key) => {
                    return(
                        <motion.div key={key} className="item">
                            <img src ={image} alt="frisør" />
                        </motion.div>
                    )
                })} 
                </motion.div>
            </motion.div>
        </section>
    );
}; 
