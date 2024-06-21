// Select the header and canvas elements from the DOM (Document Object Model)
const header = document.querySelector("header");
const canvas = document.querySelector(".drawing-area");

// Create a new TimelineMax instance for creating animations
const tl = new TimelineMax();

// Define the animation for the canvas element
// The animation changes the height of the canvas from 0vh to 100vh over 1 second
// The ease property makes the animation smooth with an 'ease in and out' effect
tl.fromTo(
  canvas, // The target element
  1, // Duration of the animation in seconds
  { height: "0vh" }, // Initial state: height of canvas is 0% of the viewport height
  { height: "100vh" }, // Final state: height of canvas is 100% of the viewport height
  { ease: Power2.easeInOut } // Easing function for smooth transition
)
.fromTo(
  header, // The target element
  1.5, // Duration of the animation in seconds
  { y: "-800%", opacity: "0" }, // Initial state: header is positioned far above the viewport and is invisible
  { y: "0%", opacity: "1" }, // Final state: header is positioned at its normal place and is fully visible
  { ease: Power2.easeInOut } // Easing function for smooth transition
);
