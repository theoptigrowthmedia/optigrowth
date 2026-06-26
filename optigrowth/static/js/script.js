/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
            +counter.innerText;

            const increment =
            target / 100;

            if(current < target){

                counter.innerText =
                Math.ceil(current + increment);

                setTimeout(
                    updateCounter,
                    20
                );

            }else{

                counter.innerText =
                target.toLocaleString();

            }

        };

        updateCounter();

    });

};

/* ==========================
   INTERSECTION OBSERVER
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},
{
    threshold:0.2
}

);

document
.querySelectorAll(
".service-card,.why-card,.step,.stat-card"
)
.forEach(item=>{

    observer.observe(item);

});

/* ==========================
   START COUNTERS
========================== */

const statsSection =
document.querySelector(".results");

let counterStarted = false;

window.addEventListener("scroll",()=>{

    if(!statsSection) return;

    const position =
    statsSection.getBoundingClientRect().top;

    if(position < window.innerHeight &&
        !counterStarted){

        startCounter();

        counterStarted = true;
    }

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(7,22,47,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.2)";

    }else{

        header.style.background =
        "rgba(7,22,47,.8)";

        header.style.boxShadow =
        "none";
    }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }
    );

});

/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const inputs = form.querySelectorAll("input, select");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "1px solid red";

            } else {

                input.style.border = "";

            }

        });

        if (!valid) {

            e.preventDefault();

        }

    });

}

/* ==========================
   FLOATING ROCKET
========================== */

const rocket =
document.querySelector(".rocket");

if(rocket){

    window.addEventListener(
        "mousemove",
        (e)=>{

            const x =
            (window.innerWidth/2
            - e.clientX) / 40;

            const y =
            (window.innerHeight/2
            - e.clientY) / 40;

            rocket.style.transform =
            `translate(${-x}px,${-y}px)`;
        }
    );

}

/* ==========================
   GOLD CURSOR GLOW
========================== */

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener(
    "mousemove",
    e=>{

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }
);

/* ==========================
   TYPEWRITER EFFECT
========================== */

const title =
document.querySelector(".hero h1");

if(title){

    const originalText =
    title.innerHTML;

    title.innerHTML = "";

    let i = 0;

    const typing = ()=>{

        if(i < originalText.length){

            title.innerHTML +=
            originalText.charAt(i);

            i++;

            setTimeout(
                typing,
                20
            );

        }

    };

    setTimeout(
        typing,
        500
    );

}
document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.querySelector('.rocket');

    if (rocket) {
        rocket.addEventListener('click', () => {
            // Prevent interrupting the animation if already flying
            if (!rocket.classList.contains('launching')) {
                rocket.classList.add('launching');

                // Remove the class after 2.5 seconds (2500ms) to reset its state
                setTimeout(() => {
                    rocket.classList.remove('launching');
                }, 2500);
            }
        });
    }
});
/* ==========================
   CARD HOVER EFFECT
========================== */

document
.querySelectorAll(
".service-card,.why-card"
)
.forEach(card=>{

    card.addEventListener(
        "mousemove",
        e=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            card.style.background =
            `
            radial-gradient(
            circle at ${x}px ${y}px,
            rgba(212,175,55,.15),
            rgba(255,255,255,.04)
            )
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.background =
            "rgba(255,255,255,.04)";
        }
    );

});



/* ==========================
   PAGE LOADED
========================== */

window.addEventListener(
    "load",
    ()=>{

        document.body.style.opacity = "1";

    }
);