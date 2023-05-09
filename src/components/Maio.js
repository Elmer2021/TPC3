import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Maio = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXZsaXNvbnRhcyIsImEiOiJjbGdqc2Izc2gxOHRlM2pteTRjN2VwZGl6In0.kjVMPGz-uOf76SLj7A0mPw';
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-23.1563014, 15.2272182],
      zoom: 12
      
     
    });
    
  }, []);

  return (
    <div id="map-container" style={{ height: '400px' }}>
   
    </div>
     
  

      
  );
};

export default Maio;
