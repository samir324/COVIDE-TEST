const questions = [{
        question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',

        input: {
            type: 'radio',
            qNumber: 'Q1',
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
            qNumber: 'Q2',
            name: 'degrés',
            min: 34,
            max: 42
        }
    }, {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

        input: {
            type: 'radio',
            qNumber: 'Q3',
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
            qNumber: 'Q4',
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
            qNumber: 'Q5',
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
            qNumber: 'Q6',
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
            qNumber: 'Q7',
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
            qNumber: 'Q8',
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
            qNumber: 'Q9',
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
            qNumber: 'Q10',
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
            qNumber: 'Q11',
            name: 'ans',
            min: 15,
            max: 110
        }
    }, {
        question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            qNumber: 'Q12',
            name: 'kg',
            min: 20,
            max: 250
        }
    }, {
        question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            qNumber: 'Q13',
            name: 'cm',
            min: 80,
            max: 250
        }
    }, {
        question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',

        input: {
            type: 'radio',
            qNumber: 'Q14',
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
            qNumber: 'Q15',
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
            qNumber: 'Q16',
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
            qNumber: 'Q17',
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
            qNumber: 'Q18',
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
            qNumber: 'Q19',
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
            qNumber: 'Q20',
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
            qNumber: 'Q21',
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
            qNumber: 'Q22',
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
const nextbutton = document.querySelector('#nextbutton');
const lastbtn = document.querySelector('.last-btn');
const reponceQuestionPara = document.querySelector('.question');
const reponce = document.querySelector('.reponce');
const switsh = document.querySelector('.switsh');
const result = document.querySelector('.Préambule h3');





let i = 0;  // index de la question

// botton pour  demarrer du test
btnDemarer.addEventListener('click', function DeparTest() {
    btnDemarer.style.display = 'none'; 
    Préambule.style.display = 'none';
    quicontainer.style.display = 'block';
    Etape[0].classList.remove('etape-actuelle');
    Etape[1].classList.add('etape-actuelle');
    nextbutton.disabled = true;
    switchQuest(questions[i]);

});





nextbutton.addEventListener('click', () => {
    // if()
    i++;
    if (i === (questions.length) - 1) {
        // i = (questions.length) - 1;
        nextbutton.innerText = "Terminer le test";
        nextbutton.classList.add('result');
        const resultBtn = document.querySelector('.result');
        resultBtn.addEventListener('click', Results);
    }
    lastbtn.style.display = 'block';
    nextbutton.classList.remove('addmargin');
    nextbutton.disabled = true;
    switchQuest(questions[i]);
    suiverNbr(i);


});

function suiverNbr(j) {
    const actlNbr = j + 1; // *car les index sont commencer par 0*
    Nbrquestion.innerText = actlNbr; // * changer le nembre de la question *
    SuiverBar.style.width = `calc(${actlNbr}* calc(100% / 22))`; // changer la langeur du div>.bar 
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
                        <input type="radio" name="${reponceinput.qNumber}" id="${answer.text}"/>
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`;
        });
    } else {
        reponce.innerHTML += `<input type="number"  id="${reponceinput.name}" name="${reponceinput.qNumber}" min="${reponceinput.min}" max="${reponceinput.max}" placeholder="${reponceinput.min} - ${reponceinput.max}"/>
                                    <span class="input-span">${reponceinput.name}</span>`
    }


};
lastbtn.addEventListener('click', () => {
    i--;
    nextbutton.innerText = "suivant";
    if (i <= 0) {
        i = 0;
        nextbutton.classList.add('addmargin');
        lastbtn.style.display = 'none';
    }
    switchQuest(questions[i]);
    suiverNbr(i);

    nextbutton.classList.remove('result')
});

switsh.addEventListener('change', (event) => {
    const input = event.target;
    if (input.type === 'number') {
        const testnumber = parseFloat(input.value);
        if (testnumber >= input.min && testnumber <= input.max) {
            values[input.name] = input.value;
            nextbutton.disabled = false;
        } else {
            nextbutton.disabled = true;
        }
    } else {
        values[input.name] = input.id;
        console.log(values);
        nextbutton.disabled = false;
    }
});


const resultPara = document.querySelectorAll('.Préambule p');

console.log(resultPara[0]);

let values = {};
let gravité = 0;

function Results() {
    if (values['Q1'] === 'Oui') {  gravité++   }
    if (values['Q8'] === 'Oui' || values['Q9'] === 'Oui') {   gravité++   }
    if (values['Q10'] === 'Fatigué(e)' || values['Q10'] === 'Très fatigué') {  gravité++  }
    if (values['Q14'] === 'Oui' || values['Q15'] === 'Oui') {  gravité++   }
    AffichageResult(gravité)
}

function AffichageResult(gravité) {
    Etape[1].classList.remove('etape-actuelle');
    Etape[2].classList.add('etape-actuelle');
    btnDemarer.style.display = 'block';
    Préambule.style.display = 'block';
    quicontainer.style.display = 'none';
    btnDemarer.textContent = ' Recommencer le test';
    
    btnDemarer.addEventListener('click', () => {
        window.location.reload();
    });

    result.innerText = 'Résultats';
    if (gravité === 0) {
        resultPara[0].innerText = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19, consulter la page Conseils'
        resultPara[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    } else if (gravité === 1) {
        resultPara[0].innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes'
        resultPara[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    } else if (gravité === 2) {
        resultPara[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domicile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent."
        resultPara[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    } else {
        resultPara[0].innerText = "Appelez le 141"
        resultPara[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultPara[0].style.color = '#d63031';
        resultPara[0].style.fontSize = '50px';
        resultPara[0].style.fontWeight = 'bold';
    }

}
