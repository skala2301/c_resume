
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, set, push, onValue, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
export var comments=null

const appSettings={
  databaseURL:"https://first-project-75872-default-rtdb.firebaseio.com/"
}

const fireb_app=initializeApp(appSettings);
const firebase_db=getDatabase(fireb_app);
const ref_db=ref(firebase_db, "comments");


export function writetodb(data){
    push(ref_db, data)
}


onValue(ref_db,function(snapshot){
    if (snapshot.exists()) {
        document.getElementById("all_recommendations").innerHTML="";
        for(const element in snapshot.val()) {
            document.getElementById("all_recommendations").innerHTML+=snapshot.val()[element];
        }
      } else {
        document.getElementById("all_recommendations").innerHTML= "";
      }
})
