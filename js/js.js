
 // BING MAPS
 function GetMap() {
  const map = new Microsoft.Maps.Map("#myMap", {
      credentials: "Arw-oMq_6wN6CB2Xf9TWcF-lXOCBrST2mKPFFNTkobmzyTDn8B0h81elt49EjMJ2",
      center: new Microsoft.Maps.Location(-15.5992119,-56.0971276), 
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      zoom: 16
  });

  const center = map.getCenter();

  //Create custom Pushpin
  const pin = new Microsoft.Maps.Pushpin(center, {
      icon: "assets/map-pin-solid.png"
  });

  //Add the pushpin to the map
  map.entities.push(pin);
}