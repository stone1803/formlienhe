// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "-",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1::web:"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let noiDungRef = firebase.database().ref("NoiDUng");
// LANG NGHE
document.getElementById("gui").addEventListener("submit",(evt)=>{
  evt.preventDefault();
  // bat gia tri
  var hoTen = getIDVALUE("hoTen");
  var email = getIDVALUE("email");
  var noiDung = getIDVALUE("noiDung");
  saveFireBase(hoTen,email,noiDung);
  // thong bao gui thanh cong 
  document.getElementById("thongBao").innerHTML="DANG GUI THANG CONG";
  document.getElementById("gui").reset();



})
// GET ID 
getIDVALUE = (id)=>{
  return document.getElementById(id).value;
}

// save FireBase

saveFireBase = (hoTen,email,noiDung)=>{
  var newNoiDungRef = noiDungRef.push();
  newNoiDungRef.set({
    hoTen,
    email,
    noiDung
  });
}
