window.addEventListener("scroll", () => {
  const featuresSection = document.querySelector("#features");
  const featuresLink = document.querySelector(".features-link");

  const sectionTop = featuresSection.offsetTop - 100; // Adjust for navbar height
  const sectionBottom = sectionTop + featuresSection.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
    featuresLink.classList.add("active");
  } else {
    featuresLink.classList.remove("active");
  }
});


