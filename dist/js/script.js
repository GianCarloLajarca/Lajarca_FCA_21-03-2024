const faqsNav = document.querySelectorAll(".faq__nav__link");
const faqsContent = document.querySelectorAll(".faq__block");
faqsNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaqs();
    faq.classList.add("active");
    
    const activeContent = document.querySelector(`#${faq.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveFaqs() {
    faqsNav.forEach((faq) => {
    faq.classList.remove("active");
  });
};

function removeActiveContent() {
  faqsContent.forEach((content) => {
    content.classList.remove("active");
  });
};

 
const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector("nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    headerA.classList.toggle("active");
});


const accordionItem = document.querySelectorAll(".faq__item");
accordionItem.forEach((accordions) => {
    accordions.addEventListener("click", ()=>{
        accordions.classList.toggle("active");
    });
});


