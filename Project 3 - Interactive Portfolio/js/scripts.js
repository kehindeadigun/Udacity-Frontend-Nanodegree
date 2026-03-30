let projectsData;
const formSection = document.getElementById("formSection");
const contactMessage = document.getElementById("contactMessage");
const projectNavArrows = document.getElementById("projectNavArrows");
const hamburger = document.getElementById("hamburger");

function openMenu(event) {
    const hamburger = event.target.closest("#hamburger");
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
    hamburger.classList.toggle("closeButton");
}

function closeMenu() {
    const nav = document.querySelector("nav");
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        hamburger.classList.remove("closeButton");
    }
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

async function fetchData(file) {
    let jsonData;
    try {
        const fetchResponse = await fetch(file, { "force-cache": true });
        if (!fetchResponse.ok) {
            throw new Error(`Something went wrong status ${fetchResponse.status}`)
        }
        jsonData = await fetchResponse.json();
    }
    catch (err) {
        console.log(err);
    }
    return jsonData
}

async function fillAboutMe() {
    const aboutMe = document.getElementById("aboutMe");
    const aboutmeParagraph = document.createElement("p");
    const headshotContainer = document.createElement("div");
    const headshotImage = document.createElement("img");
    const aboutMeFragment = document.createDocumentFragment();

    let aboutMeData = await fetchData("./data/aboutMeData.json");

    aboutmeParagraph.textContent = aboutMeData?.aboutMe ?? "Missing Data";
    headshotImage.src = aboutMeData?.headshot ?? "";
    headshotContainer.classList.add("headshotContainer");
    headshotContainer.append(headshotImage);
    aboutMeFragment.append(aboutmeParagraph);
    aboutMeFragment.append(headshotContainer);
    aboutMe.append(aboutMeFragment);
}

async function fillProjects() {
    const projectList = document.getElementById("projectList");
    const projectFragment = document.createDocumentFragment();

    if (!projectsData) {
        projectsData = await fetchData("./data/projectsData.json");
    }

    projectsData.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        projectCard.id = project.project_id;
        const projectImage = project.card_image ? project.card_image : "./images/card_placeholder_bg.webp";
        projectCard.style.backgroundImage = `url(${projectImage})`;
        projectCard.classList.add("projectCard");

        const projectTitle = document.createElement("h4");
        projectTitle.textContent = project.project_name;
        const projectDesc = document.createElement("p");
        projectDesc.textContent = project.short_description;

        projectCard.append(projectTitle);
        projectCard.append(projectDesc);

        projectFragment.append(projectCard);
    });

    projectList.addEventListener("click", handleProjectClick);
    projectList.append(projectFragment);
}

function handleArrowClick(event) {
    const arrow = event.target;
    const projectList = document.getElementById("projectList");
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const scrollSize = 218;
    if (arrow.classList.contains("arrow-left")){
        if (isDesktop) {
            projectList.scrollBy({ top: -scrollSize, behavior: "smooth" });
        }
        else {
            projectList.scrollBy({ left: -scrollSize, behavior: "smooth" });
        }
    }
    else {
        if (isDesktop) {
            projectList.scrollBy({ top: scrollSize, behavior: "smooth" });
        }
        else {
            projectList.scrollBy({ left: scrollSize, behavior: "smooth" });
        }
    }
}

async function handleProjectClick(event) {
    const projectCard = event.target.closest(".projectCard");
    fillSpotlight(projectCard.id);
}

async function fillSpotlight(targetId = null) {
    const projectSpotlight = document.getElementById("projectSpotlight");
    const spotlightTitles = document.getElementById("spotlightTitles");
    const defaultBackground = "./images/spotlight_placeholder_bg.webp";
    const spotlightFragrment = document.createDocumentFragment();
    if (!projectsData) {
        projectsData = await fetchData("./data/projectsData.json");
    }
    const project = !targetId ? projectsData[0] : projectsData.find(proj => proj.project_id === targetId);
    const spotlightImage = project.spotlight_image ? project.spotlight_image : defaultBackground;

    const spotlightTitleHeader = document.createElement("h3");
    const spotlightTitleDesc = document.createElement("p");
    const spotlightTitleLink = document.createElement("a");

    spotlightTitleHeader.textContent = project.project_name;
    spotlightTitleDesc.textContent = project.long_description;
    spotlightTitleLink.href = project.url;
    spotlightTitleLink.textContent = "Click here to see more...";

    spotlightFragrment.append(spotlightTitleHeader);
    spotlightFragrment.append(spotlightTitleDesc);
    spotlightFragrment.append(spotlightTitleLink);

    projectSpotlight.style.backgroundImage = `url(${spotlightImage})`;
    spotlightTitles.replaceChildren(spotlightFragrment);
}

function handleContactMessageInput(event) {
    const charactersLeft = document.getElementById("charactersLeft");
    charactersLeft.textContent = `Characters: ${event.target.value.length}/300`;
}

function validateFormSubmit(event) {
    event.preventDefault();
    const contactEmail = document.getElementById("contactEmail");
    const contactMessage = document.getElementById("contactMessage");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    if (!contactEmail.value) {
        emailError.textContent = "Email cannot be empty";
        return
    }
    if (!contactEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || contactEmail.value.match(/[^a-zA-Z0-9@._-]/)) {
        emailError.textContent = "Enter a valid Email address and do not use illegal characters";
        return
    }

    if (!contactMessage.value) {
        messageError.textContent = "Message cannot be empty";
        return
    }
    if (contactMessage.value.match(/[^a-zA-Z0-9@._-]/)) {
        messageError.textContent = "Do not use special characters in the message";
        return
    }
    if (contactMessage.value.length > 300) {
        messageError.textContent = "Message exceeds 300 characters, please shorten";
        return
    }

    alert("Form successfully validated!");
    contactEmail.value = "";
    contactMessage.value = "";
    emailError.textContent = "";
    messageError.textContent = "";
}

contactMessage.addEventListener("input", handleContactMessageInput);
projectNavArrows.addEventListener("click", handleArrowClick);
formSection.addEventListener("submit", validateFormSubmit);
hamburger.addEventListener("click", openMenu);
fillAboutMe();
fillProjects();
fillSpotlight();