import React from 'react'
import CountUp from 'react-countup';
import { motion } from "framer-motion"


function Banner() {
  return (
    <div className='banner-wrapper'>
        <div className='paddings innerwidth d-flex Center banner-container '>


            <div className=' flexcolstart banner-left'>
                <div className='banner-title'>
                    <motion.h1
                    initial={{y:"2rem",opacity: 0}}
                    animate={{y: 0,opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >WELCOME TO ROCKSTAR CALLERS™</motion.h1>
                </div>
                <div className=' flexcolstart banner-des'><span className='secondarytext' >The premier cold calling agency that takes your business to the next</span></div>
                <div className='d-flex Center stats'>
                    <div className='flexcolstart stat'>
                        <span>
                        <CountUp
                 
                  end={33}
                
                 duration={4}

                 prefix="+"
                 >
                    </CountUp>
                        </span>
                        <span className='secondarytext' >Active Clients</span>
                    </div>
                    <div className='flexcolstart stat'>
                        <span>
                        <CountUp
                 
                  end={71}
                
                duration={4}

                 prefix="+"
                 >
                    </CountUp>
                        </span>
                        <span className='secondarytext' >ACTIVE CAMPAIGN</span>
                    </div>
                    <div className='flexcolstart stat'>
                        <span>
                        <CountUp
                 
                  end={500}
                
                duration={4}

                 prefix="+"
                 >
                    </CountUp>
                        </span>
                        <span className='secondarytext' >DAILY LEADS</span>
                    </div>
                    <div className='flexcolstart stat'>
                        <span>
                           
                        <CountUp
                 
                  end={98}
                
                 duration={4}

                 prefix="+"
                 >
                    
                    </CountUp>
                        </span>
                        <span className='secondarytext'>SATISFIED CLIENTS</span>
                    </div>

                </div>
            </div>
            <div className='flexCenter banner-right'>
                <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
               transition={{
                duration:4,
                type:"spring"

            } }
                 className='image-container'>
                    <img src='./images/banner-image.png'></img>
                </motion.div>
            </div>
        </div>

       

    </div>
  )
}

export default Banner