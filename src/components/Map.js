import React,{useEffect,useCallback} from 'react'
let Microsoft

export default function Map() {
const loadBingMapScript = useCallback(function loadBingMapScript() {
    var BingMaps = document.getElementById("BingMaps");
    if (BingMaps) {
        document.body.removeChild(BingMaps);
    }

    window.loadMapScenario = () => InitMap();
    
    const script = document.createElement("script");
    script.src = "https://www.bing.com/maps/sdk/mapcontrol?callback=loadMapScenario";
    script.async = true;
    script.defer = true;

    script.id = "BingMaps";
    document.body.appendChild(script);
},[]
)

useEffect(
    ()=>{
        loadBingMapScript();
    },[loadBingMapScript]
) 
    


 const InitMap = ()=> {
    Microsoft = window.Microsoft;

    if (Microsoft !== undefined) {
        let mapElement = document.getElementById('map')

        var map = new Microsoft.Maps.Map(mapElement, {
            credentials: 'Ajd79zktPW0ujfpVikFLM6O_rjHCfH6qQE631B0DZb2Q71xhN0FiEWZ18yZ2gO3v',
            center: new Microsoft.Maps.Location(9.038229,7.484308),
            options: {
                title: "AFVI Office",
              },
            zoom: 16
        }); 

        let center = map.getCenter();

                //Create custom Pushpin
                var pin = new Microsoft.Maps.Pushpin(center, {
                    title: 'AFVI',
                    subTitle: 'OFFICE',
                    text: '1'
                });
        
                //Add the pushpin to the map
                map.entities.push(pin);
    }
}

    return (<div>
                <div style={{ height: "500px", width: "100%" }}>
                    <div id="map" ></div>
                </div>
            </div>
    )
    
}