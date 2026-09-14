/* =====================================================
   NIHS ZOMBIE APOCALYPSE
   STEP 3 - CHARACTER SELECTION
===================================================== */


/* =====================================================
   INTRO
===================================================== */

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

        scene.classList.toggle(
            "active",
            i === index
        );

    });

}

function runIntro() {

    showScene(0);

    setTimeout(() => {

        showScene(1);

        setTimeout(() => {

            showScene(2);

            setTimeout(() => {

                showScene(3);

                setTimeout(() => {

                    showScene(4);

                }, 5000);

            }, 5000);

        }, 5000);

    }, 5000);
}

runIntro();


/* =====================================================
   SCREENS
===================================================== */

const intro =
    document.getElementById("intro");

const homeMenu =
    document.getElementById("homeMenu");

const roleScreen =
    document.getElementById("roleScreen");

const gradeScreen =
    document.getElementById("gradeScreen");

const genderScreen =
    document.getElementById("genderScreen");

const characterScreen =
    document.getElementById("characterScreen");

const confirmScreen =
    document.getElementById("confirmScreen");


/* =====================================================
   PLAYER SELECTION DATA
===================================================== */

const playerData = {

    role: null,

    grade: null,

    gender: null,

    character: null

};


/* =====================================================
   CHARACTERS
===================================================== */

const characters = {

    student: {

        7: {

            boy: [
                "Steve",
                "Cyber C"
            ],

            girl: [
                "J",
                "Inday J",
                "A"
            ]

        },

        8: {

            boy: [
                "NYGIEN",
                "BOSS H",
                "DODONG O"
            ],

            girl: [
                "XYHH",
                "ASH",
                "MITCH",
                "HYRIS C",
                "D",
                "J"
            ]

        },

        9: {

            boy: [
                "BOSS J",
                "BOSS R",
                "DODONG"
            ],

            girl: [
                "INDAY Y",
                "MISS H",
                "V"
            ]

        },

        10: {

            boy: [
                "JOHN REYNARD",
                "KENTH",
                "CLARK",
                "CARL",
                "ARCHEL",
                "RHEY",
                "JOHNSON",
                "CRISTIAN",
                "RHAMCES",
                "JESTER",
                "JULIUS",
                "ARCHGEL",
                "RENCEY",
                "ELM",
                "SHR",
                "REX"
            ],

            girl: [
                "A",
                "S",
                "M",
                "J",
                "I",
                "D"
            ]

        },

        11: {

            boy: [
                "A",
                "C",
                "R"
            ],

            girl: [
                "M",
                "D",
                "J",
                "R"
            ]

        },

        12: {

            boy: [
                "ARV",
                "S",
                "T",
                "D"
            ],

            girl: []

        }

    },


    teacher: {

        7: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM J"
            ]

        },

        8: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM M"
            ]

        },

        9: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM JU"
            ]

        },

        10: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM T"
            ]

        },

        11: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM N",
                "MAAM P",
                "MAAM M"
            ]

        },

        12: {

            boy: [
                "SIR J"
            ],

            girl: [
                "MAAM MJ"
            ]

        }

    }

};


/* =====================================================
   SHIRT COLORS
===================================================== */

const shirtColors = [

    "#3b5ccc",
    "#2e8b72",
    "#9b4dcc",
    "#c65a4d",
    "#d18b35",
    "#3b9bb5",
    "#a13c72",
    "#536b8e"
];


/* =====================================================
   SPECIAL COLORS
===================================================== */

function getShirtColor(name, index) {

    const cleanName =
        name.toUpperCase();

    /* XYHH = PURPLE */

    if (cleanName === "XYHH") {

        return "#7b2cff";

    }


    /* JOHN REYNARD = BLUE */

    if (cleanName === "JOHN REYNARD") {

        return "#1769e0";

    }


    return shirtColors[
        index % shirtColors.length
    ];
}


/* =====================================================
   OPEN / CLOSE SCREENS
===================================================== */

function openScreen(screen) {

    const allScreens = [

        intro,
        homeMenu,
        roleScreen,
        gradeScreen,
        genderScreen,
        characterScreen,
        confirmScreen

    ];

    allScreens.forEach(element => {

        if (element === screen) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");

        }

    });

}


/* =====================================================
   START → HOME
===================================================== */

document
    .getElementById("startButton")
    .addEventListener("click", () => {

        openScreen(homeMenu);

    });


/* =====================================================
   HOME → PLAY
===================================================== */

document
    .getElementById("playButton")
    .addEventListener("click", () => {

        playerData.role = null;
        playerData.grade = null;
        playerData.gender = null;
        playerData.character = null;

        openScreen(roleScreen);

    });


/* =====================================================
   ROLE
===================================================== */

