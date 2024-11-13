import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported in your browser");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setPosition({
        lat: 35.82,
        lng: 0,
      });
      setIsLoading(false);
    }, 1500);
    // navigator.geolocation.getCurrentPosition(
    //   (pos) => {
    //     console.log("useGeolocation.js : pos = ", pos);
    //     setPosition({
    //       lat: pos.coords.latitude,
    //       lng: pos.coords.longitude,
    //     });
    //     setIsLoading(false);
    //   },
    //   (error) => {
    //     console.log("useGeolocation.js : error = ", error);
    //     setError(error.message);
    //     setIsLoading(false);
    //   }
    // );
  }
  return { isLoading, position, error, getPosition };
}
