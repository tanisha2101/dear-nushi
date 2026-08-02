// =============================
// OUR LITTLE UNIVERSE ❤️
// Script by ChatGPT & Tanisha
// =============================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-in-out"
});

// -----------------------------
// Begin Button
// -----------------------------
const beginButton = document.getElementById("begin");

if (beginButton) {
    beginButton.addEventListener("click", () => {

        const letter = document.getElementById("letter");

        if (letter) {
            letter.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}

// -----------------------------
// Relationship Timer
// -----------------------------

const loveTimer = document.getElementById("loveTimer");

const anniversary = new Date("2025-01-21T00:00:00");

function updateTimer() {

    const now = new Date();

    const difference = now - anniversary;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    if (loveTimer) {

        loveTimer.innerHTML = `
            <div class="timer-box">

                <div class="time">
                    <span>${days}</span>
                    <small>Days</small>
                </div>

                <div class="time">
                    <span>${hours}</span>
                    <small>Hours</small>
                </div>

                <div class="time">
                    <span>${minutes}</span>
                    <small>Minutes</small>
                </div>

                <div class="time">
                    <span>${seconds}</span>
                    <small>Seconds</small>
                </div>

            </div>

            <p class="timer-message">
                Every second with you has been my favourite.
                ❤️
            </p>
        `;

    }

}

updateTimer();

setInterval(updateTimer, 1000);

// -----------------------------
// Fade Hero on Scroll
// -----------------------------

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scroll = window.scrollY;

    hero.style.opacity = 1 - scroll / 500;

});

// -----------------------------
// Photo Hover Effect
// -----------------------------

const photos = document.querySelectorAll(".chapter img");

photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {

        photo.style.transform = "scale(1.04) rotate(1deg)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "scale(1) rotate(0deg)";

    });

});

// -----------------------------
// Smooth Reveal
// -----------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".chapter").forEach(section => {

    observer.observe(section);

});
// Floating Hearts

function createHeart(){

    console.log("heart created");

    const heart=document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(14+Math.random()*20)+"px";

    heart.style.animationDuration=(12+Math.random()*10)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },22000);

}

setInterval(createHeart,900);

// ===========================
// Surprise Letter + Stars
// ===========================

const surpriseBtn = document.getElementById("surpriseBtn");
const secretLetter = document.getElementById("secretLetter");

function launchStars() {

    
    for(let i = 0; i < 180; i++) {

        const particle = document.createElement("div");

        particle.className = "star-confetti";

        particle.innerHTML = "✦";

        particle.style.left = Math.random()*100 + "vw";
        particle.style.top  = Math.random()*100 + "vh";

        particle.style.fontSize =
            (8 + Math.random()*18) + "px";

        particle.style.animationDelay =
            Math.random()*0.3 + "s";

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },2500);

    }

}

if(surpriseBtn){

    surpriseBtn.addEventListener("click",()=>{

    launchStars();

    setTimeout(()=>{

        secretLetter.classList.add("show-letter");

        secretLetter.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    },1800);

});

}
// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        },1000);

    },2800);

});
// ===========================
// Heart Cursor
// ===========================

const heartCursor = document.getElementById("heartCursor");

document.addEventListener("mousemove",(e)=>{

    heartCursor.style.left=e.clientX+"px";
    heartCursor.style.top=e.clientY+"px";

});
document.querySelectorAll("button,a,img").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        heartCursor.style.transform=
            "translate(-50%,-50%) scale(1.6)";

    });

    item.addEventListener("mouseleave",()=>{

        heartCursor.style.transform=
            "translate(-50%,-50%) scale(1)";

    });

});
// ===========================
// Mouse Sparkles
// ===========================
console.log("Sparkle script loaded");
const sparkles=["✨","⭐","💖","✦"];

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.65){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML=
            sparkles[Math.floor(Math.random()*sparkles.length)];

        sparkle.style.left=e.clientX+"px";
        sparkle.style.top=e.clientY+"px";

        sparkle.style.fontSize=
            (10+Math.random()*12)+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },800);

    }

});
// ===========================
// Cute Tab Title
// ===========================

const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "💖 Come back, Nushi...";

    } else {

        document.title = "❤️ Welcome back, my favourite person.";

        setTimeout(() => {

            document.title = originalTitle;

        }, 2500);

    }

});
// ===========================
// Cinematic Ending Stars
// ===========================

const finale = document.querySelector(".cinematic-finale");

function createFinalStars(){

    if(!finale) return;

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="final-star";

        star.innerHTML="✦";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.fontSize=(6+Math.random()*10)+"px";

        star.style.animationDuration=
        (2+Math.random()*5)+"s";

        star.style.animationDelay=
        Math.random()*5+"s";

        finale.appendChild(star);

    }

}

createFinalStars();
// ===========================
// Finale Music
// ===========================

const finalSection = document.querySelector(".cinematic-finale");
const finalSong = document.getElementById("finalSong");

let songPlayed = false;

const musicObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !songPlayed){

            songPlayed = true;

            finalSong.volume = 0;

if(entry.isIntersecting && !songPlayed){

    console.log("Final section reached");

    songPlayed = true;

    finalSong.play();

}
            finalSong.play();

const fade = setInterval(()=>{

    if(finalSong.volume < 0.35){

        finalSong.volume += 0.02;

    }else{

        clearInterval(fade);

    }

},120);

        }

    });

},{
    threshold:0.55
});

musicObserver.observe(finalSection);
console.log("Final section reached");