(function () {
  "use strict";

  const cat = document.getElementById("cat");
  const dog = document.getElementById("dog");
  const cow = document.getElementById("cow");

  const catBtn = document.getElementById("cat-btn");
  const dogBtn = document.getElementById("dog-btn");
  const cowBtn = document.getElementById("cow-btn");

  const imgSection = document.getElementById("img-section");

  render();

  catBtn.addEventListener("click", () => {
    const fragment = document.createDocumentFragment();

    const show = document.createElement("show");

    fragment.appendChild(show);
  });

  function render() {}

  // A potentially workable solution to the javascript might be as follows:
  // - Have an event listener for each of the show buttons.
  //   The syntax would be more or less identical for them.
  // - Inject the following html to replace the existing html around line 22:

  // <article id="cat" class="feature-card">
  //   <img
  //     src="C:\Users\sakow\Documents\uni f26\web and mobile systems\Livesprint 1\files\tabby-cat.jpg"
  //     alt=""
  //     class="img-visible"
  //   />
  //   <button id="hide-btn" class="btn">Hide Result</button>
  // </article>

  //   Change the image for each as applicable.
  // - When the image is displayed, there should also be a the new hide-btn displayed as well.
  //   This hide-btn should also have an event that injects html, reverting it to what it originally was.
  //   Worth noting that with this approach, there would likely have to be separate hide-btn id/class/event listeners, referring to cat-hide-btn, dog-hide-btn, and cow-hide-btn respectively.
  // - If successfully implemented I think this should be able to show and hide the images and respective hide-btn elements. However, I was unsure how to properly write the syntax to get it to work.
  // - The more intended solution would be to use the "hidden" attribute, but since I was unable to get that working I had shifted to attempt my other makeshift solution as detailed above.
})();
