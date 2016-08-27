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
    'eksalteret',
    'falleret',
    'sårbar',
    'trist',
    'varsom',
    'varm',
    'lilla',
    'galaktisk'
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
];

const et = [
    'digt',
    'håb',
    'blik',
    'omsvøb',
    'ønske',
    'sind',
    'vers',
];

$(() => {
    function pick(array) {
        let index = Math.round(Math.random() * (array.length - 1));
        console.log(index)
        console.log(array[index]);
        return array[index];
    }

    if (adjectives.length !== en.length + et.length) {
        console.error('mismatch word arrays (' + adjectives.length + ' != ' + (et.length + en.length) + ')');
        return;
    }

    let poem = '';
    for (let i = 0; i < 210; i++) {
        poem += 'en ' + pick(adjectives) + ' ' + pick(en) + ' <br>';
    }

    $('#digt').append(poem)
});
