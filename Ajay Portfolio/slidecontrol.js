var slideindex=0;
showSlides(slideindex);

populateThumbnails();

function showSlides(index) {
var i;
var slides = document.getElementsByClassName("Slide");

if (index > slides.length-1) {slideindex = 0}
if (index < 0) {slideindex = slides.length-1}
for (i = 0; i < slides.length; i++) { 
slides[i].style.display = "none";
}
    
slides[slideindex].style.display = "block";
}

function setCurrentSlide(i) {
    showSlides(slideindex=i); 

}
    
function changeSlide(i) {
    showSlides(slideindex +=i)
}
function populateThumbnails() {
    var picturenames = ["IMG_1131.jpg", "IMG_1137.jpg", "IMG_1140.jpg", "IMG_1147.jpg", "IMG_1156.jpg", "IMG_1161.jpg"]
    for (i=0; i<picturenames.length; i++) {
        var div=document.createElement("div");
        var img=document.createElement("img");
        div.className ="column";
        img.className = "thumbnail";
        img.src = "pictures/"+ picturenames[i];
        img.onclick = setCurrentSlide(i)
        document.getElementById("Thumbnails").appendChild(div);
        div.appendChild(img);
    }
}

//pageNames: home, about me, highlights, resume
function switchPage(pageName) {
    console.log (pageName);
    var homePage = document.getElementById("galleryContainer");
    var aboutMe = document.getElementById("aboutMe");
    var Highlights = document.getElementById("Highlights");
    var resume = document.getElementById("resume");
    if (pageName == "home") {
        homePage.style.display="block";
        aboutMe.style.display="none";
        Highlights.style.display= "none";
        resume.style.display= "none";
    }

    else if (pageName == "about me") {
        aboutMe.style.display = "block";
        homePage.style.display= "none";
        Highlights.style.display= "none";
        resume.style.display= "none";
    }

    else if (pageName == "Highlights") {
        Highlights.style.display= "block";
        aboutMe.style.display="none";
        homePage.style.display= "none";
        resume.style.display= "none";
    }

    else if (pageName == "resume") {
        resume.style.display= "block";
        aboutMe.style.display="none";
        homePage.style.display= "none";
        Highlights.style.display= "none";
    }
}