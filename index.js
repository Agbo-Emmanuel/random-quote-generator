const quoteText = document.getElementById('quote_text');
const quoteAuthor = document.getElementById('quote_author');
const generateBtn = document.getElementById('generate_btn');







let quotes = [
    {
        quote : "That it will never come again is what makes life so sweet.",
        author : "Emily Dickinson"
    },
    {
        quote : "It is never too late to be what you might have been.",
        author : "George Eliot"
    },
    {
        quote : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author : "Ralph Waldo Emerson"
    },
    {
        quote : "All the world's a stage, and all the men and women merely players.",
        author : "William Shakespeare"
    },
    {
        quote : "Be kind, for everyone you meet is fighting a hard battle.",
        author : "Plato"
    },
    {
        quote : "Unable are the loved to die for love is immortality.",
        author : "Emily Dickinson"
    },
    {
        quote : "Don't let your happiness depend on something you may lose.",
        author : "C.S. Lewis"
    },
]





generateBtn.onclick=()=>{

    let ranNum = Math.random();
    let num = Math.floor(ranNum * 7)
    let theQuote = quotes[num].quote
    let theAuthor = quotes[num].author
    // console.log(theAuthor)
    // console.log(theQuote)
    quoteText.innerHTML = theQuote
    quoteAuthor.innerHTML = theAuthor
}