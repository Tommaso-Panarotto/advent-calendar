//SOURCE

const source = [
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "ico-albero",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "ico-stella",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "ico-neve",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/dance.gif"
    }
];
//create session for opened box
let OpenBoxes = JSON.parse(sessionStorage.getItem('openBoxes')) || [];
//Get element from the DOM
const advent = document.getElementById("advent");
const modalBody = document.getElementById("modal-body");
const overlay = document.getElementById("overlay");
const closeModalButton = document.getElementById("btn-modal");
const resetButton = document.getElementById("reset-button");


//function to show the modal
function showModal(i) {
    //clean the message
    modalBody.innerHTML = "";
    //get the corresponding message from the source
    const message = source[i];

    //control if its an image or a text
    if (message.type === "text") {
        modalBody.innerHTML = message.text;
    } else {
        //create element img
        const gif = document.createElement('img');
        //set the src
        gif.src = message.url;
        //get the alt message and modify it
        const alt = message.url;
        gif.alt = alt.replace("images/", "");
        //set the size of the img
        gif.classList.add("img-fluid");
        gif.style.width = "100%";
        //append the img elemnt in the modal body
        modalBody.appendChild(gif);
    }

    //remove class d-none from the overlay
    overlay.classList.remove("d-none");
}

//Monthe day for the calendar
const month = 25;
//function to create advent calendar
function createAdvent() {
    for (let i = 1; i <= month; i++) {

        //create the box
        const box = document.createElement('div');

        //control if some box is already open
        OpenBoxes.includes(i) ? box.classList.add('opened-box') : box.classList.add('box');

        //add style for the last box
        if (i === month) {
            box.classList.add("last-box");
        }

        //create image
        const image = document.createElement('img');
        image.src = `images/icons/${source[i - 1].icon}.png`;
        image.alt = `${source[i - 1].icon}`;

        //create number element
        const number = document.createElement('div');
        number.innerText = i;

        box.appendChild(image);
        box.appendChild(number);

        // event after click on the box
        box.addEventListener('click', () => {
            //show the modal
            showModal(i - 1);

            //add class opened-box and remove class box
            box.classList.add('opened-box');
            box.classList.remove('box');

            //control if is already open
            if (!OpenBoxes.includes(i)) {
                OpenBoxes.push(i);
            }

            //session storage the index of the box
            sessionStorage.setItem('openBoxes', JSON.stringify(OpenBoxes));
        })

        advent.appendChild(box);
    }
}

//show the reset button
if (OpenBoxes.length > 0) {
    resetButton.classList.remove("d-none");
}


closeModalButton.addEventListener("click", function () {
    //add display none to overlay
    overlay.classList.add("d-none");
    //remove display none from reset button
    resetButton.classList.remove("d-none");
})

resetButton.addEventListener("click", function () {
    //get all box
    const boxes = advent.querySelectorAll(':scope > div')
    //remove class opened and add class box
    for (let i = 0; i < OpenBoxes.length; i++) {
        boxes[OpenBoxes[i] - 1].classList.add("box");
        boxes[OpenBoxes[i] - 1].classList.remove("opened-box");
    }
    //remove open Boxes from the session
    sessionStorage.removeItem("openBoxes");
    //clean openBoxes
    OpenBoxes = [];
})

//create advent calendar
createAdvent()

