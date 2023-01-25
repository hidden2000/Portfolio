/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Web Developer","Software Developer","Problem Solver"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var email=document.querySelector("#email");
var subject=document.querySelector("#subject");
var message=document.querySelector("#message")

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "garvpratapsingh.gps@gmail.com",
        Password: "XXXXXXXXXX",
        To: 'garvpratapsingh.gps@gmail.com',
        From: `${email.textContent}`,
        Subject: `${subject.textContent}`,
        Body: `${message.textContent}`,
    }).then(
        message => alert("mail sent successfully")
    );
}