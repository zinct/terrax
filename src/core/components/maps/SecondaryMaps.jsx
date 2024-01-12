import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

function SecondaryMaps({
  lat = -6.9064866,
  lng = 107.7073688,
  onChangeCoordinate,
  handleSuccess,
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [viewPort, setViewPort] = useState({
    lat: Number(lat),
    lng: Number(lng),
  });

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  function handleDragEnd(maps) {
    const { latLng } = maps;
    const lat = latLng.lat();
    const lng = latLng.lng();
    onChangeCoordinate({
      lat,
      lng,
    });
    setViewPort({
      lat,
      lng,
    });
  }

  async function calculateRoute() {
    if (originRef.current.value === "") {
      return;
    }
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: originRef.current.value },
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

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={{
            lat: viewPort.lat,
            lng: viewPort.lng,
          }}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker
            draggable={true}
            onDragEnd={handleDragEnd}
            position={{
              lat: viewPort.lat,
              lng: viewPort.lng,
            }}
          />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <div>
          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="Search Address"
                  ref={originRef}
                />
              </Autocomplete>
            </Box>

            <Button colorScheme="gray" type="submit" onClick={calculateRoute}>
              Search
            </Button>

            <IconButton
              aria-label="center back"
              colorScheme="gray"
              onClick={handleSuccess}
              icon={<FaCheck />}
            />
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <Text>Latitude: {viewPort.lat} </Text>
            <Text>Longitude: {viewPort.lng} </Text>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo({
                  lat: viewPort.lat,
                  lng: viewPort.lng,
                });
                map.setZoom(15);
              }}
            />
          </HStack>
        </div>
      </Box>
    </Flex>
  );
}

export default SecondaryMaps;
