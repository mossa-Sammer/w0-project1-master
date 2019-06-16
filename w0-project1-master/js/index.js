const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 

//Quering The Dom
const nav=document.querySelector('nav');
const navLinks=nav.children;
const logoImage=document.querySelector('#logo-img');
const primaryText = document.querySelector('.cta-text h1');
const button=document.querySelector('.cta-text button');
const showCaseImage=document.querySelector('#cta-img');
const topContent=document.querySelectorAll('.top-content .text-content');
const middleImage = document.querySelector('#middle-img');
const bottomContent=document.querySelectorAll('.bottom-content .text-content');
const contactSection = document.querySelector('.contact');
const contactChilds = contactSection.children;
const footer=document.querySelector('footer');


//NavBar
for(let i=1;i<7;++i){
  navLinks[i-1].textContent=siteContent.nav['nav-item-'+i];
}

logoImage.src=siteContent.nav["img-src"];

//ShowCase
primaryText.textContent=siteContent.cta.h1;
button.textContent=siteContent.cta.button;
showCaseImage.src=siteContent['cta']['img-src'];

//TobContent
topContent[0].firstElementChild.textContent=siteContent["main-content"]['features-h4'];
topContent[0].lastElementChild.textContent=siteContent["main-content"]['features-content'];

topContent[1].firstElementChild.textContent=siteContent["main-content"]['about-h4'];
topContent[1].lastElementChild.textContent=siteContent["main-content"]['about-content'];



//middle Image
middleImage.src=siteContent['main-content']['middle-img-src'];


//bottomContent
bottomContent[0].firstElementChild.textContent=siteContent["main-content"]['services-h4'];
bottomContent[0].lastElementChild.textContent=siteContent["main-content"]['services-content'];

bottomContent[1].firstElementChild.textContent=siteContent["main-content"]['product-h4'];
bottomContent[1].lastElementChild.textContent=siteContent["main-content"]['product-content'];
bottomContent[2].firstElementChild.textContent=siteContent["main-content"]['vision-h4'];
bottomContent[2].lastElementChild.textContent=siteContent["main-content"]['vision-content'];

//Contact
contactChilds[0].textContent=siteContent['contact']['contact-h4'];
contactChilds[1].textContent=siteContent['contact']['address'];
contactChilds[2].textContent=siteContent['contact']['phone'];
contactChilds[3].textContent=siteContent['contact']['email'];

//Fotter
footer.firstElementChild.textContent=siteContent['footer']['copyright'];


//Color Navigation Text Color
Array.from(navLinks).forEach((child)=>{

  child.style.color='green';

});

//Make to links
let links = [];
for(let i=0;i<2;++i){
  let link = document.createElement('a');
  link.appendChild(document.createTextNode('link'+i));
  links.push(link);
}

//append the links to navbar
links.forEach((link)=>{
  nav.appendChild(link);
});

//button Listener
const eventsChanges = {
  "primaryText": {
    "heading": "you are Welcome", 
  }
}

button.addEventListener('click',()=>{
  primaryText.textContent=eventsChanges['primaryText']['heading'];
});