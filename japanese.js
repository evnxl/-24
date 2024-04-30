let vocab = ["元気？", "ありがとう", "ごめん", "うん", "ううん", "大丈夫？", "やっほー", "いいよ", "疲れた", "眠い", "暑い", "めっちゃ暑い", "寒い", "いいね", "本当？", "よかったね", "ちょっとだけ", "気にしないで", "わっかた", "分からない","待って","何で？","私も","行こう","一緒にいこう","どうしたの？","何？","ありえない","信じられない","それで？"];
let definition = ["how are you?", "thank you", "sorry", "yes", "no", "are you ok?", "hi", "sure", "i'm tired", "i'm sleepy", "it's hot", "it's very hot", "it's cold", "nice", "really?", "good for you", "just a little bit", "don't worry", "i understand","i don't understand","wait","why?","me too","let's go","let's go together","what's wrong?","what?","no way","i can't believe it","and?"];
let romaji = ["genki", "arigatou", "gomen", "un", "uun", "daijoubu", "yahho", "iiyo", "tsukareta", "nemui", "atsui", "meccha atsui", "samui", "iine", "honto", "yokattane", "chottodate", "kinishinaide", "wakatta","wakaranai","matte","nande","watashimo","ikou","isshoni ikou","doushitano","nani","arienai","shinjirarenai","sorede"];

let current_word = 0;

function set_currentword() {
    current_word = Math.floor(Math.random() * vocab.length);
}

function display_word(index) {
    document.getElementById("text").innerHTML = vocab[index];
}

function display_vocab(index) {
    set_currentword();
    display_word(current_word);
}

function submit() {
    let text;
    let romaji = prompt("Enter romaji")
    if(romaji == null || romaji == "") {
        text = display_word(current_word);
    } else {
        text = display_romaji(current_word);
    }
}

function display_romaji(v) {
    for (i=0; i < vocab.length; i ++){
    if (v == vocab[i]){
    return romaji[i];
    }
}
    document.getElementById("text").innerHTML = romaji[v];
}

function hint(){
    display_def(current_word);
}

function display_def(d) {
    for (i=0; i < vocab.length; i ++){
    if (d == vocab[i]){
    return definition[i];
    }
}
    document.getElementById("text").innerHTML = definition[d];
}
