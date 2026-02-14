// document.querySelector("h1").innerHTML = "<em>hey</em>";
$("button").click(function(){
    $("h1").slideToggle();
})
// var noOfBtn=document.querySelectorAll("button").length;
// for (let index = 0; index < noOfBtn; index++) {
//     document.querySelectorAll("button")[index].addEventListener("click",function(){
//         document.querySelector("h1").style.color="blue"    
//     });
    
// }
// $("button").click(function(){
//     $("h1").css("color","pink");
//     setTimeout(function(){
// //           $("h1").css("color","black");
//     },200)
// })
// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// })