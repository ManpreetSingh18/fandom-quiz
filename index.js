var readline=require('readline-sync');

var questions=[
    {
        ques:"Capital of India",
        ans:"Delhi"
    },
    {
        ques:"Rulling party of India",
        ans:"BJP"
    },
    {
        ques:"India Largest City",
        ans:"Mumbai"
    },
    {
        ques:"Dandia is a popular dance of",
        ans:"Gujrat"
    },
    {
        ques:"Golden temple situated in",
        ans:"Amritsar"
    }
]
function welcome(){
    var username=readline.question("What's Your Name: ");
    console.log("Hello "+username+"Welcome to fandom quiz/n");

}
welcome();