import React, { useState, useEffect } from 'react';
import './MedicalCenters.css';

const MedicalCenters = () => {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1er3X-G0P4ux1L9Pilcw3e6FciTwMrXM&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', initMap);

    return () => {
      googleMapScript.removeEventListener('load', initMap);
      window.document.body.removeChild(googleMapScript);
    };
  }, []);

  const initMap = () => {
    const userLocation = { lat: 0, lng: 0 };

    const newMap = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: userLocation,
    });

    setMap(newMap);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const userLocation = { lat: latitude, lng: longitude };
          newMap.setCenter(userLocation);

          const request = {
            location: userLocation,
            radius: '5000',
            type: 'hospital',
            keyword: 'hospital'
          };

          const service = new window.google.maps.places.PlacesService(newMap);
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              for (let i = 0; i < results.length; i++) {
                const place = results[i];
                const marker = new window.google.maps.Marker({
                  position: place.geometry.location,
                  map: newMap,
                  title: place.name,
                });
                marker.addListener('click', () => {
                  newMap.setZoom(18);
                  newMap.setCenter(marker.getPosition());
                });
              }
            }
          });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSearch = () => {
    if (!searchQuery) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        
        const request = {
          location: location,
          radius: '5000',
          type: 'hospital',
          keyword: 'hospital'
        };

        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              const place = results[i];
              const marker = new window.google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name,
              });
              marker.addListener('click', () => {
                map.setZoom(18);
                map.setCenter(marker.getPosition());
              });
            }
          }
        });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="">
      <div className='input-box-container'>
      <h1 className='text-3xl font-semibold'>Search for Nearby Medical Centers</h1>
      <input
      className='location-search-input p-3 mt-10'
        type="text"
        value={searchQuery}
        placeholder="Enter location"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      </div>
      
      <div className='map-container-wrapper'>
      <div id="map" className='map-container'></div>
      </div>
    </div>
  );
};

export default MedicalCenters;
