angular
    .module('onefootball.components.filters.cyrillic2latin', [])
    .filter('cyrillic2latin', cyrillic2latin);

function cyrillic2latin() {
    return function (input) {
        var a = {
            "Ё": "YO",
            "Й": "I",
            "Ц": "TS",
            "У": "U",
            "К": "K",
            "Е": "E",
            "Н": "N",
            "Г": "G",
            "Ш": "SH",
            "Щ": "SCH",
            "З": "Z",
            "Х": "H",
            "Ъ": "'",
            "ё": "yo",
            "й": "i",
            "ц": "ts",
            "у": "u",
            "к": "k",
            "е": "e",
            "н": "n",
            "г": "g",
            "ш": "sh",
            "щ": "sch",
            "з": "z",
            "х": "h",
            "ъ": "'",
            "Ф": "F",
            "Ы": "I",
            "В": "V",
            "А": "a",
            "П": "P",
            "Р": "R",
            "О": "O",
            "Л": "L",
            "Д": "D",
            "Ж": "ZH",
            "Э": "E",
            "ф": "f",
            "ы": "i",
            "в": "v",
            "а": "a",
            "п": "p",
            "р": "r",
            "о": "o",
            "л": "l",
            "д": "d",
            "ж": "zh",
            "э": "e",
            "Я": "Ya",
            "Ч": "CH",
            "С": "S",
            "М": "M",
            "И": "I",
            "Т": "T",
            "Ь": "'",
            "Б": "B",
            "Ю": "YU",
            "я": "ya",
            "ч": "ch",
            "с": "s",
            "м": "m",
            "и": "i",
            "т": "t",
            "ь": "'",
            "б": "b",
            "ю": "yu"
        };
        return input.split('').map(function (char) {
            return a[char] || char;
        }).join("");
    };
}
