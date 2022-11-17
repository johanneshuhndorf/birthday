// This function starts when you click the button.

function unpack() {
  // First an option window ...

  if (confirm("Hold on a moment!\nDo you have adblock installed?")) {
    alert("That's wonderful.");
  } else {
    alert("Oh dear .......");
  }

  // Here we load the graphic.

  let backgroundImageURL = "url('present.svg')";
  document.getElementsByTagName("body")[0].style.backgroundImage =
    backgroundImageURL;

  // Here we hide the initial text.

  [].forEach.call(
    document.getElementsByClassName("wrapping"),
    function (element) {
      element.style.display = "none";
    }
  );

  // And here we show the hidden text.

  [].forEach.call(
    document.getElementsByClassName("contents"),
    function (element) {
      element.style.display = "block";
    }
  );
}
