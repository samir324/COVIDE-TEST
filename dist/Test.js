const questions = [{
        question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Quelle est votre température corporelle ?',

        input: {
            type: 'number',
            name: 'degrés',
            min: 34,
            max: 42
        }
    }, {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous un mal de gorge ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Actuellement, comment vous vous sentez ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Bien',
                icon: ' fa fa-laugh'
            }, {
                text: 'Assez bien',
                icon: ' fa fa-smile-o'
            }, {
                text: 'Fatigué(e)',
                icon: ' fa fa-frown-o'
            }, {
                text: 'Très fatigué',
                icon: 'fa fa-dizzy'
            }]
        }
    }, {
        question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

        input: {
            type: 'number',
            name: 'ans',
            min: 15,
            max: 110
        }
    }, {
        question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            name: 'kg',
            min: 20,
            max: 250
        }
    }, {
        question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            name: 'cm',
            min: 80,
            max: 250
        }
    }, {
        question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Êtes-vous diabétique ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous ou avez-vous eu un cancer ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une maladie chronique du foie ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Êtes-vous enceinte ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }, {
                text: 'Homme',
                icon: 'fa fa-male'

            }]
        }
    }, {
        question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }, {
        question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa fa-check'
            }, {
                text: 'Non',
                icon: 'fa fa-times'
            }]
        }
    }

]


const quicontainer = document.querySelector('.quicontainer');
const btnDemarer = document.querySelector('.btnDemarer');
const Préambule = document.querySelector('.Préambule');
const Etape = document.querySelectorAll('.etape h1');
const Nbrquestion = document.querySelector('.nbrquestion');
const SuiverBar = document.querySelector('.bar');

let i = 0;
btnDemarer.addEventListener('click', function DeparTest() {
    btnDemarer.style.display = 'none';
    Préambule.style.display = 'none';
    quicontainer.style.display = 'block';
    Etape[0].classList.remove('etape-actuelle');
    Etape[1].classList.add('etape-actuelle');
    nextbutton.disabled = true;
    switchQuest(questions[i]);

});


const nextbutton = document.querySelector('#nextbutton');
const lastbtn = document.querySelector('.last-btn');
const reponceQuestionPara = document.querySelector('.question');
const reponce = document.querySelector('.reponce');
const switsh = document.querySelector('.switsh');

 // index de la question
nextbutton.addEventListener('click', () => {
    // if()
    i++;
    if (i >= (questions.length)-1 ) {
        i = (questions.length)-1;
        nextbutton.innerText= "Terminer le test";
    }
    lastbtn.style.display = 'block';
    nextbutton.classList.remove('addmargin');
    nextbutton.disabled = true;
    switchQuest(questions[i]);
    suiverNbr(i);
});
function suiverNbr(j) {
    const actlNbr = j + 1;// *car les index sont commencer par 0*
    Nbrquestion.innerText = actlNbr; // * changer le nembre de la question *
    SuiverBar.style.width = `calc(${actlNbr}* calc(100% / 22))`;// changer la langeur du div>.bar 
}

function switchQuest(element) {

    reponceQuestionPara.innerText = element.question;
    reponce.innerHTML = '';
    const reponceAnswer = element.input.answer;
    const reponceinput = element.input;
    if (reponceinput.type === 'radio') {

        reponceAnswer.forEach(answer => {

            reponce.innerHTML += `
                    <div>
                        <input type="radio" name="choice" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`;
        });



    } else {

        reponce.innerHTML += `<input type="number"  id="${reponceinput.name}" min="${reponceinput.min}" max="${reponceinput.max}" placeholder="${reponceinput.min} - ${reponceinput.max}">
                                    <span class="input-span">${reponceinput.name}</span>`
    }


};
lastbtn.addEventListener('click', () => {
    i--;
    nextbutton.innerText= "suivant";
    if (i <= 0){
        i = 0;
        nextbutton.classList.add('addmargin');
        lastbtn.style.display = 'none';
    } 
    switchQuest(questions[i]);
    suiverNbr(i);
});

switsh.addEventListener('change', (event) => {
    const input = event.target;
    if (input.type === 'number') {
        const testnumber = parseFloat(input.value);
        if (testnumber >= input.min && testnumber <= input.max) {
            nextbutton.disabled = false;
        } else {
            nextbutton.disabled = true;
        }
    } else {
        nextbutton.disabled = false;
    }
});
 
