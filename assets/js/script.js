'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function openModal(imageSrc) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("fullImage").src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}


// Certification Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all eye icons
  const eyeIcons = document.querySelectorAll('.project-item-icon-box ion-icon[name="eye-outline"]');
  
  // Get modal elements
  const modal = document.querySelector('.certification-modal');
  const modalImg = document.querySelector('.certification-modal-image');
  const closeModal = document.querySelector('.certification-close-modal');
  
  // Add click event to each eye icon
  eyeIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      const imgSrc = this.closest('.project-item').querySelector('img').src;
      modalImg.src = imgSrc;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal when X is clicked
  closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
});


const pullHandle = document.getElementById('pullHandle');
const vCard = document.querySelector('.v-card');
const lightCord = document.getElementById('lightCord');
const lightBulb = document.getElementById('lightBulb');
const bulbBase = document.getElementById('bulbBase');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

// Array of motivational quotes
const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Anonymous"
  },
  {
    text: "Dreams don't work unless you do.",
    author: "John C. Maxwell"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Anonymous"
  }
];

let isLightOn = false;

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Toggle light on/off with pull handle (no swing animation)
pullHandle.addEventListener('click', function() {
  isLightOn = !isLightOn;
  
  if (isLightOn) {
    vCard.classList.add('light-on');
    const randomQuote = getRandomQuote();
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  } else {
    vCard.classList.remove('light-on');
  }
});

// Add swing animation only when touching the bulb
lightBulb.addEventListener('click', function() {
  // Add swing animation
  lightCord.classList.add('swing');
  lightBulb.classList.add('swing');
  bulbBase.classList.add('swing');
  
  // Remove swing class after animation completes
  setTimeout(() => {
    lightCord.classList.remove('swing');
    lightBulb.classList.remove('swing');
    bulbBase.classList.remove('swing');
  }, 1500);
});



