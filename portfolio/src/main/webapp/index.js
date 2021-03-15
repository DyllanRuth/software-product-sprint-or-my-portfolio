const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

/** Random Greeting  */
function RandomGreeting() {
  const greeting =
    ['Java', 'C++', 'js.React', 'C#','Coding is fun', 'Help Me :('];
    const greetings = greeting[Math.floor(Math.random() * greeting.length)];
    const greetingContainer = document.getElementById('container-greeting');
    greetingContainer.innerText = greetings;
}

/** Footer Map */
let map;
function initMap() {
    const houston = { lat: 29.954, lng: -95.702 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: houston,
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: houston,
    map: map,
  });
}

