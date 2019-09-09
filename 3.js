function messManager(input) {
    let capacity = Number(input.shift());

    let sentList = {};
    let receivedList = {};

    for (let line of input) {
        if(line === "Statistics") {
            break;
        }

        let [command, name, info1, info2] = line.split('=');

        if(command === 'Add') {
            add(name,info1,info2);

        } else if ( command === 'Message') {
            message(name, info1, capacity);
        } else if (command === 'Empty') {
            empty(name);
        }
    }

let count = Object.keys(sentList).length;
console.log(`Users count: ${count}`);

Object.entries(receivedList)
.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
.forEach(el => console.log(`${el[0]} - ${el[1] + sentList[el[0]]}`));

    function add(userName,sent,received) {
        sent = Number(sent);
        received = Number (received);
        if(!sentList.hasOwnProperty(userName)) {
            sentList[userName] = sent;
        }
        if(!receivedList.hasOwnProperty(userName)) {
            receivedList[userName] = received;
        }
    }

    function message(sender, receiver, capacity) {
        if(sentList.hasOwnProperty(sender) && receivedList.hasOwnProperty(receiver)) {
            if( sentList[sender] + receivedList[receiver] < capacity) {
                sentList[sender] += 1;
                receivedList[receiver] += 1;
            } 

            if(sentList[sender] + receivedList[sender] >= capacity) {
                console.log(`${sender} reached the capacity!`);
                delete receivedList[sender]
                delete sentList[sender];
            }
            if(receivedList[receiver] + sentList[receiver] >= capacity) {
                console.log(`${receiver} reached the capacity!`)
                delete receivedList[receiver];
                delete sentList[receiver];
            }
        }
    }

    function empty(name) {
        if(name === 'All') {
            sentList = {};
            receivedList = {};
        } else {
            delete sentList[name];
            delete receivedList[name];
        }
    }
}
messManager(['20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
   'Add=Amy=9=9',
'Message=Blake=Amy',
'Message=Michael=Amy',
'Statistics'
    ])