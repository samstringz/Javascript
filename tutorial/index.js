let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
    console.log(count)
}

save()

// sends message to users 
let username = "per"

let message = "You have three new notifications"

let messageToUser = message + "," + username

console.log(messageToUser)
