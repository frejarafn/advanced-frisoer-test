// Michelle

import React from "react"; 
import {motion} from "framer-motion"; 
import {useRef, useEffect, useState} from "react"; 


export default function karussel(){

    const images= [ 
        "Firstfoto",
        "Secondfoto"
        
    ]

    return( 
        <section>
            <motion.div className="carousel">
                <motion.div className="inner-carousel">
                {images.map (image => {
                    return(
                        <motion.div>
                            <img src ={image} alt="" />
                        </motion.div>
                    )
                })} 
                </motion.div>
            </motion.div>
        </section>
    )
};