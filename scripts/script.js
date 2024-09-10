function erweitere_to_do() {
    let ausgabe_liste = document.getElementById("elemente-liste");
    let eingabe_datum = document.getElementById("eingabe").value;
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let delete_btn = document.createElement('button');
    delete_btn.innerText = 'X';
    delete_btn.setAttribute('class', 'delete-button');
    btn.innerText = eingabe_datum;
    btn.setAttribute('class', 'to-do-buttons')
    li.appendChild(btn);
    li.appendChild(delete_btn);
    li.setAttribute('class', 'to-do-elemente');
    li.setAttribute('name', 'elemente');

    nummeriere(); 
    li.setAttribute('id', `element${ausgabe_liste.children.length}`);
    delete_btn.setAttribute('onClick', `entferne('${li.id}')`)
    btn.setAttribute('onClick', `erledigt('${li.id}')`);
    ausgabe_liste.appendChild(li);
    document.getElementById("eingabe").value = '';
}

function erledigt(id) {
    nummeriere()
    let aufgaben = document.getElementsByName('elemente');
    for (let i = 0; i < aufgaben.length; i++) {
        if (aufgaben[i].id == id) {
            if (aufgaben[i].className == 'to-do-elemente') {
                aufgaben[i].className = 'to-do-elemente-finished';
            }
            else {
                aufgaben[i].className = 'to-do-elemente';
            }           
        }
    }
}

function nummeriere() {
    let aufgaben = document.getElementsByClassName('elemente')
    for (let i = 0; i < aufgaben.length; i++) {
        aufgaben[i].setAttribute('id', 'element'+i);
    }
}
function entferne(id) {
    let element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}