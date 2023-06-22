window.onload = (event) => {
  //first slider --------------------------------------------------------------->
  let offset1 = 0;
  const sliderOne = document.querySelector("#inside-slider1");
  const sliderOneWidth =
    document.querySelector(".slides-in-slider1 img").clientWidth +
    parseInt(getComputedStyle(sliderOne, null).gap);
  const sliderOneRightArrow = document.querySelector("#carusel-button2");
  const sliderOneLeftArrow = document.querySelector("#carusel-button1");

  moveSliderOneToRight = () => {
    offset1 += sliderOneWidth;
    if (window.innerWidth > 1530) {
      if (offset1 > sliderOneWidth * 3) {
        offset1 = 0;
      }
    } else {
      if (offset1 > sliderOneWidth * 4) {
        offset1 = 0;
      }
    }

    sliderOne.style.left = -offset1 + "px";
  };

  moveSliderOneToLeft = () => {
    offset1 -= sliderOneWidth;
    if (window.innerWidth > 1530) {
      if (offset1 < 0) {
        offset1 = sliderOneWidth * 3;
      }
    } else {
      if (offset1 < 0) {
        offset1 = sliderOneWidth * 4;
      }
    }

    sliderOne.style.left = -offset1 + "px";
  };

  addEventListenerSliderOne = () => {
    sliderOneRightArrow.onclick = () => {
      moveSliderOneToRight();
    };
    sliderOneLeftArrow.onclick = () => {
      moveSliderOneToLeft();
    };
  };
  addEventListenerSliderOne();

  //second slider ---------------------------------------------------------->
  let offset2 = 0;
  const sliderTwo = document.querySelector("#inside-slider-about-us");
  const sliderTwoLeftArrow = document.querySelector("#cla");
  const sliderTwoRightArrow = document.querySelector("#cra");
  const sliderTwoWidth =
    document.querySelector("#slider-about-us img").clientWidth +
    parseInt(getComputedStyle(sliderTwo, null).gap);
  moveSliderTwoToRight = () => {
    offset2 += sliderTwoWidth;
    if (offset2 > sliderTwoWidth * 3) {
      offset2 = 0;
    }
    sliderTwo.style.left = -offset2 + "px";
  };
  moveSliderTwoToLeft = () => {
    offset2 -= sliderTwoWidth;
    if (offset2 < 0) {
      offset2 = sliderTwoWidth * 3;
    }
    sliderTwo.style.left = -offset2 + "px";
  };
  addEventListenerSliderTwo = () => {
    sliderTwoRightArrow.onclick = () => {
      moveSliderTwoToRight();
    };
    sliderTwoLeftArrow.onclick = () => {
      moveSliderTwoToLeft();
    };
  };
  addEventListenerSliderTwo();

  //third slider
  let offset3 = 0;
  const sliderThree = document.querySelector("#inside-slider-evidence");
  const sliderThreeLeftArrow = document.querySelector("#cle");
  const sliderThreeRightArrow = document.querySelector("#cre");
  const sliderThreeWidth =
    document.querySelector("#slider-evidence img").clientWidth +
    parseInt(getComputedStyle(sliderThree, null).gap);

  moveSliderThreeToRight = () => {
    offset3 += sliderThreeWidth;
    if (offset3 > sliderThreeWidth * 3) {
      offset3 = 0;
    }
    sliderThree.style.left = -offset3 + "px";
  };
  console.log();
  moveSliderThreeToLeftt = () => {
    offset3 -= sliderThreeWidth;
    if (offset3 < 0) {
      offset3 = sliderThreeWidth * 3;
    }
    sliderThree.style.left = -offset3 + "px";
  };
  addEventListenerSliderThree = () => {
    sliderThreeRightArrow.onclick = () => {
      moveSliderThreeToRight();
    };
    sliderThreeLeftArrow.onclick = () => {
      moveSliderThreeToLeft();
    };
  };
  addEventListenerSliderThree();

  //button switch -------------------------------------------------------------->
  const buttonGlue = document.querySelector("#button-glue");
  const buttonDetailing = document.querySelector("#button-detailing");
  const blockGlue = document.querySelector(".block-glue");
  const blockDetailing = document.querySelector(".block-detailing");

  switchGlue = () => {
    if (blockGlue.classList.contains("hiding-block-r")) {
      buttonDetailing.classList.remove("button-switch-on");
      buttonGlue.classList.add("button-switch-on");

      blockDetailing.classList.add("hide-block-l");

      setTimeout(() => {
        blockDetailing.classList.add("hiding-block-l");
        blockDetailing.classList.remove("hide-block-l");
        blockGlue.classList.remove("hiding-block-r");
      }, 500);
    }
  };

  switchDetailing = () => {
    if (blockDetailing.classList.contains("hiding-block-l")) {
      buttonGlue.classList.remove("button-switch-on");
      buttonDetailing.classList.add("button-switch-on");

      blockGlue.classList.add("hide-block-r");

      setTimeout(() => {
        blockGlue.classList.add("hiding-block-r");
        blockGlue.classList.remove("hide-block-r");
        blockDetailing.classList.remove("hiding-block-l");
      }, 500);
    }
  };

  addEventListenerSwitchButtons = () => {
    buttonGlue.onclick = () => {
      switchGlue();
    };
    buttonDetailing.onclick = () => {
      switchDetailing();
    };
  };
  addEventListenerSwitchButtons();

  // button Up -------------------------------------------------------------->
  const buttonUp = document.querySelector("#button-up");
  showButtonUp = () => {
    if (
      buttonUp.classList.contains("btn-up_hide") &&
      !buttonUp.classList.contains("btn-up_hiding")
    ) {
      buttonUp.classList.remove("btn-up_hide");
      buttonUp.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        buttonUp.classList.remove("btn-up_hiding");
      }, 300);
    }
  };
  hideButtonUp = () => {
    if (
      !buttonUp.classList.contains("btn-up_hide") &&
      !buttonUp.classList.contains("btn-up_hiding")
    ) {
      buttonUp.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        buttonUp.classList.add("btn-up_hide");
        buttonUp.classList.remove("btn-up_hiding");
      }, 300);
    }
  };
  addEventListenerBtnUp = () => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      if (scrollY > 400) {
        showButtonUp();
      } else {
        hideButtonUp();
      }
    });
    buttonUp.onclick = () => {
      hideButtonUp();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  };
  addEventListenerBtnUp();

  // scale images --------------------------------------------------------------->
  const ourJobsImages = document.querySelector("#our-jobs");
  reduceImage = (event) => {
    window.setTimeout(() => {
      event.classList.remove("scale");
    }, 200);
  };
  increaseImage = (event) => {
    event.classList.add("scale");
  };
  addEventListenerImageClick = () => {
    ourJobsImages.onclick = (event) => {
      let eventTarget = event.target;
      if (eventTarget.classList.contains("scale")) {
        reduceImage(eventTarget);
      } else {
        increaseImage(eventTarget);
      }
      eventTarget.addEventListener("mouseleave", () => {
        reduceImage(eventTarget);
      });
    };
  };
  addEventListenerImageClick();
};

//  ready for commit
// first commit, v.1.0/ added adaptive styles
