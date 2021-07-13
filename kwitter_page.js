//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAK2ZSz9nhhmzjmw7ELZgzlsBph3nEBvd0",
      authDomain: "class-test-851a4.firebaseapp.com",
      databaseURL: "https://class-test-851a4-default-rtdb.firebaseio.com",
      projectId: "class-test-851a4",
      storageBucket: "class-test-851a4.appspot.com",
      messagingSenderId: "361821506110",
      appId: "1:361821506110:web:57b08039625d135f24df6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
           
//End code
      } });  }); }
getData();
