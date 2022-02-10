var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    let modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
    }
  }

function newFAQ(){
    var strText = document.getElementById("question").value;          
    var strText1 = document.getElementById("answer").value;
    var question = strText 
    var answer = strText1
    document.getElementById('questionHeading').textContent = question;
    document.getElementById('answerContent').textContent = answer;
    // new
    window.sessionStorage.setItem('questionStr',JSON.stringify(question));
}

function retrieveRecords(){ //retrieves items in sessionStorage
    console.log("retrive records");
    var records = JSON.parse(window.sessionStorage.getItem('questionStr'));
    // var paragraph = document.createElement("p");
    // var infor = document.createTextNode(records);
    // paragraph.appendChild(infor);
    // var element = document.getElementById("retrieve");
    // element.appendChild(paragraph);
    document.getElementById('questionHeading').textContent = records;
}

  // Nav bar toggle
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}