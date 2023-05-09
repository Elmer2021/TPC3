import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
//Esse e o representante do mapa de Santo Antao
const Maps = () => {
    
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXZsaXNvbnRhcyIsImEiOiJjbGdqc2Izc2gxOHRlM2pteTRjN2VwZGl6In0.kjVMPGz-uOf76SLj7A0mPw';
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-25.1723049, 17.0555285],
      zoom:10
      
     
    });
  }, []);

  return (
    <div id="map-container" style={{ height: '400px' }}>
   
    </div>
     
  

      
  );
};

export default Maps;
