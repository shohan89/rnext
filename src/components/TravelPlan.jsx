import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
    const [travelPlaces, setTravelPlaces] = useState(initialTravelPlan)
    const places = travelPlaces.childPlaces;
  return (
    <div>
        <h2>Places to visit</h2>
        <ol>
            {places.map((place) => <PlaceTree key={place.id} place={place} />)}
        </ol>
    </div>
  )
}
