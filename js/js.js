
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

// SCROLL INFOS
let scrollTop = document.documentElement.scrollTop;
let screenHeight = screen.height;

// MENU ITEM
const menu = document.getElementsByName('menu-item');


// BURGER ITEMS
const b5 = document.getElementById("b5");
const b4 = document.getElementById("b4");
const b3 = document.getElementById("b3");
const b2 = document.getElementById("b2");



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
  } else {
    for(let i = 0; i < menu.length; i++) {
      menu[i].classList.remove('menu-fade');
    }
  }
}


// BURGER ANIMATION
function animateBurger() {


  const rowHeight = document.getElementById("gallery").offsetTop;
  const burgerBreakpoint = rowHeight - screenHeight;

  console.log(scrollTop, burgerBreakpoint)

  if(scrollTop >= burgerBreakpoint) {
    console.log('PASSOU')
    b5.classList.add('addUpRightIngredient');
  
    b4.classList.add('addUpLeftIngredient');
  
    b3.classList.add('addBottomRightIngredient');
  
    b2.classList.add('addBottomLeftIngredient');

  }
  
  if(scrollTop <= burgerBreakpoint && b5.classList.contains('addUpRightIngredient')) {
   /* b5.classList.remove('addUpRightIngredient');
    b4.classList.remove('addUpLeftIngredient');
    b3.classList.remove('addBottomRightIngredient');
    b2.classList.remove('addBottomLeftIngredient');*/
  }
 
}
  