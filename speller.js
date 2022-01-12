
function spellcheck(text){
    const arr = [
"a",
"a / e",
"ab",
"aba",
"abaci",
"abacilik",
"abadi",
"aba guresi",
"abajur",
"abajurcu",
"abajurculuk",
"abajurlu",
"abajursuz",
"abakus",
"abali",
"Abana",
"abanabilme",
"abanabilmek",
"abandirabilme",
"abandirabilmek",
"abandiriverme",
"abandirivermek",
"abandirma",
"abandirmak",
"abandone",
"abanis",
"abaniverme",
"abanivermek",
"abani",
"abanma",
"abanmak",
"abanoz",
"abanozgiller",
"abanozlasiverme",
"abanozlasivermek",
"abanozlasma",
"abanozlasmak",
"abanozlastirabilme",
"abanozlastirabilmek"

];

///let  text = "yonetsea";
let result = arr.map(function(row, index){
    var res;
    if(row.trim() == text.trim()){
        return true;
    }else {
        return false;      
    }
});
if (result.includes(true)){
    return true;
}else {
        const apr = [];
        let suggestions = [];
        arr.forEach(function(row, index){
            let x = row.split("");
            let swing = text.trim();
            let y = swing.split("");
            let per = row.length;/// this means whole
            let range = 0; /// this is going to show how much letters gonna match
            x.forEach(function(b, index){
                 if(b == y[index]){
                     range += 1;
                 }
            });
            let data = [
                (per / range), 
                row
            ];
            apr.push(data); 
        });
        let list = apr.sort(function(a,b){
            return a-b;
        });
        let similars = [];
        list.forEach(function(row, index){
        if(row[0] <= 1.3){
            similars.push(row[1]);
        }
        });
        return similars;
}
}
