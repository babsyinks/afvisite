import React,{useEffect,useCallback} from 'react'
import loadBingMap from '../utils/loadBingMapScript'

const mapObj = {
id:'map',
key: 'Ap-QGZmommEIhI6COIFzyECTom9VWy7mP__NBNuyvKXepaf_cEzwT05CZfuQZJmD',
latitude:9.038229,
longitude: 7.484308,
fulltitle:"AFVI BRANCH OFFICE",
zoom:16,
title:'AFVI BRANCH',
subtitle:'OFFICE',
text:'2'
}
export default function Map() {
const loadBingMapScript = useCallback(loadBingMap,[])

useEffect(
    ()=>{
        loadBingMapScript("BingMaps",mapObj);
    },[loadBingMapScript]
) 

    return (<div>
                <div style={{ height: "500px", width: "100%" }}>
                    <div id="map" ></div>
                </div>
            </div>
    )
    
}