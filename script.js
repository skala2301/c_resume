import * as my_db from "./my_module.mjs"
//load elements to be used from the html doc
var btnAddRecommendation=document.getElementById("recommend_btn")
var btnConfirm=document.getElementById("confirm_btn")
var btnCancel=document.getElementById("cancel_btn")

//Add all event listeners
btnAddRecommendation.addEventListener("click", function(){showPopup(true)})//the submit button when clicked calls showPopup() function
btnConfirm.addEventListener("click", function(){addRecommendation(true)})//part of the Popup shown for confirmation, when pushed it adds the new comment if there is any
btnCancel.addEventListener("click", function(){addRecommendation(false)})//part of the Popup shown for confirmation, when pushed it closes the popup and cancel the comment submit

//Shows the Popup window
function showPopup(active) {
  if (active) {//when active is true it disable the submit button and shows the popup window
    document.getElementById('recommend_btn').disabled=true
    document.getElementById('popup').style.visibility = 'visible'
  } else {//if active false enables the submit button and hide the popup window
    document.getElementById('recommend_btn').disabled=false
    document.getElementById('popup').style.visibility = 'hidden'
  }
}


//It is called when btnConfirm or btnCancel are clicked
function addRecommendation(proceed=false) {
  showPopup(false);//closes the popup window and enable submit again
  if(proceed){//if user press confirm button, the program proceeds to add the new comment to the database
    let recommendation = document.getElementById("new_recommendation").value;//get the body of the new recommendation comment
    if (recommendation != null && recommendation.trim() != ""){ //check if there is any comment into recommendation
      let new_comment_element=StructComment(recommendation)//new recommendation is structured with the string retrived by StructComment() function
      my_db.writetodb(new_comment_element);//write new data into database
    }
  }
}

//This function structures the string with the html format so it may be added as a new comment
function StructComment(recommendation){
  let recommendation_title=document.getElementById("new_recommendation_title").value;//Get the value from the tittle
  
  if(recommendation_title!=""){//check if the was any title entered
    recommendation_title="\<b\>"+recommendation_title+":\</b\>\<br/\>"//if a title was entered we provide the correct format to it
  }
  return "\<div class='recommendation'\>"+recommendation_title+"\<span>&#8220;\</span\>"+recommendation+"\<span>&#8221;\</span\>\</div\>";//the new string is sent to use as the full comment
}
