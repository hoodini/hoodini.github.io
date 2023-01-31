const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("exampleFormControlTextarea1");
const codeSnippet = document.getElementById("codeText");

document.getElementById("submitBtn").addEventListener("click", function() {
    let inputText = document.getElementById("exampleFormControlTextarea1").value;
    let extractedText = extractKeyPhrases(inputText);
    let noDupsText = removeDuplicates(extractedText);
    let noNums = removeNumbers(noDupsText);
    let noChars = removeSpecialChars(noNums);
    let mostF = mostFrequentValues(noNums, 1);
    let option1 = `${noChars}\n`
    let option2 = `Option 2 is:\n ${mostF}\n`
    document.getElementById("codeText").innerHTML = option1.toLowerCase();
    if (option2) {
        document.getElementById("codeText").innerHTML = option1.toLowerCase(), option2.toLowerCase();
    }
});

async function copyToClipboard(value) {
    try {
        await navigator.clipboard.writeText(value);
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

document.getElementById("codeSnippet").addEventListener("click", function() {
    var myVariable = document.getElementById("codeSnippet").value;
    copyToClipboard(myVariable);
    });

function extractKeyPhrases(text) {
    let words = text.split(" ");
    let stopWords = ['and', 'the', 'to', 'of', 'a', 'in', 'that', 'it', 'with', 'for', 'as', 'was', 'on', 'is', 'at', 'by', 'an', 'this', 'but', 'or', 'are'];
    let commonWords = ['ok', 'so', 'again', 'he', 'i', 'my' , 'at', 'you', 'her', 'she', 'they', 'want', 'this', 'that', 'there', 'which', 'who', 'whom', 'whose', 'what', 'whatever', 'when', 'where', 'how', 'why', 'whether', 'her', 'his', 'their', 'if', 'than', 'then'];
    let keyPhrases = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (!stopWords.includes(word) && !commonWords.includes(word)) {
            keyPhrases.push(words[i]);
        }
    }
    return keyPhrases;
}

function removeDuplicates(lst) {
    let uniqueWords = [];
    for (let i = 0; i < lst.length; i++) {
        let word = lst[i];
        let match = false;
        for (let j = 0; j < uniqueWords.length; j++) {
            let uword = uniqueWords[j];
            if (word.includes(uword) || uword.includes(word)) {
                match = true;
                break;
            }
        }
        if (!match) {
            uniqueWords.push(word);
        }
    }
    return uniqueWords;
}


function removeNumbers(lst) {
    let newList = [];
    for (let i = 0; i < lst.length; i++) {
        let item = lst[i];
        if (item === "4k" || item === "4K" || item === "8k" || item === "8K") {
            newList.push(item);
        } else if (!isNaN(item)) {
            let num = parseInt(item);
            if (num >= 1000 && num <= 2999) {
                newList.push(item);
            }
        } else {
            let value = item.replace(/[0-9]/g, '');
            newList.push(value);
        }
    }
    return newList;
}

function removeSpecialChars(lst) {
    let clean = [];
    for (let item of lst) {
        item = item.replace(/[.'&`@!#$,;<>{}[\]\/]/g, '');
        clean.push(item);
    }
    return clean;
}

function mostFrequentValues(lst, limit = 10) {
    let valueCounts = {};
    for (let value of lst) {
        if (value in valueCounts) {
            valueCounts[value]++;
        } else {
            valueCounts[value] = 1;
        }
    }

    let frequentValues = [];
    for (let [value, count] of Object.entries(valueCounts)) {
        frequentValues.push({ value, count });
    }

    frequentValues.sort((a, b) => b.count - a.count);

    return frequentValues.slice(0, limit);
}
