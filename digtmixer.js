(function () {
    const adjectives = [
        'absolut',
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
        'varsom',
        // 'eksalteret',
        // 'falleret',
        // 'ophøjet',
        // 'ublu',
    ];

    const en = [
        'dans',
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
        'stødpude',
        'tanke',
        'tiger',
        'torden',
        'tåge',
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

    if (adjectives.length !== en.length + et.length) {
        console.error('mismatch word arrays (' + adjectives.length + ' != ' + (et.length + en.length) + ')');
        return;
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
