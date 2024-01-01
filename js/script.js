// Verificar si el dispositivo es un PC
//if (window.innerWidth < 500 || window.innerHeight < 500) {
    // Redirigir a otra página
    //window.location.href = 'html/error.html';
//}


// IMPIDE QUE SE PUEDA IR HACIA ATRAS O ADELANTE USANDO LAS FLECHAS DEL NAVEGADOR
window.history.pushState(null, null, window.location.href);
window.onpopstate = function() {
    window.history.go(1);
};


// Función para des-seleccionar los radio buttons al cargar o recargar la página
function desSeleccionarRadioButtons() {
    var radioButtons = document.getElementsByClassName('radio');
    for (var i = 0; i < 3; i++) {
        radioButtons[i].checked = false;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sec').style.opacity = 1; // Cuando se carga completamente, establece la opacidad a 1
});


function getRandomElements(dictionary, count) {
    let keys = Object.keys(dictionary);
    let randomElements = {};
    while (Object.keys(randomElements).length < count) {
        let randomIndex = Math.floor(Math.random() * keys.length);
        let randomKey = keys[randomIndex];
        if (dictionary[randomKey]) {
            randomElements[randomKey] = dictionary[randomKey];
        }
    }
    return randomElements;
}


function getRandomCountry() {
    let randomCountry;
    let correctOption = opcionCorrecta.value;
    
    do {
        // Convertir el diccionario en un array de de los valores del diccionario
        let values = Object.values(fullFlagDictionary);

        let randomIndex = Math.floor(Math.random() * values.length);
        randomCountry = values[randomIndex];
    } while (randomCountry === correctOption || randomCountry === document.getElementById('opcion1').value || randomCountry === document.getElementById('opcion2').value || randomCountry === document.getElementById('opcion3').value);
    
    return randomCountry;
}




// APLICA LA REDUCCION DE TAMAÑO DE LOS PAISES QUE SU NOMBRE ES LARGO DE MANERA PROPORCIONAL
document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos con la clase 'pais'
    var paises = document.querySelectorAll('.pais');

    // Iterar sobre cada elemento y ajustar el tamaño del texto
    paises.forEach(function (pais) {
        ajustarTamanioTexto(pais);
    });

    // Crear un MutationObserver para observar cambios en el contenido de los elementos
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'characterData' || mutation.type === 'childList') {
                // Ajustar el tamaño del texto cuando el contenido cambie
                ajustarTamanioTexto(mutation.target);
            }
        });
    });

    // Configurar el MutationObserver para observar cambios en el contenido y la estructura
    var observerConfig = { characterData: true, subtree: true, childList: true };

    // Agregar el MutationObserver a cada elemento con la clase 'pais'
    paises.forEach(function (pais) {
        observer.observe(pais, observerConfig);
    });
});




function comprobarAnchoApp() {
    return document.documentElement.clientWidth;
}

// Función para ajustar el tamaño del texto
function ajustarTamanioTexto() {
    // Definir un tamaño base y un factor de reducción
    var tamanoBase;
    var factorReduccion;

    var ancho = comprobarAnchoApp();
    
    if (ancho > 600) {
        tamanoBase = 3; // Puedes ajustar esto según tus necesidades
        factorReduccion = 0.1; // Puedes ajustar esto según tus necesidades
    } else {
        tamanoBase = 6; // Puedes ajustar esto según tus necesidades
        factorReduccion = 0.3; // Puedes ajustar esto según tus necesidades
    }

    // Obtener la longitud del texto
    var elementosPais = document.getElementsByClassName("pais");

    // Iterar sobre los elementos con la clase "pais"
    for (var i = 0; i < elementosPais.length; i++) {
        var longitudTexto = elementosPais[i].textContent.length;

        // Calcular el tamaño de la fuente en función de la longitud del texto
        if (longitudTexto > 15) {
            letrasDeMas = longitudTexto - 15;
            var tamanoFuente = tamanoBase - factorReduccion * letrasDeMas;
        } else {
            tamanoFuente = tamanoBase;
        }

        // Aplicar el tamaño de la fuente al elemento
        elementosPais[i].style.fontSize = tamanoFuente + 'vw';
    }
}

