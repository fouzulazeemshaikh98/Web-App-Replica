let clients = document.getElementById("clients");
let projects = document.getElementById("projects");
let support = document.getElementById("support");
let team = document.getElementById("team");
let clientsInc = 0;
let projectInc = 0;
let supportInc = 0;
let teamInc = 0;
let interval1;
let interval2;
let interval3;
let interval4;

function abc() {
    interval1 = setInterval(function () {
        clientsInc++;
        clients.innerHTML = clientsInc;
        if (clientsInc >= 500) {
            clearInterval(interval1)
        }
    }, 1);

    interval2 = setInterval(function () {
        projectInc++;
        projects.innerHTML = clientsInc;
        if (projectInc >= 190) {
            // projectInc = 0;
            clearInterval(interval2)
        }
    }, 1);

    interval3 = setInterval(function () {
        supportInc++;
        support.innerHTML = supportInc;
        if (supportInc >= 24) {
            clearInterval(interval3)
        }
    }, 30)

    interval4 = setInterval(function () {
        teamInc++;
        team.innerHTML = teamInc;
        if (teamInc >= 70) {
            clearInterval(interval4)
        }
    }, 10)
}