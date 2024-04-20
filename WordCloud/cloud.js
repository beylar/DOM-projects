var paragraph = document.getElementById("myParagraph")
paragraph =  paragraph.innerText.toLowerCase().split(/[\s.,:]+/)
console.log(paragraph)

var uniqueWordsInParagraph = [...new Set(paragraph)]
var result = [];

function searching(){
    for (let j=0; j<uniqueWordsInParagraph.length; i++){
        if(uniqueWordsInParagraph[j] === w)
        wordCount();
    }
}

function wordCount(word){
    let count = 0;
    for(let i=0; i<paragraph.length; i++ ){
        if(paragraph[i] === word){
            count ++;
        }
    }
    return count;
}

result = function(a,b){

}