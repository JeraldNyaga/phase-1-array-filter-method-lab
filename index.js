const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const newDrivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function findMatching(drivers, name){
    return drivers.filter(rightName => rightName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, nameString){
    return drivers.filter(name => name.slice(0,nameString.length).toLowerCase() == nameString.toLowerCase())
}

function matchName(drivers, nameString){
    return drivers.filter(userDetails => userDetails["name"] === nameString)   
}
console.log(findMatching(drivers, "Bobby"))
console.log(fuzzyMatch(drivers, "y"))
console.log(matchName(newDrivers, "Bobby"))