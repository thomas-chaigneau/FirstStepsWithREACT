import React from "react";

const Travel = ({ destination, country, image, distance }) => (
<div>
	<h1>My trip to {destination}</h1>

  	<h2>It was in {country}</h2>

  	<img src={image} alt={destination} />

    <h2> I all most walk {distance} Km</h2>
</div>
);

export default Travel;