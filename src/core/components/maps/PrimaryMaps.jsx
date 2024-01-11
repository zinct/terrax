import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

function PrimaryMaps({ lat, lng, address }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [viewPort, setViewPort] = useState({
    lat: Number(lat ?? -6.9064866),
    lng: Number(lng ?? 107.7073688),
    address: address ?? "",
  });

  const [map, setMap] = React.useState(null);

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
      address,
    });
    console.log(lat);
    console.log(lng);
  }

  function handleClick(maps) {
    console.log(maps);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-[20rem]"
      center={{
        lat: Number(lat ?? -6.9064866),
        lng: Number(lng ?? 107.7073688),
      }}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        position={viewPort}
        draggable={true}
        onClick={handleClick}
        onDragEnd={handleDragEnd}
      >
        <InfoWindow options={{ maxWidth: 100 }}>
          <span className="text-black">{`Lat: ${viewPort.lat}, Lng: ${viewPort.lng}`}</span>
        </InfoWindow>
      </Marker>

      <>
        <StandaloneSearchBox>
          <>
            <h2>Hello</h2>
            <input name="address" type="text" />
          </>
        </StandaloneSearchBox>
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(PrimaryMaps);
