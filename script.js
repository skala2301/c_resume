
var btnAddRecommendation=document.getElementById("recommend_btn")
var btnConfirm=document.getElementById("confirm_btn")
var btnCancel=document.getElementById("cancel_btn")

function load_comments(){
  var my_comments=JSON.parse(localStorage.getItem("my_comments"));
  if(my_comments!=null){
    document.getElementById("all_recommendations").innerHTML=my_comments;
    console.log("added ", my_comments);
  } else {
    console.log("No Comments");
  } 
}



function addRecommendation() {
  // Get the message of the new recommendation
  showPopup(true)

}
/*
function showPopup(bool) {
  if (bool) {
    document.getElementById('recommend_btn').disabled=true
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('recommend_btn').disabled=false
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
*/



function showPopup(bool, proceed=false) {
  if (bool) {
    document.getElementById('recommend_btn').disabled=true
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('recommend_btn').disabled=false
    document.getElementById('popup').style.visibility = 'hidden'
  }
  if(proceed){
    let recommendation_title=document.getElementById("new_recommendation_title").value;
    let recommendation = document.getElementById("new_recommendation").value;
    if(recommendation_title!=""){
      recommendation_title="<b>"+recommendation_title+":</b><br/>"
    }
    // If the user has left a recommendation, display a pop-up
    let new_comment_element="\<div class='recommendation'\>"+recommendation_title+"\<span\>&#8220;\</span\>"+recommendation+"\<span\>&#8221;\</span\>\</div\>";
    if (recommendation != null && recommendation.trim() != "") {
      console.log("New recommendation added");
      
      var my_comments=JSON.parse(localStorage.getItem("my_comments"));
      if(my_comments!=null){
        my_comments+=new_comment_element;
        console.log("added ", my_comments);
      } else {
        my_comments=new_comment_element;
        console.log("Elemento nulo");
      } 
      
      document.getElementById("all_recommendations").innerHTML=my_comments;
      localStorage.setItem("my_comments",JSON.stringify(my_comments));
      recommendation = "";
    }
  }else{
    return false
  }
}

function readtextFile(){

}

document.addEventListener("DOMContentLoaded",load_comments)
btnConfirm.addEventListener("click", function(){showPopup(false,true)})
btnCancel.addEventListener("click", function(){showPopup(false,false)})
btnAddRecommendation.addEventListener("click", function(){addRecommendation()})



