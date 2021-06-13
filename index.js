var config = {
    apiKey: "AIzaSyBGiHyXuN_m2d8SQPWiEZ7pMevqgK924g4",
  authDomain: "pembelajaran-ppt.firebaseapp.com",
  databaseURL: "https://pembelajaran-ppt-default-rtdb.firebaseio.com",
  projectId: "pembelajaran-ppt",
  storageBucket: "pembelajaran-ppt.appspot.com",
  messagingSenderId: "925246554531",
  appId: "1:925246554531:web:040f1a35b01fbc8f92da16",
  measurementId: "G-RVBP8VHL2V"
  };
  
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location.replace("admin.html")
       
    } else {
        // No user is signed in.
        
    }
  });
  
  //alert("Silahkan isi nama & kelas atau login sebagai pengajar");
  function masuk() {

    var userEmail = document.getElementById("username").value;
    var userPass = document.getElementById("password").value;


  
        if(userEmail==""){
            alert("Silahkan isi username anda");
        }
        else if(userPass==""){
            alert("Silahkan isi password anda");
        }
        else{
          
            firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                // Handle Errors here.
                
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Error : " + errorMessage);
            });
        }
       
    
  
  
    
  }
  
  function keluar() {
    firebase.auth().signOut();
  }