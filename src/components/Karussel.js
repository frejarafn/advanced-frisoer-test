// Michelle

import React from "react"; 
import {motion} from "framer-motion"; 
import {useRef, useEffect, useState} from "react"; 


export default function karussel(){

  const image= [1,2,3,4,5].map(n => `/images/KigInd${n}.jpg`); 

    return ( 
        <section>
            <motion.div className="carousel">
                <motion.div className="inner-carousel">
                {image.map ((image, key) => {
                    return(
                        <motion.div key={key}>
                            <img src ={image} alt="" />
                        </motion.div>
                    )
                })} 
                </motion.div>
            </motion.div>
        </section>
    );
}; 
