import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings={
  databaseURL:"https://first-project-75872-default-rtdb.firebaseio.com/"
}

const fireb_app=initializeApp(appSettings)
const firebase_db=getDatabase(fireb_app);
const comments_db=ref(firebase_db, "comments")

console.log(fireb_app)
console.log(firebase_db)
console.log(comments_db)

