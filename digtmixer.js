/*
    Idéer:
    Lav forskellige ordlister, og slides man kan skrue på for at justere hvor meget fra hver der skal pickes, 
    eks: dyster, space, varm, natur, industriel, apatisk. 
    Eller bare to modes: Romantisk og Rum-antisk

    Lav det til en haiku generator
*/

(function () {
    const fontFamilies = [
        'Indie Flower',
        'Amatic SC',
        // 'Pacifico',
        // 'Inconsolata',
        // 'Caveat Brush',
        // 'Dancing Script',
        // 'Shadows Into Light',
        'Roboto Mono',
        // 'Gloria Hallelujah', men måske aligevel
        // 'Source Code Pro',
        // 'Satisfy',
        // 'Courgette',
        // 'Cookie',
        'Great Vibes',
        'Space Mono',
        'Homemade Apple',
        'Sacramento',
        'VT323',
        'Allura',
        'Pinyon Script',
        'Reenie Beanie',
        'Walter Turncoat'
    ];

    let adjectives = [
        'falleret',
        'falmende',
        'famlende',
        'finurlig',
        'flygtig',
        'forbigående',
        'forfløjen',
        'forkert',
        'fragmenteret',
        'galaktisk',
        'hungrende',
        'kold',
        'konform',
        'langsom',
        'lilla',
        'luftig',
        'opgivende',
        'oprigtig',
        'resonerende',
        'sidste',
        'stille',
        'sårbar',
        'søvnig',
        'trist',
        'tøvende',
        'unaturlig',
        'varm',
        'varsom'
        // 'eksalteret',
        // 'ophøjet',
        // 'ublu',
        // 'smuk',
        // 'lykkelig'
    ];

    let en = [
        'dans',
        'drømmefanger',
        'elsker',
        'eng',
        'fabrik',
        'firewall',
        'hugtand',
        'koldsved',
        'kongeørn',
        'mejse',
        'opera',
        'planet',
        'plante',
        'regnbue',
        'solstråle',
        'stund',
        'tanke',
        'tiger',
        'torden',
        'tåge',
        'vandrer',
        'venten'
    ];

    let et = [
        'blik',
        'digt',
        'håb',
        'omsvøb',
        'sind',
        'vers',
        'ønske'
    ];

    let start = null;
    const adjectivesFull = adjectives.slice(),
        enFull = en.slice();

    function pickElement(array) {
        let index = Math.round(Math.random() * (array.length - 1));
        let element = array[index];
        array.splice(index, 1); // remove picked element from array
        return element;
    }

    function getElement(array) {
        let index = Math.round(Math.random() * (array.length - 1));
        console.log('selected: ' + array[index]);
        return array[index];
    }

    function createPoem() {
        let poem = '',
            poemLength = getElement([ 3]);

        for(let i = 0; i < poemLength; i++) {
            let adjective = pickElement(adjectives),
                noun = pickElement(en);            

            if (!adjective) {
                adjectives = adjectivesFull.slice();
                adjective = pickElement(adjectives);
            }
            if (!noun) {
                en = enFull.slice();
                noun = pickElement(en);
            }
            poem += 'en ' + adjective + ' ' + noun + '<br/>';
        }
        return poem;
    }

    function animate(timestamp) {
        if (!start) start = timestamp;
        var interval = timestamp - start;
        if (interval > 7000) {
            start = timestamp;
            let poemNode = document.getElementById('digt');
            poemNode.innerHTML = createPoem();
            poemNode.style.fontFamily = getElement(fontFamilies);
        }
        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
}());
