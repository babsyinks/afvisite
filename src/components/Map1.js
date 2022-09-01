import React,{useEffect,useCallback} from 'react'
import loadBingMap from '../utils/loadBingMapScript'

const mapObj = {
id:'map1',
key: 'Ajd79zktPW0ujfpVikFLM6O_rjHCfH6qQE631B0DZb2Q71xhN0FiEWZ18yZ2gO3v',
latitude:9.043859,
longitude: 7.498931,
fulltitle:"AFVI HEAD OFFICE",
zoom:16,
title:'AFVI HEAD',
subtitle:'OFFICE',
text:'1'
} 
export default function Map1() {
const loadBingMapScript = useCallback(loadBingMap,[])

useEffect( 
    ()=>{
        loadBingMapScript("BingMaps1",mapObj);
    },[loadBingMapScript]
) 

    return (<div>
                <div style={{ height: "500px", width: "100%" }}>
                    <div id="map1"></div>
                </div>
            </div> 
    )
    
}