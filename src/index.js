const messages =[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"

]
const randomN = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message)
}
module.exports = {randomN};