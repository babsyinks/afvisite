let Microsoft

const InitMap = (mapObj)=> {
    Microsoft = window.Microsoft;

    if (Microsoft !== undefined) {
        let mapElement = document.getElementById(mapObj.id) 

        var map = new Microsoft.Maps.Map(mapElement, {
            credentials: mapObj.key, 
            center: new Microsoft.Maps.Location(mapObj.latitude,mapObj.longitude), 

            zoom: mapObj.zoom 
        }); 


        let center = map.getCenter();

                //Create custom Pushpin
                var pin = new Microsoft.Maps.Pushpin(center, {
                    title: mapObj.title, 
                    subTitle: mapObj.subtitle, 
                    text: mapObj.text 
                });
        
                //Add the pushpin to the map
                map.entities.push(pin);
    }
}

function loadBingMapScript(scriptID,mapObj) {
    var BingMaps = document.getElementById(scriptID);
    if (BingMaps) {
        document.body.removeChild(BingMaps);
    }

    const script = document.createElement("script");

    if(mapObj.id === 'map'){
        window.GetMap = () => InitMap(mapObj);
        
        script.src = "https://www.bing.com/api/maps/mapcontrol?callback=GetMap";
        
    }
    else{
        window.loadMapScenario = () => InitMap(mapObj);
        script.src = script.src = "https://www.bing.com/maps/sdk/mapcontrol?callback=loadMapScenario";
    }

    script.async = true; 
    script.defer = true;
    script.id = scriptID;
    document.body.appendChild(script);
}

export default loadBingMapScript