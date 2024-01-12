import React, { useRef, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  InfoWindow,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

function PrimaryMaps({ lat, lng, onChangeCoordinate, readonly = false }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [viewPort, setViewPort] = useState({
    lat: lat,
    lng: lng,
  });

  const [map, setMap] = React.useState(null);
  const searchRef = useRef();

  async function calculateRoute() {
    if (searchRef.current.value === "") {
      return;
    }
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: searchRef.current.value },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          setViewPort({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
          onChangeCoordinate({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      }
    );
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({
      lat: Number(lat ?? -6.9064866),
      lng: Number(lng ?? 107.7073688),
    });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  function handleDragEnd(maps) {
    const { latLng } = maps;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setViewPort({
      lat,
      lng,
    });
    onChangeCoordinate({
      lat,
      lng,
    });
  }

  return isLoaded ? (
    <>
      {readonly ? (
        ""
      ) : (
        <Autocomplete onPlaceChanged={calculateRoute}>
          <input
            className="py-3 mb-5 mt-2 px-5 w-full rounded-lg bg-zinc-800"
            type="text"
            placeholder="Search Location"
            ref={searchRef}
          ></input>
        </Autocomplete>
      )}
      <GoogleMap
        mapContainerClassName="w-full h-[24rem]"
        center={{
          lat: Number(lat ?? -6.9064866),
          lng: Number(lng ?? 107.7073688),
        }}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          position={viewPort}
          draggable={!readonly}
          onDragEnd={handleDragEnd}
        >
          <InfoWindow options={{ maxWidth: 100 }}>
            <span className="text-black">{`Lat: ${viewPort.lat}, Lng: ${viewPort.lng}`}</span>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(PrimaryMaps);
