async function sendQuestion(){

    const question=document.getElementById("question").value;

    const chat=document.getElementById("chat-box");

    chat.innerHTML+=`<div class="user"><b>You:</b> ${question}</div>`;

    const response=await fetch("/chat",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            question:question
        })

    });

    const data=await response.json();

    chat.innerHTML+=`<div class="bot"><b>Bot:</b> ${data.answer}</div>`;

    document.getElementById("question").value="";

    chat.scrollTop=chat.scrollHeight;

}