// Llamar a ajustarTamanioTexto al cargar la página
window.addEventListener('load', ajustarTamanioTexto);

// Llamar a ajustarTamanioTexto cada vez que la ventana se redimensiona
window.addEventListener('resize', ajustarTamanioTexto);





// AGREGA FUNCIONALIDAD A LA TECLA ENTER
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos de tipo radio
    var radioButtons = document.querySelectorAll("input[type='radio']");

    // Agrega un evento de escucha para la tecla 'Enter' en todo el documento
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // Encuentra ambos botones
            var button1 = document.getElementById('solve');
            var button2 = document.getElementById('next');

            // Hace clic en el primer botón no deshabilitado
            if (button1 && !button1.disabled) {
                button1.click();
            } else if (button2 && !button2.disabled) {
                button2.click();
            }
        }
    });
});





function score(contadorAciertos) {
    let scoreOutOfTen = contadorAciertos + ' / 10';
    document.getElementById('score').innerHTML = scoreOutOfTen;

    if (contadorAciertos === 10) {
        const confetti = new JSConfetti();
        confetti.addConfetti();
    }
}



// LAS 193 BANDERAS ASOCIADAS AL NOMBRE DE SU PAIS
let fullFlagDictionary = {
    '../img/afghanistan.svg': 'Afghanistan',
    '../img/albania.svg': 'Albania',
    '../img/algeria.svg': 'Algeria',
    '../img/andorra.svg': 'Andorra',
    '../img/angola.svg': 'Angola',
    '../img/antigua-and-barbuda.svg': 'Antigua and Barbuda',
    '../img/argentina.svg': 'Argentina',
    '../img/armenia.svg': 'Armenia',
    '../img/australia.svg': 'Australia',
    '../img/austria.svg': 'Austria',
    '../img/azerbaijan.svg': 'Azerbaijan',
    '../img/bahamas.svg': 'Bahamas',
    '../img/bahrain.svg': 'Bahrain',
    '../img/bangladesh.svg': 'Bangladesh',
    '../img/barbados.svg': 'Barbados',
    '../img/belarus.svg': 'Belarus',
    '../img/belgium.svg': 'Belgium',
    '../img/belize.svg': 'Belize',
    '../img/benin.svg': 'Benin',
    '../img/bhutan.svg': 'Bhutan',
    '../img/bolivia.svg': 'Bolivia',
    '../img/bosnia-and-herzegovina.svg': 'Bosnia and Herzegovina',
    '../img/botswana.svg': 'Botswana',
    '../img/brazil.svg': 'Brazil',
    '../img/brunei.svg': 'Brunei',
    '../img/bulgaria.svg': 'Bulgaria',
    '../img/burkina-faso.svg': 'Burkina Faso',
    '../img/burundi.svg': 'Burundi',    
    '../img/cabo-verde.svg': 'Cabo Verde',
    '../img/cambodia.svg': 'Cambodia',
    '../img/cameroon.svg': 'Cameroon',
    '../img/canada.svg': 'Canada',
    '../img/central-african-republic.svg': 'Central African Republic',
    '../img/chad.svg': 'Chad',
    '../img/chile.svg': 'Chile',
    '../img/china.svg': 'China',
    '../img/colombia.svg': 'Colombia',
    '../img/comoros.svg': 'Comoros',
    '../img/congo.svg': 'Congo',
    '../img/costa-rica.svg': 'Costa Rica',
    '../img/croatia.svg': 'Croatia',
    '../img/cuba.svg': 'Cuba',
    '../img/cyprus.svg': 'Cyprus',
    '../img/czech-republic.svg': 'Czech Republic',
    '../img/denmark.svg': 'Denmark',
    '../img/djibouti.svg': 'Djibouti',
    '../img/dominica.svg': 'Dominica',
    '../img/dominican-republic.svg': 'Dominican Republic',
    '../img/dr-congo.svg': 'DR Congo',
    '../img/ecuador.svg': 'Ecuador',
    '../img/egypt.svg': 'Egypt',
    '../img/el-salvador.svg': 'El Salvador',
    '../img/equatorial-guinea.svg': 'Equatorial Guinea',
    '../img/eritrea.svg': 'Eritrea',
    '../img/estonia.svg': 'Estonia',
    '../img/eswatini.svg': 'Eswatini',
    '../img/ethiopia.svg': 'Ethiopia',
    '../img/fiji.svg': 'Fiji',
    '../img/finland.svg': 'Finland',
    '../img/france.svg': 'France',
    '../img/gabon.svg': 'Gabon',
    '../img/gambia.svg': 'Gambia',
    '../img/georgia.svg': 'Georgia',
    '../img/germany.svg': 'Germany',
    '../img/ghana.svg': 'Ghana',
    '../img/greece.svg': 'Greece',
    '../img/grenada.svg': 'Grenada',
    '../img/guatemala.svg': 'Guatemala',
    '../img/guinea.svg': 'Guinea',
    '../img/guinea-bissau.svg': 'Guinea-Bissau',
    '../img/guyana.svg': 'Guyana',
    '../img/haiti.svg': 'Haiti',
    '../img/honduras.svg': 'Honduras',
    '../img/hungary.svg': 'Hungary',
    '../img/iceland.svg': 'Iceland',
    '../img/india.svg': 'India',
    '../img/indonesia.svg': 'Indonesia',
    '../img/iran.svg': 'Iran',
    '../img/iraq.svg': 'Iraq',
    '../img/ireland.svg': 'Ireland',
    '../img/israel.svg': 'Israel',
    '../img/italy.svg': 'Italy',
    '../img/ivory-coast.svg': 'Ivory Coast',
    '../img/jamaica.svg': 'Jamaica',
    '../img/japan.svg': 'Japan',
    '../img/jordan.svg': 'Jordan',
    '../img/kazakhstan.svg': 'Kazakhstan',
    '../img/kenya.svg': 'Kenya',
    '../img/kiribati.svg': 'Kiribati',
    '../img/kuwait.svg': 'Kuwait',
    '../img/kyrgyzstan.svg': 'Kyrgyzstan',
    '../img/laos.svg': 'Laos',
    '../img/latvia.svg': 'Latvia',
    '../img/lebanon.svg': 'Lebanon',
    '../img/lesotho.svg': 'Lesotho',
    '../img/liberia.svg': 'Liberia',
    '../img/libya.svg': 'Libya',
    '../img/liechtenstein.svg': 'Liechtenstein',
    '../img/lithuania.svg': 'Lithuania',
    '../img/luxembourg.svg': 'Luxembourg',
    '../img/madagascar.svg': 'Madagascar',
    '../img/malawi.svg': 'Malawi',
    '../img/malaysia.svg': 'Malaysia',
    '../img/maldives.svg': 'Maldives',
    '../img/mali.svg': 'Mali',
    '../img/malta.svg': 'Malta',
    '../img/marshall-islands.svg': 'Marshall Islands',
    '../img/mauritania.svg': 'Mauritania',
    '../img/mauritius.svg': 'Mauritius',
    '../img/mexico.svg': 'Mexico',
    '../img/micronesia.svg': 'Micronesia',
    '../img/moldova.svg': 'Moldova',
    '../img/monaco.svg': 'Monaco',
    '../img/mongolia.svg': 'Mongolia',
    '../img/montenegro.svg': 'Montenegro',
    '../img/morocco.svg': 'Morocco',
    '../img/mozambique.svg': 'Mozambique',
    '../img/myanmar.svg': 'Myanmar',
    '../img/namibia.svg': 'Namibia',
    '../img/nauru.svg': 'Nauru',
    '../img/nepal.svg': 'Nepal',
    '../img/netherlands.svg': 'Netherlands',
    '../img/new-zealand.svg': 'New Zealand',
    '../img/nicaragua.svg': 'Nicaragua',
    '../img/niger.svg': 'Niger',
    '../img/nigeria.svg': 'Nigeria',
    '../img/north-korea.svg': 'North Korea',
    '../img/north-macedonia.svg': 'North Macedonia',
    '../img/norway.svg': 'Norway',
    '../img/oman.svg': 'Oman',
    '../img/pakistan.svg': 'Pakistan',
    '../img/palau.svg': 'Palau',
    '../img/panama.svg': 'Panama',
    '../img/papua-new-guinea.svg': 'Papua New Guinea',
    '../img/paraguay.svg': 'Paraguay',
    '../img/peru.svg': 'Peru',
    '../img/philippines.svg': 'Philippines',
    '../img/poland.svg': 'Poland',
    '../img/portugal.svg': 'Portugal',
    '../img/qatar.svg': 'Qatar',
    '../img/romania.svg': 'Romania',
    '../img/russia.svg': 'Russia',
    '../img/rwanda.svg': 'Rwanda',
    '../img/saint-kitts-and-nevis.svg': 'Saint Kitts and Nevis',
    '../img/saint-lucia.svg': 'Saint Lucia',    
    '../img/samoa.svg': 'Samoa',
    '../img/san-marino.svg': 'San Marino',
    '../img/sao-tome-and-principe.svg': 'Sao Tome and Principe',
    '../img/saudi-arabia.svg': 'Saudi Arabia',
    '../img/senegal.svg': 'Senegal',
    '../img/serbia.svg': 'Serbia',
    '../img/seychelles.svg': 'Seychelles',
    '../img/sierra-leone.svg': 'Sierra Leone',
    '../img/singapore.svg': 'Singapore',
    '../img/slovakia.svg': 'Slovakia',
    '../img/slovenia.svg': 'Slovenia',
    '../img/solomon-islands.svg': 'Solomon Islands',
    '../img/somalia.svg': 'Somalia',
    '../img/south-africa.svg': 'South Africa',
    '../img/south-korea.svg': 'South Korea',
    '../img/south-sudan.svg': 'South Sudan',
    '../img/spain.svg': 'Spain',
    '../img/sri-lanka.svg': 'Sri Lanka',
    '../img/saint-vincent-and-grenadines.svg': 'St. Vincent & Grenadines',
    '../img/sudan.svg': 'Sudan',
    '../img/suriname.svg': 'Suriname',
    '../img/sweden.svg': 'Sweden',
    '../img/switzerland.svg': 'Switzerland',
    '../img/syria.svg': 'Syria',
    '../img/tajikistan.svg': 'Tajikistan',
    '../img/tanzania.svg': 'Tanzania',
    '../img/thailand.svg': 'Thailand',
    '../img/timor-leste.svg': 'Timor-Leste',
    '../img/togo.svg': 'Togo',
    '../img/tonga.svg': 'Tonga',
    '../img/trinidad-and-tobago.svg': 'Trinidad and Tobago',
    '../img/tunisia.svg': 'Tunisia',
    '../img/turkey.svg': 'Turkey',
    '../img/turkmenistan.svg': 'Turkmenistan',
    '../img/tuvalu.svg': 'Tuvalu',
    '../img/uganda.svg': 'Uganda',
    '../img/ukraine.svg': 'Ukraine',
    '../img/united-arab-emirates.svg': 'United Arab Emirates',
    '../img/united-kingdom.svg': 'United Kingdom',
    '../img/united-states.svg': 'United States',
    '../img/uruguay.svg': 'Uruguay',
    '../img/uzbekistan.svg': 'Uzbekistan',
    '../img/vanuatu.svg': 'Vanuatu',
    '../img/vatican-city.svg' : 'Vatican City',
    '../img/venezuela.svg': 'Venezuela',
    '../img/vietnam.svg': 'Vietnam',
    '../img/yemen.svg': 'Yemen',
    '../img/zambia.svg': 'Zambia',
    '../img/zimbabwe.svg': 'Zimbabwe',  
};





