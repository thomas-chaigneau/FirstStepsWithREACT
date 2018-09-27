import React from "react";
import Travel from "./Travel"

const Trip = [
  {
    Destination: "lisbonne",
    Distance: 342 ,
    image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&ved=2ahUKEwjnw633zNvdAhVHvxoKHWEaCxcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.marseille.aeroport.fr%2Fswitchlanguage%2Fto%2Fen%2Fvols-et-destinations%2Fdestinations%2Ftous-les-vols%2Feurope%2Fportugal%2Flisbonne&psig=AOvVaw11GylQOWs477HJpHkZIglw&ust=1538151982972487" ,
    country: "Portugal"
  },
  {
    Destination:"Londres" ,
    Distance: 675 ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/320px-London_Montage_L.jpg",
    country: "England"
  },
  {
    Destination: "Séoul" ,
    Distance: 562 ,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Seoul_from_the_sky.jpg" ,
    country: "Corée du Sud"
  },
  {
    Destination: "Naples",
    Distance: 53 ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/VedutaEremo.jpg/800px-VedutaEremo.jpg" ,
    country: "Italie"
  },
  {
    Destination: "Marseille" ,
    Distance: 734,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MarseillePaysage.jpg/320px-MarseillePaysage.jpg" ,
    country: "France"
  }
  
];

const Travels = () => (

	<div>

	{Trip.map( (yo, id) => (

		<Travel destination={yo.Destination}  country={yo.country} image={yo.image} distance={yo.Distance} key={id} /> ))}

</div>

	);

export default Travels;