document
    .querySelectorAll("[data-role]")
    .forEach(button => {

        button.addEventListener("click", () => {

            playerData.role =
                button.dataset.role;

            openScreen(gradeScreen);

        });

    });


/* =====================================================
   GRADE
===================================================== */

document
    .querySelectorAll("[data-grade]")
    .forEach(button => {

        button.addEventListener("click", () => {

            playerData.grade =
                button.dataset.grade;

            openScreen(genderScreen);

        });

    });


/* =====================================================
   GENDER
===================================================== */

document
    .querySelectorAll("[data-gender]")
    .forEach(button => {

        button.addEventListener("click", () => {

            playerData.gender =
                button.dataset.gender;

            createCharacters();

            openScreen(characterScreen);

        });

    });


/* =====================================================
   CREATE CHARACTER CARD
===================================================== */

function createCharacterCard(name, index) {

    const card =
        document.createElement("button");

    card.className =
        "character-card";


    const isGirl =
        playerData.gender === "girl";


    const avatarClass =
        isGirl
            ? "avatar avatar-girl"
            : "avatar";


    const shirt =
        getShirtColor(name, index);


    card.innerHTML = `

        <div
            class="${avatarClass}"
            style="--shirt:${shirt}"
        >

            <div class="avatar-hair"></div>

            <div class="avatar-head"></div>

            <div class="avatar-body"></div>

        </div>

        <div class="character-name">
            ${name}
        </div>

        <div class="character-type">
            ${isGirl ? "BABAYE" : "LALAKI"}
        </div>

    `;


    card.addEventListener("click", () => {

        document
            .querySelectorAll(".character-card")
            .forEach(c =>
                c.classList.remove("selected")
            );


        card.classList.add("selected");


        playerData.character = name;


        document
            .getElementById("characterContinue")
            .disabled = false;

    });


    return card;
}


/* =====================================================
   LOAD CHARACTERS
===================================================== */

function createCharacters() {

    const grid =
        document.getElementById(
            "characterGrid"
        );


    grid.innerHTML = "";


    const list =
        characters[
            playerData.role
        ][
            playerData.grade
        ][
            playerData.gender
        ] || [];


    const info =
        document.getElementById(
            "selectionInfo"
        );


    info.textContent =
        `${playerData.role === "student"
            ? "ESTUDYANTE"
            : "TEACHER"} • GRADE ${playerData.grade}`;


    document
        .getElementById("characterContinue")
        .disabled = true;


    if (list.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                padding:40px;
                color:#d6c8df;
            ">

                Wala pa tayong character
                para ani nga category.

            </div>

        `;

        return;

    }


    list.forEach((name, index) => {

        grid.appendChild(
            createCharacterCard(
                name,
                index
            )
        );

    });

}


/* =====================================================
   CHARACTER → CONFIRM
===================================================== */

document
    .getElementById("characterContinue")
    .addEventListener("click", () => {

        if (!playerData.character) {

            return;

        }


        const container =
            document.getElementById(
                "selectedCharacter"
            );


        container.innerHTML = "";


        const card =
            createCharacterCard(
                playerData.character,
                0
            );


        card.classList.add("selected");

        card.disabled = true;


        container.appendChild(card);


        document
            .getElementById("confirmText")
            .textContent =
            `${playerData.character} • ${
                playerData.role === "student"
                    ? "ESTUDYANTE"
                    : "TEACHER"
            } • GRADE ${playerData.grade}`;


        openScreen(confirmScreen);

    });


/* =====================================================
   BACK BUTTONS
===================================================== */

document
    .getElementById("roleBack")
    .addEventListener("click", () => {

        openScreen(homeMenu);

    });


document
    .getElementById("gradeBack")
    .addEventListener("click", () => {

        openScreen(roleScreen);

    });


document
    .getElementById("genderBack")
    .addEventListener("click", () => {

        openScreen(gradeScreen);

    });


document
    .getElementById("characterBack")
    .addEventListener("click", () => {

        openScreen(genderScreen);

    });


document
    .getElementById("confirmBack")
    .addEventListener("click", () => {

        openScreen(characterScreen);

    });


/* =====================================================
   CONFIRM → NEXT STEP
===================================================== */

document
    .getElementById("confirmButton")
    .addEventListener("click", () => {

        alert(
            "CHARACTER SELECTED!\n\n" +
            playerData.character +
            "\n\n" +
            "Sunod nato: TAO O ZOMBIE."
        );

    });


/* =====================================================
   TEMPORARY SETTINGS / SHOP
===================================================== */

document
    .getElementById("settingsButton")
    .addEventListener("click", () => {

        alert(
            "SETTINGS\n\n" +
            "Sunod nato ang Volume ug Sound System."
        );

    });


document
    .getElementById("shopButton")
    .addEventListener("click", () => {

        alert(
            "SHOP\n\n" +
            "Sunod nato ang Weapons Shop."
        );

    });
