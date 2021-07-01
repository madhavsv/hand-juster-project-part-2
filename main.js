prediction="";
Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML='<img id="capture_image" src="' + data_uri +'">';
    });
}
console.log('ml5:version',ml5.version);
classifier=ml5.imageClassifier('model.json',modelLoaded);
function modelLoaded() {
    console.log("model loaded!");
}
    function speak() {
        var synth=window.speechSynthesis;
        speak_data="the  prediction is" + prediction;
        utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }

