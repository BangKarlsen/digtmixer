/*
    Idéer:
    Lav forskellige ordlister, og slides man kan skrue på for at justere hvor meget fra hver der skal pickes, 
    eks: dyster, space, varm, natur, industriel, apatisk
*/

(function () {
    const adjectives = [
        'absolut',
        'falleret',
        'falmende',
        'finurlig',
        'flygtig',
        'forbigående',
        'forfløjen',
        'forkert',
        'fragmenteret',
        'galaktisk',
        'hungrende',
        'kold',
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

    const en = [
        'dans',
        'drømmefanger',
        'elsker',
        'eng',
        'fabrik',
        'koldsved',
        'kongeørn',
        'mejse',
        'opera',
        'planet',
        'plante',
        'regnbue',
        'solstråle',
        'stund',
        'stødpude',
        'tanke',
        'tiger',
        'torden',
        'tåge',
        'vandrer',
        'venten'
    ];

    const et = [
        'blik',
        'digt',
        'håb',
        'omsvøb',
        'sind',
        'vers',
        'ønske'
    ];

    function pickFrom(words) {
        let index = Math.round(Math.random() * (words.length - 1));
        let word = words[index];
        words.splice(index, 1); // remove picked word from array
        return word;
    }

    let poem = '',
        adjective = pickFrom(adjectives),
        noun = pickFrom(en);

    while (adjective && noun) {
        poem += 'en ' + adjective + ' ' + noun + ' <br>';
        adjective = pickFrom(adjectives);
        noun = pickFrom(en);
    }

    document.getElementById('digt').innerHTML = poem;
}());