let dictionary10 = getRandomElements(fullFlagDictionary, 10);
let flag10 = Object.keys(dictionary10);
let countries10 = Object.values(dictionary10);

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') { // ' ' representa la tecla de espacio
        if (window.location.pathname.endsWith('guess-the-flag/')) {
            window.location.href = '/guess-the-flag/html/flags.html';
        } else if (window.location.pathname.endsWith('score.html')) {
            window.location.href = 'flags.html'; 
        }
    }
});

if (window.location.href.includes('flags.html')) {
    // PONE BANDERA Y PAIS EN UNA POSICION RANDOM DE 1 A 3 CUANDO SE CARGA LA PAGINA FLAGS.HTML
    var opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
    var opcionCorrecta = document.getElementById('opcion' + opcionCorrectaNum);
    var flag = document.getElementsByClassName('flag')[0];
    document.addEventListener('DOMContentLoaded', function() {
        flag.src = flag10[0];
        opcionCorrecta.innerHTML = countries10[0];
    });
    // PONE LOS PAISES INCORRECTOS EN LOS 2 LABELS RESTANTES
    do {
        var random1 = getRandomCountry();
        var random2 = getRandomCountry();
    } while (random1 == countries10[0] || random2 == countries10[0] || random2 == random1);

    if (opcionCorrectaNum === 1) {
        document.getElementById('opcion2').innerHTML = random1;
        document.getElementById('opcion3').innerHTML = random2;
    } else if (opcionCorrectaNum === 2) {
        document.getElementById('opcion1').innerHTML = random1;
        document.getElementById('opcion3').innerHTML = random2;
    } else {
        document.getElementById('opcion1').innerHTML = random1;
        document.getElementById('opcion2').innerHTML = random2;
    }

    // ASIGNA EL RADIO BUTTON CORRECTO
    var radioButtonCorrecto = document.getElementById('radio' + opcionCorrectaNum);
}


