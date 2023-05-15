document.addEventListener("DOMContentLoaded", function () {
  console.log("reading the new new updates");

  function Observer(addingClass, addedClass) {
    const opt = {
      threshold: 0.65, // Trigger the animation once the row is 50% visible
      margin: "0px 0px -150px 0px",
    };

    const IntObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${addingClass}`);
        }
      });
    }, opt);

    const items = document.querySelectorAll(`${addedClass}`);
	  if(items){
    items.forEach((el) => IntObs.observe(el));
	  }
  }

  function addingClass(element, addClass) {
    return element.forEach((el) => el.classList.add(`${addClass}`));
  }

  function SectionObserver(
    section,
    firstAnimation,
    showOne,
    secondAnimation,
    showTwo,
    thirdAnimation,
    showThree,
    visible
  ) {
    const visibility = {
      threshold: visible,
    };

    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //add the following classes to...
          const one = document.querySelectorAll(`${firstAnimation}`);
          const two = document.querySelectorAll(`${secondAnimation}`);
          const three = document.querySelectorAll(`${thirdAnimation}`);

          addingClass(one, showOne);
          addingClass(two, showTwo);
          addingClass(three, showThree);
        }
      });
    }, visibility);

    const container = document.querySelector(section);
		if(container) {
    sectionObs.observe(container);
		}
  }

  // MAIN SECTION

  // Starting Animation
  const items = document.querySelector(".main-header");
  const pItems = document.querySelector(".main-p");
  const columnItems = document.querySelectorAll(".hidden-main-column");
  const mainBtn = document.querySelector(".main-btn");

  // navbar content
  const logo = document.querySelector(".hidden-nav-logo");
  const navLinks = document.querySelector(".hidden-nav-links");

  function startAnimation() {
    items.classList.add("showMainHeader");
	  console.log(items);
    pItems.classList.add("showMainP");
    columnItems.forEach((el) => {
      el.classList.add("showMainColumn");
    });
    mainBtn.classList.add("showMainBtn");
    logo.classList.add("showNavLogo");
    navLinks.classList.add("showNavLinks");
  }

  console.log("location");
	
  console.log(this.location.href);
  if (this.location.href === "https://www.catcrack.com/" || this.location.href === "https://catcrack.wpengine.com/" || this.location.href === "https://catcrack.com/") {
	  console.log("starting animation")
    startAnimation();
  } else {
    if (window.innerWidth < 767) {
      logo.classList.add("showNavLogo");
      navLinks.style.display = "none !important";
    } else {
          logo.classList.remove("hidden-nav-logo");
          navLinks.classList.remove("hidden-nav-links");
    }
  }

  //   DON'T SETTLE SECTION
  //   DON'T SETTLE SECTION
  //   DON'T SETTLE SECTION
  //   DON'T SETTLE SECTION
  //   DON'T SETTLE SECTION

  const pawObv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showPaws");
      } else {
        entry.target.classList.remove("showPaws");
      }
    });
  });

  const hiddenPaws = document.querySelectorAll(".hidden-group1");
  hiddenPaws.forEach((el) => pawObv.observe(el));

  const settleOptions = {
    threshold: 0.75,
  };
  ellipseContainer = document.querySelector(".group3-container");
  ellipse = document.querySelector("ellipse");
	 console.log(ellipseContainer);
  const settleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("reading");
        ellipse.style.animationPlayState = "running";
      }
    });
  }, settleOptions);
	if(ellipseContainer != null) {
		settleObserver.observe(ellipseContainer);
	}

  // //PRODUCT SECTION
  // //PRODUCT SECTION
  // //PRODUCT SECTION
  // //PRODUCT SECTION
  // //PRODUCT SECTION

  const productContainerOption = {
    threshold: 0.9,
  };

  const productContainer = document.querySelector(".hide-product-container");
  const productContainerObv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        productContainer.classList.add("showProduct");
      }
    });
  }, productContainerOption);

  const productGroupContainer = document.querySelector(".group3-container");
  if (window.scrollY > 984) {
    productContainer.classList.add("showProduct");
  } else {
	  if(productGroupContainer){
		      productContainerObv.observe(productGroupContainer);
	  }
  }

  // BUY DOPE
  // BUY DOPE
  // BUY DOPE
  // BUY DOPE
  // BUY DOPE

  const leftCat = document.querySelector(".left-cat");
  const rightCat = document.querySelector(".right-cat");

  function bounce() {
    leftCat.style.animation = "left-cat-infinite 5s ease-in-out infinite";
    rightCat.style.animation = "right-cat-infinite 5s ease-in-out infinite";
  }
  const animationOptions = {
    threshold: 0.35,
  };

  const animation = new IntersectionObserver(
    (entries) => [
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          leftCat.style.animationPlayState = "running";
          rightCat.style.animationPlayState = "running";
          setTimeout(bounce, 2025);
        }
      }),
    ],
    animationOptions
  );

  const tryContainer = document.querySelector(".try-container");
	if(tryContainer){
  animation.observe(tryContainer);
	}

  // LEGAL SECTION
  // LEGAL SECTION
  // LEGAL SECTION
  // LEGAL SECTION
  // LEGAL SECTION

  SectionObserver(
    ".legal-container",
    ".legal-header",
    "showHeader2",
    ".legal-column",
    "showPre",
    ".legal-btn",
    "showPreBtn",
    0.35
  );

  // SOME STREET CRED SECTION
  // SOME STREET CRED SECTION
  // SOME STREET CRED SECTION
  // SOME STREET CRED SECTION
  // SOME STREET CRED SECTION

  SectionObserver(
    ".street-container",
    ".street-header",
    "showHeader2",
    ".hidden-street-column",
    "showStreet",
    ".hidden-street-p",
    "showStreetP",
    0.35
  );

  //   PRE SECTION
  //   PRE SECTION
  //   PRE SECTION
  //   PRE SECTION
  //   PRE SECTION

  SectionObserver(
    ".pre-container",
    ".pre-header",
    "showHeader2",
    ".pre-column",
    "showPre",
    ".pre-btn",
    "showPreBtn",
    0.35
  );

  //   PICTURE SECTION
  //   PICTURE SECTION
  //   PICTURE SECTION
  //   PICTURE SECTION
  //   PICTURE SECTION

  SectionObserver(
    ".catPics-container",
    ".catPics-header",
    "showHeader2",
    ".catPics-p",
    "showHeader2",
    ".hidden-social",
    "showSocial",
    0.8
  );
  Observer("showCatPics", ".hidden-group2");

  //   QUOTE SECTION
  //   QUOTE SECTION
  //   QUOTE SECTION
  //   QUOTE SECTION
  //   QUOTE SECTION

  const container = document.querySelector(".row-holder");
  const row1 = document.querySelector(".first-row-container");
  const row2 = document.querySelector(".second-row-container");

  const options = {
    threshold: 0, // Trigger the animation once the row is 50% visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (window.innerWidth < 769) {
      row1.style.animation = "move-left 45s linear infinite";
      row2.style.animation = "move-right 45s linear infinite";
      row1.style.animationPlayState = "running";
      row2.style.animationPlayState = "running";
    } else {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
          observer.unobserve(entry.target);
        }
      });
    }
  }, options);
	if(container) {
  observer.observe(container);
		}

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const row1Position = row1.offsetLeft;
    const row2Position = row2.offsetLeft;

    row1.style.transform = `translateX(${
      scrollPosition - row1Position - 6500
    }px)`;
    row2.style.transform = `translateX(${
      row2Position - scrollPosition + 10700
    }px)`;
  }

  // CAUTION SECTION
  // CAUTION SECTION
  // CAUTION SECTION
  // CAUTION SECTION
  // CAUTION SECTION

  Observer("showHeader2", ".caution-header");
  Observer("showHeader2", ".caution-paragraph");

  // ACCORDIAN SCRIPT
  // ACCORDIAN SCRIPT
  // ACCORDIAN SCRIPT
  // ACCORDIAN SCRIPT
  // ACCORDIAN SCRIPT

  Observer("showHeader2", ".faq-header");

  var acc = document.getElementsByClassName("accordion");
if(acc){
	
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

  const accIntObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showAcc");
      }
    });
  });

  const accItems = document.querySelectorAll(".hidden-accor");
  accItems.forEach((el) => {
    accIntObs.observe(el);
  });

  // BUY NOW PAGE
  // BUY NOW PAGE
  // BUY NOW PAGE
  // BUY NOW PAGE
  // BUY NOW PAGE
  // BUY NOW PAGE

  // BUY NOW HEADER
  // BUY NOW HEADER
  // BUY NOW HEADER

  const buyNowHeaderObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showBuyNowHeader");
      }
    });
  });

  const buyNowHeader = document.querySelectorAll(".buyNowHeader");
  buyNowHeader.forEach((el) => buyNowHeaderObs.observe(el));

  // BUY NOW CONTAINERS
  // BUY NOW CONTAINERS
  // BUY NOW CONTAINERS
  const optionsBuyNowContainers = {
    threshold: 0.01, // Trigger the animation once the row is 50% visible
  };

  const buyNowProductObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showBuyNowContainers");
      }
    });
  }, optionsBuyNowContainers);

  const buyNowContainers = document.querySelectorAll(".buyNow-hidden-group1");
	console.log(buyNowContainers);
	if(buyNowContainers !== null) {
		  buyNowContainers.forEach((el) => buyNowProductObs.observe(el));
	}

});
