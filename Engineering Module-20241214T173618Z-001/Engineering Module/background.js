chrome.extension.onRequest.addListener(function (prediction, sender, sendResponse) {
  if (prediction === 1) {
    playAlert();
  } else if (prediction === -1) {
    var userResponse = confirm(
      "No phishing detected."
    );
  }
});

function playAlert() {
  var audio = new Audio("Warning.mp3");
  audio.play();

  setTimeout(function () {
    var userResponse = confirm(
      "Warning: Phishing detected!! Do you want to be redirected to Google?"
    );
    if (userResponse) {
      chrome.tabs.update({ url: "https://www.google.com" });
    }
  }, 500);
}







