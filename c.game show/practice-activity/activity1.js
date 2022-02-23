score=0;
function updatescore()
{
    score=score+1;
    document.getElementById("score").innerHTML="Score is " + score;

}
function save()
{
localStorage.setItem("score",score) ;
}
function next()
{
window.location="activity_2.html";




}
