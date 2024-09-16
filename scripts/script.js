function erweitere_to_do() {
    let ausgabe_liste = document.getElementById("elemente-liste");
    let eingabe_datum = document.getElementById("eingabe").value;

    //Eingabekontrolle, prüfe, ob das Feld eingabe_datum gefüllt ist
    if (eingabe_datum.trim()==='') {
        alert("Bitte Aufgabe eingeben.");
        return;
    }

    let li = document.createElement('li');
    let btn = document.createElement('button');
    let delete_btn = document.createElement('button');

    // erstelle Button für die Eingabe
    btn.innerText = eingabe_datum;
    btn.setAttribute('class', 'to-do-buttons')

    // erstelle Button zum Entfernen der Aufgabe
    delete_btn.innerText = 'X';
    delete_btn.setAttribute('class', 'delete-button');

    li.appendChild(btn);
    li.appendChild(delete_btn);
    li.setAttribute('class', 'to-do-elemente');
    li.setAttribute('name', 'elemente');

    // ordne jedem neuen Listenelement eine ID zu
    li.setAttribute('id', `element${ausgabe_liste.children.length}`);
    delete_btn.setAttribute('onClick', `entferne('${li.id}')`)
    btn.setAttribute('onClick', `erledigt('${li.id}')`);

    // Füge das Listenelement der Liste hinzu
    ausgabe_liste.appendChild(li);

    // Lösche das Eingabefeld, nachdem die Aufgabe hinzugefügt wurde
    document.getElementById("eingabe").value = '';
}

function erledigt(id) {
    let aufgabe = document.getElementById(id);
    if (aufgabe) {
        // ändere den Button von nicht-erledigt zu erledigt und anders herum
        if (aufgabe.className === 'to-do-elemente') {
            aufgabe.className = 'to-do-elemente-finished';
        } else {
            aufgabe.className = 'to-do-elemente';
        }
    }
}

function nummeriere() {
    let aufgaben = document.querySelectorAll('[name="elemente"]');
    aufgaben.forEach((aufgabe, index) => {
        aufgabe.setAttribute('id', `element${index}`);
    });
}
function entferne(id) {
    let element = document.getElementById(id);
    if (element) {
        element.remove();
        nummeriere();
    }
}