// wait for element helper function
var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};
// swapping classes function (the actual onclick functionality)
var swapClasses = function() { 
  if (document.getElementsByTagName("BODY")[0].classList.value.includes("theme-open-up")) {
    document.getElementsByTagName("BODY")[0].classList.add("theme-open-up"); 
    document.getElementsByTagName("BODY")[0].classList.remove("theme-open-down"); 
  } else {
    document.getElementsByTagName("BODY")[0].classList.add("theme-closed-up"); 
    document.getElementsByTagName("BODY")[0].classList.remove("theme-closed-down"); 
  }
};
// actual function where we insert button
var wsbGoodFeelingsButton = function() {  
  waitForEl(".main-container", function() {
    var oTargetDiv = document.getElementsByClassName("main-container")[0]; // target div to insert before
    var oParent = oTargetDiv.parentElement; // main div (first main on home page)
    var oButton = document.createElement('BUTTON'); // button we are about to insert
    oButton.classList.add("btn"); // add class
    oButton.classList.add("btn-primary"); // add class
    oButton.innerHTML = 'WSB Good Feelings Button'; // text content of the button
    oButton.onclick = swapClasses; // on click function of button
    oParent.insertBefore(oButton, oTargetDiv); // insert the button!
  });
}
wsbGoodFeelingsButton();