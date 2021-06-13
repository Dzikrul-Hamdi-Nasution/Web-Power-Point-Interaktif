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

var dbRef = firebase.database();

var ulasan_tabel = dbRef.ref("user");
var table_2 = document.getElementById("tabel-nilai").getElementsByTagName('tbody')[0];;

// Memuat Data
ulasan_tabel.on("child_added", function(data, prevChildKey) {
    var ulasan_data = data.val();

    var row = table_2.insertRow(table_2.rows.length);

    var u1 = row.insertCell(0);
    var u2 = row.insertCell(1);
    var u3 = row.insertCell(2);

    u1.innerHTML = ulasan_data.nama;
    u2.innerHTML = ulasan_data.kelas;
    u3.innerHTML = ulasan_data.nilai;

});

function keluar() {
    firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
       
       alert("anda telah login");
    } else {
        // No user is signed in.
        alert("Silahkan Login Kembali");
        window.location.replace("index.html")
    }
  });
  


