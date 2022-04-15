const firebaseConfig = {
  apiKey: "AIzaSyA7Ty4H19OI6DssSQds7sn0Pi8eyDyYxMM",
  authDomain: "traveling-through-the-time.firebaseapp.com",
  projectId: "traveling-through-the-time",
  storageBucket: "traveling-through-the-time.appspot.com",
  messagingSenderId: "657185367029",
  appId: "1:657185367029:web:275d4c14195e679f8036bc",
  measurementId: "G-CR0E1DC7YJ",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const thisDay = document.querySelector(".hidden > h1").innerHTML;

function getData() {
  db.collection("Day" + thisDay)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let maindiv = document.getElementById("comment-div");
        let mydiv = document.createElement("div");
        mydiv.classList.add("cm");
        mydiv.innerHTML = doc.data().comment;
        maindiv.appendChild(mydiv);
      });
    });
}

function saveData() {
    let data = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    if (data === "") {
        console.log("กรุณาใส่ comment ก่อนค้าบบ");
    } 
    else {
        let maindiv = document.getElementById("comment-div");
        let mydiv = document.createElement("div");
        mydiv.classList.add("cm");
        mydiv.innerHTML = data;
        maindiv.appendChild(mydiv);
        const sendData = {comment: data};
        db.collection("Day" + thisDay)
        .add(sendData)
    }
}

getData();
