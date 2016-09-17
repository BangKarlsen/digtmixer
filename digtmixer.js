const adjectives = [
    'søvnig',
    'stille',
    'kold',
    'tøvende',
    'langsom',
    'finurlig',
    'sidste',
    'unaturlig',
    'opgivende',
    'flygtig',
    'forkert',
    'forbigående',
    'oprigtig',
    'falmende',
    'absolut',
    'resonerende',
    // 'eksalteret',
    // 'falleret',
    // 'ophøjet',
    // 'ublu',
    'sårbar',
    'trist',
    'varsom',
    'varm',
    'lilla',
    'galaktisk',
    'hungrende',
    'luftig',
    'fragmenteret',
    'forfløjen'
];

const en = [
    'opera',
    'mejse',
    'solstråle',
    'elsker',
    'fabrik',
    'plante',
    'venten',
    'regnbue',
    'torden',
    'dans',
    'koldsved',
    'tiger',
    'tåge',
    'eng',
    'planet',
    'tanke',
    'kongeørn',
    'fabrik',
    'stødpude'
];

const et = [
    'digt',
    'håb',
    'blik',
    'omsvøb',
    'ønske',
    'sind',
    'vers'
];


$(() => {
    function pick(words) {
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
        adjective = pick(adjectives),
        noun = pick(en);

    while (adjective && noun) {
        poem += 'en ' + adjective + ' ' + noun + ' <br>';
        adjective = pick(adjectives);
        noun = pick(en);
    }

    $('#digt').append(poem)
});
