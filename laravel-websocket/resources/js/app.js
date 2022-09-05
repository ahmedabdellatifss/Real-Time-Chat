const { default: Axios } = require('axios');

require('./bootstrap');

const form = document.getElementById("form");
const inputMessage = document.getElementById("input-message");
const listMessage = document.getElementById("list-messages");

form.addEventListener('submit' , function(event){

    event.preventDefault();
    const userIput = inputMessage.value;

    axios.post('/chat-message' , {
        message: userIput
    })
})

const channel = Echo.channel('public.chat.1');


channel.subscribed( ()=>{
    console.log('subscribed');
}).listen('.chat-message' , (event)=>{
    console.log(event);
    const message = event.message;

    const li = document.createElement('li');
    li.textContent = message;

    listMessage.append(li);

})
