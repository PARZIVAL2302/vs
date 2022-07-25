naam = localStorage.getItem("name");
document.getElementById("welcome").innerHTML = "<h1> Welcome" + naam + "! </h1>";
image1 = IMG_5469.JPG;
image2 = Pharaoh sketch.webp
image3 = Pharaoh.jpg;

function instruction(){
    window.location = "qinstructions.html";
}

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

console.log(Content);
if(Content == "take my selfie"){
        console.log("Taking selfie");
        speak();
}
}



camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:255,
    image_format:'jpeg',
    jpeg_quality:90
});

function speak(){
    var synth = speechSynthesis;
    speak_data = "every selfie will be takes on a interval of 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = image1;
        take_snapshot();
        save();},
        3000);

        setTimeout(function(){
            img_id = image2;
            take_snapshot();
            save();},
            6000);

            setTimeout(function(){
                img_id = image3;
                take_snapshot();
                save();},
                9000);
}

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){

document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

if(img_id=="selfie2"){

    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}

if(img_id=="selfie3"){

    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';

})};