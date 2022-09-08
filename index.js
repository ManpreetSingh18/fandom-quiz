var readline=require('readline-sync');

var questions=[
    {
        ques:"1 Name Capital of India: ",
        ans:"Delhi"
    },
    {
        ques:"2 Rulling party of India: ",
        ans:"BJP"
    },
    {
        ques:"3 India Largest City: ",
        ans:"Mumbai"
    },
    {
        ques:"4 Dandia is a popular dance of: ",
        ans:"Gujrat"
    },
    {
        ques:"5 Golden temple situated in: ",
        ans:"Amritsar"
    }
]
function welcome(){
    var username=readline.question("What's Your Name: ");
    console.log("Hello "+username+" Welcome to fandom quiz\n");
    console.log("Get Ready to answer the question\n");

}
var score=0;
function check(ques ,ans){
    var read=readline.question(ques);
    if(read.toUpperCase() === ans.toUpperCase()){
        console.log("You're Right\n");
        score++;
    }
    else{
        console.log("You're Wrong\n");
    }
    console.log("Live Score: "+score+"\n")
}

function askques(){
    for(var i=0;i<questions.length;i++){
        check(questions[i].ques,questions[i].ans);
    }
}

function finalscore(){
    console.log("\nYou're Final Score is: "+score);
}
welcome();
askques();
finalscore();