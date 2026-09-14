/* =====================================================
   NIHS ZOMBIE APOCALYPSE
   STEP 2 - INTRO + HOME MENU
===================================================== */


/* =====================================================
   INTRO SCENES
===================================================== */

const scenes = [

    document.getElementById("scene1"),

    document.getElementById("scene2"),

    document.getElementById("scene3"),

    document.getElementById("scene4"),

    document.getElementById("scene5")

];


let currentScene = 0;


/* Show one intro scene */

function showScene(index) {

    scenes.forEach((scene, i) => {

        if (i === index) {

            scene.classList.add("active");

        } else {

            scene.classList.remove("active");

        }

    });

}


/* =====================================================
   INTRO SEQUENCE
===================================================== */

function runIntro() {

    showScene(0);


    /* Scene 1 */

    setTimeout(() => {

        currentScene = 1;

        showScene(currentScene);


        /* Scene 2 */

        setTimeout(() => {

            currentScene = 2;

            showScene(currentScene);


            /* Scene 3 */

            setTimeout(() => {

                currentScene = 3;

                showScene(currentScene);


                /* Scene 4 */

                setTimeout(() => {

                    currentScene = 4;

                    showScene(currentScene);


                }, 5000);


            }, 5000);


        }, 5000);


    }, 5000);

}


runIntro();


/* =====================================================
   HOME MENU
===================================================== */

const intro = document.getElementById("intro");

const homeMenu = document.getElementById("homeMenu");

const startButton = document.getElementById("startButton");


/* =====================================================
   START BUTTON
===================================================== */

startButton.addEventListener("click", () => {

    /* Hide intro */

    intro.style.opacity = "0";

    intro.style.pointerEvents = "none";


    /* Show home menu */

    setTimeout(() => {

        homeMenu.classList.add("active");

    }, 400);

});


/* =====================================================
   MENU BUTTONS
===================================================== */

const playButton =
    document.getElementById("playButton");


const settingsButton =
    document.getElementById("settingsButton");


const shopButton =
    document.getElementById("shopButton");


/* PLAY */

playButton.addEventListener("click", () => {

    /*
       CHARACTER SELECTION WILL BE
       ADDED IN THE NEXT STEPS.
    */

    alert(
        "PLAY\n\n" +
        "Sunod nato: Character Selection."
    );

});


/* SETTINGS */

settingsButton.addEventListener("click", () => {

    /*
       SETTINGS SYSTEM WILL BE
       ADDED LATER.
    */

    alert(
        "SETTINGS\n\n" +
        "Sunod nato: Volume ug Sound Settings."
    );

});


/* SHOP */

shopButton.addEventListener("click", () => {

    /*
       SHOP SYSTEM WILL BE
       ADDED LATER.
    */

    alert(
        "SHOP\n\n" +
        "Sunod nato: Weapons Shop."
    );

});
   
