

const params = new URLSearchParams(window.location.search);
const semester = params.get("sem");
const semTitle=document.getElementById("semTitle");
semTitle.textContent="Sem "+semester;


function setUpIA(number){

const ia = document.getElementById("ia"+number);

const details = document.getElementById("details"+number);

const addButton = document.getElementById("addSubject"+number);

const subjectsContainer = document.getElementById("subjects"+number);
const storageKey = "sem" + semester + "_ia" + number;

ia.addEventListener("click", () => {

    const wasOpen = details.style.display === "block";

    for (let i = 1; i <= 3; i++) {
        document.getElementById("details" + i).style.display = "none";
    }

    if (!wasOpen) {
        details.style.display = "block";
    }

});


addButton.addEventListener("click", () => {

    const row = document.createElement("div");
    row.className = "subject-row";

    row.innerHTML = `
        <input type="text" placeholder="Subject">
        <input type="number" placeholder="Marks">
        <button class="delete">❌</button>
    `;
    subjectsContainer.appendChild(row);

    const markInput = row.querySelector('input[type="number"]');

    markInput.addEventListener("input", calculateMarks);

    const deleteButton = row.querySelector(".delete");

deleteButton.addEventListener("click", () => {
    row.remove();
    calculateMarks();
});

});


function calculateMarks() {

    const markInputs = subjectsContainer.querySelectorAll('input[type="number"]');

    let total = 0;

    markInputs.forEach(input => {
        total += Number(input.value) || 0;
    });

    document.getElementById("total"+number).textContent = total;
     const maximum = markInputs.length * 25;

    const percentage = maximum > 0
        ? (total / maximum) * 100
        : 0;

    document.getElementById("percentage"+number).textContent =
        percentage.toFixed(2) + "%";

}


function averageMarks() {

    for(let i=1;i<=3;i++){
    document.getElementById("details" + i).style.display = "none";
    }
    const subject = row.querySelector('input[type="text"]').value;

    for(let i=1;i<=3;i++){
    if ( subject === "DBMS")
    const marks = row.querySelector('input[type="number"]').value;
    }
    document.getElementById("avg").textContent = total;
     const average = total / 3;
}


const saveButton = document.getElementById("save"+number);

saveButton.addEventListener("click", () => {

    console.log("SAVE BUTTON CLICKED");

    const rows = subjectsContainer.querySelectorAll(".subject-row");

    const subjects = [];

    rows.forEach(row => {

        const subject = row.querySelector('input[type="text"]').value;
        const marks = row.querySelector('input[type="number"]').value;

        subjects.push({
            subject: subject,
            marks: marks
        });

    });

    console.log("Subjects:", subjects);

    localStorage.setItem(storageKey, JSON.stringify(subjects));

    console.log("Stored:", localStorage.getItem(storageKey));

    alert("Saved!");

});



const savedData = localStorage.getItem(storageKey);

if (savedData) {

    const subjects = JSON.parse(savedData);

    subjects.forEach(data => {

        const row = document.createElement("div");
        row.className = "subject-row";

        row.innerHTML = `
            <input type="text" placeholder="Subject" value="${data.subject}">
            <input type="number" placeholder="Marks" value="${data.marks}">
            <button class="delete">❌</button>
        `;

        subjectsContainer.appendChild(row);

        const markInput = row.querySelector('input[type="number"]');

        markInput.addEventListener("input", calculateMarks);

        const deleteButton = row.querySelector(".delete");

        deleteButton.addEventListener("click", () => {
            row.remove();
            calculateMarks();
        });

    });

    calculateMarks();
}
}

setUpIA(1);
setUpIA(2);
setUpIA(3);