var flag_no = 0;

var contadorAciertos = 0;

let currentIndex = 0;

const radioButtons = document.querySelectorAll("input[name='pais']");
const solveButton = document.getElementById('solve');
const nextButton = document.getElementById('next');

if (window.location.href.includes('flags.html')) {
    // PONE EN NARANJA EL PROGRES NUMBER DE LA BANDERA NUMERO 1
    document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid rgba(255, 165, 0, 0.6)';
    document.getElementsByClassName('progress_number')[flag_no].style.color = 'rgba(255, 165, 0, 0.6)';


    solveButton.addEventListener('click', function() {
        let isChecked = false;
        let selectedRadioButton = null;

        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked) {
                isChecked = true;
                selectedRadioButton = radioButton;
            }
        });

        if (isChecked) {
            solveButton.disabled = true;
            solveButton.style.display = 'none';
            nextButton.disabled = false;
            nextButton.style.display = 'block';
                   
            // COLOREA EL PROGRESS NUMBER DE LA BARRA DE ABAJO SEGUN SI ACIERTA O FALLA
            if (selectedRadioButton.id !== 'radio' + opcionCorrectaNum) {
                selectedRadioButton.style.backgroundColor = 'rgba(255, 0, 0, .8';
                document.getElementById('radio' + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName('progress_number')[flag_no].style.backgroundColor = 'rgba(255, 0, 0, .8';
                document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid white';
                document.getElementsByClassName('progress_number')[flag_no].style.color = 'white';                
            } else {
                document.getElementById('radio' + opcionCorrectaNum).style.backgroundColor = '#4ec85a';
                document.getElementsByClassName('progress_number')[flag_no].style.backgroundColor = '#4ec85a'
                document.getElementsByClassName('progress_number')[flag_no].style.border = '.3vw solid white';
                document.getElementsByClassName('progress_number')[flag_no].style.color = 'white';               
                contadorAciertos++;
                // Después de incrementar contadorAciertos en script.js
                localStorage.setItem('contadorAciertos', contadorAciertos);
            }

            [...radioButtons].forEach(function(radioButton) {
                radioButton.disabled = true;
            });
            
            if (flag_no == 9) {
                nextButton.innerHTML = 'Finish'            
            }
        }
    });


    nextButton.addEventListener('click', function() {
        if (flag_no == 9) {
            window.location.href = 'score.html';
        } else {
            // PONE EN NARANJA EL PROGRES NUMBER DE LA BANDERA ACTUAL
            document.getElementsByClassName('progress_number')[flag_no + 1].style.border = '.3vw solid rgba(255, 165, 0, 0.6)';
            document.getElementsByClassName('progress_number')[flag_no + 1].style.color = 'rgba(255, 165, 0, 0.6)';

            flag_no++;

            // BORRA LOS LABEL ANTERIORES
            document.getElementById('opcion1').innerHTML = '';
            document.getElementById('opcion2').innerHTML = '';
            document.getElementById('opcion3').innerHTML = '';

            // PONE EL PAIS CORRECTO EN UN LABEL RANDOM DE 1 A 3
            opcionCorrectaNum = Math.floor(Math.random() * 3) + 1;
            opcionCorrecta = document.getElementById('opcion' + opcionCorrectaNum);
            opcionCorrecta.innerHTML = countries10[flag_no];

            // PONE LOS PAISES INCORRECTOS EN LOS 2 LABELS RESTANTES
            do {
                random1 = getRandomCountry();
                random2 = getRandomCountry();
            } while (random1 == countries10[flag_no] || random2 == countries10[flag_no] || random2 == random1);

            if (opcionCorrectaNum === 1) {
                document.getElementById('opcion2').innerHTML = random1;
                document.getElementById('opcion3').innerHTML = random2;
            } else if (opcionCorrectaNum === 2) {
                document.getElementById('opcion1').innerHTML = random1;
                document.getElementById('opcion3').innerHTML = random2;
            } else if (opcionCorrectaNum === 3) {
                document.getElementById('opcion1').innerHTML = random1;
                document.getElementById('opcion2').innerHTML = random2;
            }

            // REASIGNA EL RADIO BUTTON CORRECTO
            radioButtonCorrecto = document.getElementById('radio' + opcionCorrectaNum);

            solveButton.disabled = false;
            solveButton.style.display = 'block';
            nextButton.disabled = true;
            nextButton.style.display = 'none';

            // PONE BANDERA
            const flagElement = document.querySelector('.flag');
            if (flagElement) {
                currentIndex = (currentIndex + 1) % flag10.length;
                flagElement.src = flag10[currentIndex];
            }

            const radioButtons = document.querySelectorAll("input[type='radio']");
            radioButtons.forEach(function(radioButton) {
                radioButton.style.backgroundColor = '';

                // Agregar evento change para restablecer el fondo cuando se selecciona un botón de radio
                radioButton.addEventListener('change', function() {
                    if (radioButton.checked) {
                        radioButton.style.backgroundColor = ''; // Esto restablece el fondo al valor predeterminado
                    }
                });
            });

            [...radioButtons].forEach(function(radioButton) {
                radioButton.disabled = false;
                radioButton.checked = false;
            }); 
        }
    });
}



