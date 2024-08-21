
let codeSamples = document.getElementsByClassName("codeSample");

const KEYWORDS_LIST = ["new", "public", "private", "int", "bool", "string", "float", "class", "var", "get", "set", "return"];

console.log("Start");

let stringLiteralRegex = /".*"/g;
let classNameRegex = /(?<=(class|new) )(\w+)( |{|\()/g;
let functionalKeywordRegex = /(?<=\s)(for|return|if)(?=\W)/g;
let keywordRegex = /(?<!(<.>))(public|private|class|int|get|set)(?=\W)(?!(<\/.>))/g;
let functionNameRegex = /(\w+)(?=(\(.*\) ?{))/gi;
let organizersRegex = /{|}|\(|\)|[|]/g;
let commentsRegex = /\/\/.+/g

for(let i = 0; i < codeSamples.length; ++i){

    let codeSample = codeSamples[i];
    let codeText = codeSample.textContent;
    
    //Order of operations matters here, since the spliced in text can influence the matches of subsequent RegExs
    let newHtml = codeText.replaceAll(stringLiteralRegex, "<strLit>$&</strLit>");
    newHtml = newHtml.replaceAll(classNameRegex, "<clsNm>$&</clsNm>");
    newHtml = newHtml.replaceAll(functionalKeywordRegex, "<fkw>$&</fkw>");
    newHtml = newHtml.replaceAll(keywordRegex, "<kw>$&</kw>");
    newHtml = newHtml.replaceAll(functionNameRegex, "<fn>$&</fn>");
    newHtml = newHtml.replaceAll(organizersRegex, "<grp>$&</grp>");
    newHtml = newHtml.replaceAll(commentsRegex, "<cmnt>$&</cmnt>");

    codeSample.innerHTML = newHtml;

}

console.log("Finish");