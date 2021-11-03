
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["am","em","im","om","um","de","curso","para","a","e","i","o","u","as","es","is","os","us","são","ao","de", "dos", "das", "dum", "duns", "duma", "dumas", "em", "no", "na", "da", "do", "nos", "nas", "num", "numa", "nuns", "numas", "à", "às", "por", "pelo", "pela", "deles", "delas", "dele", "dela", "destes", "destas", "deste", "desta", "disto", "neste", "nesta", "nestes", "nestas", "nisto", "nesses", "nessas", "nesse", "nessa", "nisto", "naquilo", "àquele", "àquela", "àquilo", "ante", "perante", "após", "até", "com", "contra", "desde", "entre", "para", "sem", "sob", "sobre", "trás", "atrás", "dentro", "ao", "pra", "o", "a", "os", "as", "um", "uma", "uns", "umas", "Os", "As", "Uma", "Uns", "Umas", "Um", "e", "é", " ", "nem", "mas", "também", "porém", "contudo", "todavia", "entretanto", "ou", "já", "quer", "logo", "pois", "portanto", "se", "porque", "modo", "conforme", "como", "embora", "bem", "que", "mesmo", "ainda", "quando", "antes", "ainda", "agora", "amanhã", "anteontem", "tarde", "bastante", "muito", "pouco", "menos", "mais", "apenas", "todo", "demasiadamente", "abaixo", "acima", "dentro", "fora", "aqui", "ali", "atrás", "lá", "acolá", "adiante", "bem", "mal", "depressa", "sim", "certamente", "efetivamente", "realmente", "hoje", "nem", "nunca", "tampouco", "jamais", "não", "olá", "oi", "ai", "ui", "ops", "oxalá", "tomara", "eita", "atenção", "nossa", "oh", "uh", "ué", "adeus", "até", "logo", "olá", "alô", "hei", "ufa", "ah", "vamos", "oba", "viva", "olé", "iupi", "xô", "ô", "psiu", "psit", "hurra", "viva", "pudera", "hum", "hein", "tchau", "adeus", "hã", "eia", "avante", "puxa", "uai"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'enfermagen', 'replace_with': 'enfermagem'},
     {'word': 'urgencia', 'replace_with': 'urgência'},
     {'word': 'emergencia', 'replace_with': 'emergência'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'Sem titulo';
var tipuesearch_string_2 = 'Exibindo resultados para';
var tipuesearch_string_3 = 'Em vez de';
var tipuesearch_string_4 = '1 resultado';
var tipuesearch_string_5 = 'resultados encontrados';
var tipuesearch_string_6 = 'Voltar';
var tipuesearch_string_7 = 'Prosseguir';
var tipuesearch_string_8 = 'Nenhum resultado encontrado';
var tipuesearch_string_9 = 'Palavras comuns são ignoradas';
var tipuesearch_string_10 = 'Pesquisar muito curta';
var tipuesearch_string_11 = 'Deve ser um personagem ou mais';
var tipuesearch_string_12 = 'Insira no mínimo';
var tipuesearch_string_13 = 'caracteres';
