function addRecommendation() {
  // Get the message of the new recommendation
  showPopup(true)

}

function showPopup(bool) {
  if (bool) {
    document.getElementById('recommend_btn').disabled=true
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('recommend_btn').disabled=false
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function showPopup(bool, proceed) {
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
    if (recommendation != null && recommendation.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here

      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");

      element.innerHTML = recommendation_title +"\<span\>&#8220;\</span\>" + recommendation + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation = "";
    }
  }else{
    return false
  }
}
