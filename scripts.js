function unpack() {
  if (confirm("Hold on a moment!\nDo you have adblock installed?")) {
    alert("That's wonderful.");
  } else {
    alert("Oh dear .......");
  }

  let backgroundImageURL = "url('present.svg')";
  document.getElementsByTagName("body")[0].style.backgroundImage =
    backgroundImageURL;

  [].forEach.call(
    document.getElementsByClassName("wrapping"),
    function (element) {
      element.style.display = "none";
    }
  );

  [].forEach.call(
    document.getElementsByClassName("contents"),
    function (element) {
      element.style.display = "block";
    }
  );
}