// CONTROLADOR DEL TAB
// Obtén todos los elementos con el atributo tabindex
const elementosEnfocables = document.querySelectorAll('[tabindex]');

// Convierte la lista de nodos en un array para facilitar el manejo
const elementosArray = Array.from(elementosEnfocables);




// Agrega un controlador de eventos para el evento focus a cada radio button
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('focus', function() {
        // Selecciona el radio button actual cuando tiene el foco
        this.checked = true;
    });
});

// Agrega un controlador de eventos para prevenir el comportamiento predeterminado del tabulado
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        // Obtén el elemento que actualmente tiene el foco
        const elementoConFoco = document.activeElement;

        // Obtén el índice del elemento actual en el array de elementos enfocables
        const indice = elementosArray.indexOf(elementoConFoco);

        // Encuentra el próximo elemento enfocable en el array
        let siguienteElemento;
        if (event.shiftKey) {
            // Si se presiona Shift + Tab, mueve al elemento anterior
            siguienteElemento = elementosArray[indice - 1];
        } else {
            // Si solo se presiona Tab, mueve al siguiente elemento
            siguienteElemento = elementosArray[indice + 1];
        }

        // Si no hay siguiente elemento, vuelve al primer elemento enfocable
        if (!siguienteElemento) {
            siguienteElemento = elementosArray[event.shiftKey ? elementosArray.length - 1 : 0];
        }

        // Establece el foco en el siguiente elemento
        siguienteElemento.focus();

        // Previene el comportamiento predeterminado del tabulado
        event.preventDefault();
    }
});



