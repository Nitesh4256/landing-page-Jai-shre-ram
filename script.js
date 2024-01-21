let button = document.getElementById("ram");

document.addEventListener("click", function () {
  var utterance = new SpeechSynthesisUtterance(
    " मेरी झोपड़ी के भाग आज खुल जाएंगे राम आएँगे"
  );
  utterance.lang = "hi-IN";
  window.speechSynthesis.speak(utterance);
});
