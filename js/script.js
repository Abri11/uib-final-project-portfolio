// Hole Referenzen

let generalList = document.querySelector('#about-general');
let hardSkillList = document.querySelector('#about-hard-skills');
let softSkillList = document.querySelector('#about-soft-skills');
let designList = document.querySelector('#about-design-skills');

let generalPoints = document.querySelector('#general-list');
let hardSkillPoints = document.querySelector('#hard-skills-list');
let softSkillPoints = document.querySelector('#soft-skills-list');
let designPoints = document.querySelector('#design-list');


// Event-Handler an Listen uebergeben

generalList.addEventListener('click', evt => {
    generalPoints.toggleAttribute('hidden');
});

hardSkillList.addEventListener('click', evt => {
    hardSkillPoints.toggleAttribute('hidden');
});

softSkillList.addEventListener('click', evt => {
    softSkillPoints.toggleAttribute('hidden');
});

designList.addEventListener('click', evt => {
    designPoints.toggleAttribute('hidden');
});

