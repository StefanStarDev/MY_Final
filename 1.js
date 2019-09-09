function solve(input) {
    let text = input.shift();

    for (let line of input) {
        let [command, str, other] = line.split(' ');

        if(command === 'Translate') {
            text = translate(text, str, other);
            console.log(text);
            
        } else if(command === 'Includes') {
            let isIncluded = includesStr(text, str);
            if(isIncluded) {
                console.log('True');
                
            } else {
                console.log('False');
                
            }
        }else if (command === 'Start') {
            if(start(text, str)){
                console.log('True');
                
            } else {
                console.log('False');
                
            }
            
        } else if (command === 'Lowercase') {
            text = text.toLowerCase()
            console.log(text);
        }else if (command === 'FindIndex') {
            let index = text.lastIndexOf(str);
            console.log(index);
        
        }else if (command === 'Remove') {
            text = removeStr(text, str, other);
            console.log(text);
            

        }
        
    }

    function translate(text, char, replacement) {
        text = text.split('');
        for (let letter of text) {
            if(letter === char) {
                let index = text.indexOf(char);
                text.splice(index,1,replacement);
            }
        }
        return text.join('');
    }

    function includesStr(text, string) {
        if (text.includes(string)) {
                return true;
        } else {
            return false;
        }
    }

    function start(text, string) {
        if (text.indexOf(string) === 0) {
            return true;
        } else {
            return false;
        }
    }

    function removeStr(text, start, count) {
        text = text.split('');
        text.splice(start, count);
        return text.join(''); 
    }
}
solve(['//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End	'
    
    ])