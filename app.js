/*const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';
    
    sendEmail.send({
        Host : "smtp.elasticemail.com",
        Username : "sungaromulo@gmail.com",
        Password : "386BD5498BEAC8ED5D30C6AD3869CA04C8F8",
        To : 'sungaromulo@gmail.com',
        From : "sungaromulo@gmail.com",
        Subject : subject.value,
        Body : "bodyMessage"
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".itam");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
}); */