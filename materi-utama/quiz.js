


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

  $(document).ready(function() {

    //document.getElementById("skor").innerHTML ="0";
    //document.getElementById("soal").style.display = "none";
    document.getElementById("kunci").style.display = "none";
  });

  let j1=0;
  let j2=0;
  let j3=0;
  let j4=0;
  let j5=0;
  let j6=0;
  let j7=0;
  let j8=0;
  let j9=0;
  let j10=0;


  function cek_jawaban_1(){
    const rbs = document.querySelectorAll('input[name="satu"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j1=selectedValue;
            //alert(j1);
  }
  function cek_jawaban_2(){
    const rbs = document.querySelectorAll('input[name="dua"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j2=selectedValue;
           // alert(j2);
  }
  function cek_jawaban_3(){
    const rbs = document.querySelectorAll('input[name="tiga"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j3=selectedValue;
            //alert(j3);
  }
  function cek_jawaban_4(){
    const rbs = document.querySelectorAll('input[name="empat"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j4=selectedValue;
            //alert(j4);
  }
  function cek_jawaban_5(){
    const rbs = document.querySelectorAll('input[name="lima"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j5=selectedValue;
            //alert(j5);
  }
  function cek_jawaban_6(){
    const rbs = document.querySelectorAll('input[name="enam"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j6=selectedValue;
           // alert(j6);
  }
  function cek_jawaban_7(){
    const rbs = document.querySelectorAll('input[name="tujuh"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j7=selectedValue;
           // alert(j7);
  }
  function cek_jawaban_8(){
    const rbs = document.querySelectorAll('input[name="lapan"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j8=selectedValue;
            //alert(j8);
  }
  function cek_jawaban_9(){
    const rbs = document.querySelectorAll('input[name="sembilan"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j9=selectedValue;
            //alert(j9);
  }
  function cek_jawaban_10(){
    const rbs = document.querySelectorAll('input[name="sepuluh"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            j10=selectedValue;
           // alert(j10);
  }
function cek(){ 
    var userEmail = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    
    if(userEmail==""){
        alert("Silahkan isi nama anda terlebih dahulu");
    }
    else if(kelas==""){
        alert("Silahkan isi password anda terlebih dahulu");
    }
    else{
        cek_jawaban_1();
        cek_jawaban_2();
        cek_jawaban_3();
        cek_jawaban_4();
        cek_jawaban_5();
        cek_jawaban_6();
        cek_jawaban_7();
        cek_jawaban_8();
        cek_jawaban_9();
        cek_jawaban_10();
        let total=(parseInt(j1)+parseInt(j2)+parseInt(j3)+parseInt(j4)+parseInt(j5)+parseInt(j6)+parseInt(j7)+parseInt(j8)+parseInt(j9)+parseInt(j10))*parseInt(10);

        firebase.database().ref("user").push({
            nama:userEmail,
            kelas:kelas,
            nilai:total,
          });
          document.getElementById("skor").innerHTML =total;
          document.getElementById("soal").style.display = "none";
          document.getElementById("tombol").style.display = "none";
          document.getElementById("kunci").style.display = "block";
          //setTimeout(pindah, 1000);
          

    }

}


