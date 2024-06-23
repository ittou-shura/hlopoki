import {useGSAP} from '@gsap/react'
import {useRef} from 'react'
import gsap from 'gsap'
import  '../styles/touchMe.css'

function TouchMe({notTouched}){
    const circleRef  = useRef();
    // useGSAP(()=>{
    //     gsap.to(circleRef.current,{
    //         scale:20,
    //         duration:2,
    //         ease: "power4.out",
    //         repeat:-1,
    //     });
    // });
    const handleTouch = ()=>{
        notTouched = !notTouched;
    }
    return(

        <div className="container" 
        onClick = {handleTouch}>
            <div ref={circleRef} className="circles">
            
            </div>
        </div>
    );
}
export default TouchMe