document.addEventListener('DOMContentLoaded', function() {
  // Album data - in a real app this would come from an API
  const albums = {
    1: {
      title: "Industrial Attachment at CNRD, Bangladesh Navy ",
      description: "I completed a 21-days industrial attachment at the Centre for Naval Research and Development (CNRD), Bangladesh Navy, in Chattogram, from November 24 to December 12, 2024.During this time, I explored various workshops and technologies, including the Heavy Electrical Shop, Battery Shop, Machine Shop, Gyro-Sonar Shop, Radio Radar Shop, Calibration Shop, Control Systems, and the Drone Section.This hands-on experience enhanced my understanding of advanced naval technologies and industrial processes, inspiring me to further pursue excellence in engineering.",
      photos: [
        "./assets/images/visit24.jpg",
        "./assets/images/visit25.jpg",
        "./assets/images/visit26.jpg",
        "./assets/images/visit27.jpg",
        "./assets/images/visit28.jpg",
        "./assets/images/visit29.jpg",
        "./assets/images/visit30.jpg",
        "./assets/images/visit31.jpg",
        "./assets/images/visit32.jpg",
        "./assets/images/visit33.jpg",
        "./assets/images/visit34.jpg",
        "./assets/images/visit35.jpg",
        "./assets/images/visit36.jpg",
        "./assets/images/visit37.jpg",
        "./assets/images/visit38.jpg",
        "./assets/images/visit39.jpg",
        "./assets/images/visit40.jpg"
      ]
    },
    2: {
      title: "Visit at Chittagong Power Plant in Raozan ",
      description: "we had the opportunity to visit the Chittagong Power Plant in Raozan as part of the Power System Operation and Service Design course, conducted under the EDGE Project by the Government of Bangladesh. Guided by our mentor, Dr.Tofayel Ahmed Sir, this visit offered hands-on exposure to real-world power systems and their operations.🔍 Key learnings from the visit:⚡ Transformers: Exploring their critical role during transmission and generation.📏 PTs & CTs: Understanding precise measurement and monitoring of electrical systems.🔌 Bus Bars: Witnessing their role in efficient power distribution.⚙️ Generators, Motors, and Blades: Gaining insights into their functionality.🏢 Control Room: Observing how engineers expertly manage the entire plant.With a capacity of 420 MW powered by natural gas, this plant showcases engineering excellence and innovation. The experience has deepened our understanding of power generation and inspired us to explore further in this field. A big thanks to the EDGE Project for this valuable learning opportunity!",
      photos: [
        "./assets/images/visit01.jpeg",
        "./assets/images/visit02.jpeg",
        "./assets/images/visit03.jpeg",
        "./assets/images/visit04.jpeg",
        "./assets/images/visit05.jpeg",
        "./assets/images/visit12.jpeg"

      ]
    },
    3: {
      title: "Visit at General Electric Manufacturing Company Limited",
      description: "On January 24, 2023, we had the privilege of visiting General Electric Manufacturing Company Limited (GEMCO), the largest transformer manufacturer in Bangladesh and the only government-owned institution producing both power and distribution transformers. The visit provided a remarkable opportunity to explore the advanced manufacturing processes and technological expertise behind transformer production.This experience was further enriched by the presence and guidance of our esteemed teachers—**Dr. Nipu Kumar Das, Mr. Mrinmoy Dey, Ms. Diba Das, and Ms. Tanha Zaman—whose insights made the visit both educational and inspiring.",
      photos: [
        "./assets/images/visit07.jpeg",
        "./assets/images/visit08.jpeg",
        "./assets/images/visit09.jpeg",
        "./assets/images/visit010.jpeg",
        "./assets/images/visit011.jpeg"
        
      ]
    },
    4: {
      title: "Solar training program at Daffodil University",
      description: "I had the opportunity to attend a 7-day solar training program at Daffodil University, Dhaka, which provided an in-depth understanding of solar energy systems. The training was divided into **5 days of online classes** covering **11 modules** and **2 days of on-site practical training** at the university’s **solar lab**.  During the online sessions, we learned about various aspects of solar energy, including photovoltaic (PV) system design, solar panel efficiency, and energy storage solutions. We also worked with **PV software**, which helped us understand system design, load calculations, and performance analysis.  The on-site practical sessions were particularly insightful, allowing us to explore the **basic workings of solar technology**. We conducted multiple hands-on experiments, including **solar panel installation, system wiring, inverter connections, and performance testing**. Observing real-life applications and working with actual solar setups enhanced our understanding of the concepts learned during the online sessions.  This training provided **valuable practical experience** and a **strong foundation in solar energy systems**, equipping us with the knowledge and skills necessary for real-world applications in the renewable energy sector.",
      photos: [
        "./assets/images/visit13.jpg",
        "./assets/images/visit14.jpg",
        "./assets/images/visit15.jpg",
        "./assets/images/visit16.jpg",
        "./assets/images/visit17.jpg",
        "./assets/images/visit18.jpg",
        "./assets/images/visit19.jpg",
        "./assets/images/visit20.jpg",
        "./assets/images/visit21.jpg",
        "./assets/images/visit22.jpg",
        "./assets/images/visit23.jpg"
        
      ]
    }
  };

  // DOM elements
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const modal = document.getElementById('albumModal');
  const closeBtn = document.querySelector('.close-btn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const photosContainer = document.getElementById('photosContainer');
  const albumsElements = document.querySelectorAll('.album');

  // Slider navigation
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });

  // Open album modal
  albumsElements.forEach(album => {
    album.addEventListener('click', () => {
      const albumId = album.getAttribute('data-album-id');
      const albumData = albums[albumId];
      
      modalTitle.textContent = albumData.title;
      modalDescription.textContent = albumData.description;
      
      // Clear previous photos
      photosContainer.innerHTML = '';
      
      // Add new photos
      albumData.photos.forEach(photoUrl => {
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = albumData.title;
        photosContainer.appendChild(img);
      });
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});


// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
  // 3D tilt effect on mouse move
  const container = document.querySelector('.software-container');
  
  container.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.software-icon');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    icons.forEach(icon => {
      const iconRect = icon.getBoundingClientRect();
      const iconX = (iconRect.left + iconRect.width/2) - rect.left;
      const iconY = (iconRect.top + iconRect.height/2) - rect.top;
      
      const distanceX = iconX - x;
      const distanceY = iconY - y;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < 150) {
        const rotateX = (centerY - y) / 20;
        const rotateY = (x - centerX) / 20;
        icon.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
  });
  
  container.addEventListener('mouseleave', () => {
    const icons = document.querySelectorAll('.software-icon');
    icons.forEach(icon => {
      icon.style.transform = '';
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const pullHandle = document.getElementById('pullHandle');
  const vCard = document.getElementById('vCard');
  const lightCord = document.getElementById('lightCord');
  const lightBulb = document.getElementById('lightBulb');
  const bulbBase = document.getElementById('bulbBase');
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  
  // ... (keep your existing quotes array and getRandomQuote function)

  let isLightOn = false;
  
  pullHandle.addEventListener('click', function() {
    isLightOn = !isLightOn;
    
    if (isLightOn) {
      vCard.classList.add('light-on');
      const randomQuote = getRandomQuote();
      quoteText.textContent = `"${randomQuote.text}"`;
      quoteAuthor.textContent = `- ${randomQuote.author}`;
    } else {
      vCard.classList.remove('light-on');
    }
  });

  // ... (keep your existing swing animation code)
});


// Oscilloscope Animation
function initOscilloscope() {
  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  // Wave parameters
  let time = 0;
  const amplitude = canvas.height / 3;
  const frequency = 0.02;
  const speed = 0.05;
  
  function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(0, 80, 0, 0.3)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Center line
    ctx.strokeStyle = 'rgba(0, 150, 0, 0.5)';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    // Draw sine wave (green)
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + amplitude * Math.sin(x * frequency + time);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Draw cosine wave (yellow)
    ctx.strokeStyle = '#ffd868';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + amplitude * Math.cos(x * frequency + time * 1.5);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    time += speed;
    requestAnimationFrame(drawWaves);
  }
  
  // Handle resize
  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  
  drawWaves();
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initOscilloscope);