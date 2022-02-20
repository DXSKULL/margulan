// CheckBox
function terms_changed(termsCheckBox){
    if(termsCheckBox.checked){
        document.getElementById("submit_button").disabled = false;
    } else{
        document.getElementById("submit_button").disabled = true;
    }
}

// Confirm password
function validate(){
  var password = document.getElementById("exampleInputPassword1").value;
  var confirmPassword = document.getElementById("exampleInputPassword2").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}

function BIG(im){
    document.getElementById('mous').title="фывапролорекуцйцукеролборпавыфывмитьлгнекукенролорпавычсмиторнекепрлплцщклпзовзшыопжовэзРДИРОДЬМЭАЫЫТАШЦККТППЗШКПТАОДТЗРЕЩРП."
}
function soundClick(){
    var audio = new Audio('Sound_btn.mp3');
    audio.play();
}
function soundOver(){
    var audio1 = new Audio('rk.mp3');
    audio1.volume=0.1;
    audio1.play();
}
function Egg(){
    var egg = new Audio('GTA_-_GTA_San_Andres_(iPleer.com).mp3');
    egg.volume=0.5;
    egg.play();

}

function M_eto_Na_ENGLISH(){
    document.location.href = "register.html";
}
