// Your web app's Firebase configuration
const firebaseConfig = {

  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
//add user_name
document.getElementById("").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    //Chat_Page.html
    window.location = "";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      //output
      document.getElementById("").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Chat_Page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
