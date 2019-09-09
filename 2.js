function decripter(input) {
    let n = Number(input.shift())

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let pattern = /^([$%])(?<name>[A-Z]([a-z]+){2,})\1: \[(?<s1>[\d]+)\]\|\[(?<s2>[\d]+)\]\|\[(?<s3>[\d]+)\]\|$/g;
        let patternInfo = pattern.exec(line);
        if(patternInfo) {
            let tag = patternInfo.groups.name;
            let firstChar = String.fromCharCode(patternInfo.groups.s1);
            let secondChar = String.fromCharCode(patternInfo.groups.s2);
            let thirdChar = String.fromCharCode(patternInfo.groups.s3);
            console.log(`${tag}: ${firstChar}${secondChar}${thirdChar}`);
            
        } else {
            console.log(`Valid message not found!`);
            
        }
        

    }

}
decripter(['4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
    ])