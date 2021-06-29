
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

const menu = document.getElementsByName('menu-item');
let scrollTop = document.documentElement.scrollTop;
let screenHeight = screen.height;


/// LISTENER FOR SCROLL
window.addEventListener('scroll', () => {
  scrollTop = document.documentElement.scrollTop;
  screenHeight = screen.height;
  fadeElements(["about", "gallery", "infos"]);
  fadeMenuItems();
  animateBurger()
});




function fadeElements(target) {
  target.map( (e) => {
    const breakpoint = document.getElementById(e).offsetTop - (screenHeight * 0.7);
    const targetElement = document.getElementById(e);
  
    if(scrollTop >= breakpoint) {
      console.log('maior')
      targetElement.classList.remove('up-fade-reverse');
      targetElement.classList.add('up-fade');
    }
  
    if(scrollTop <= breakpoint) {
      targetElement.classList.remove('up-fade');
      targetElement.classList.add('up-fade-reverse');
    }
  });
}


/// MENU TABLE ANIMATION
function fadeMenuItems() {
  const breakpoint = (document.getElementById('menu').offsetTop - (screenHeight * 0.6));
  
  if(scrollTop >= breakpoint) {
    for(let i = 0; i < menu.length; i++) {
      menu[i].style.animationDelay = `${i * 200}ms`;
      menu[i].classList.add('menu-fade');
    }
  }
  
  if(scrollTop <= breakpoint) {
    for(let i = 0; i < menu.length; i++) {
      menu[i].classList.remove('menu-fade');
    }
  }
}


// BURGER ANIMATION
function animateBurger() {
  const burgerContainer = document.getElementById("burger-container");
  const divs = burgerContainer.querySelectorAll("div");
}
  