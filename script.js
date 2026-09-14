const scenes = [
    document.getElementById("scene1"),
    document.getElementById("scene2"),
    document.getElementById("scene3"),
    document.getElementById("scene4"),
    document.getElementById("scene5")
];

let currentScene = 0;

function showScene(index) {

    scenes.forEach((scene, i) => {

        if (i === index) {
            scene.classList.add("active");
        } else {
            scene.classList.remove("active");
        }

    });

}

function nextScene() {

    if (currentScene < scenes.length - 1) {

        currentScene++;

        showScene(currentScene);

        setTimeout(nextScene, 5000);

    }

}


/*
    INTRO TIMELINE

    Scene 1 = 5 seconds
    Scene 2 = 5 seconds
    Scene 3 = 5 seconds
    Scene 4 = 5 seconds

    Then Scene 5 stays as the MENU.
*/

showScene(0);

setTimeout(() => {

    currentScene = 1;
    showScene(currentScene);

    setTimeout(() => {

        currentScene = 2;
        showScene(currentScene);

        setTimeout(() => {

            currentScene = 3;
            showScene(currentScene);

            setTimeout(() => {

                currentScene = 4;
                showScene(currentScene);

            }, 5000);

        }, 5000);

    }, 5000);

}, 5000);


/* =========================
   START BUTTON
========================= */

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    /*
       STEP 2 will connect this button
       to the HOME MENU.

       For now, it shows a temporary message.
    */

    startButton.innerText = "LOADING...";

    startButton.disabled = true;

    setTimeout(() => {

        alert("STEP 1 OK! Sunod nato ang HOME MENU.");

        startButton.innerText = "START";
        startButton.disabled = false;

    }, 700);

});
