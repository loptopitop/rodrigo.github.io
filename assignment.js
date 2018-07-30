var input1 = document.getElementById("input1");

if (Modernizr.geolocation) {
    input1.innerHTML = "No Geo Location";
  } else {
    input1.innerHTML = "Geolocation";
  }

  var input2 = document.getElementById("input2");
  if (Modernizr.progressbar) {
    input2.innerHTML = "Progress Bar Support Detected";
  } else {
    input2.innerHTML = "Progress Bar Support Not Detected";
  }