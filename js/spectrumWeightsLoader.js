// Spectrum weight data loaded from external JSON
(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "js/spectrumWeights.json", false); // synchronous to guarantee load before main JS
  xhr.send();
  var data = JSON.parse(xhr.responseText);
  window.spectrumWeightsData = data;
})();
