let input = document.getElementById('email');
let input2 = document.getElementById('password')
let label = document.getElementById('label');
let label2 = document.getElementById('label2')
let signUp = document.getElementById('signUp');
let logIn = document.getElementById('logIn')
let box = document.querySelector('.box');
let inBox = document.querySelector('.input-box')
let pLog = document.querySelector('.p');
input.addEventListener('focus', () => {
    if (input.value === ""){
        label.style.top = '1.6em'
        label2.style.top = '3em'
    }else if (input.value === Text) {
        label.style.top = '1em'
    }
})
input2.addEventListener('focus', () => {
    if (input2.value === ""){
        label2.style.top = '1.8em'
    }
})

document.getElementById('showPassword').addEventListener("change", function() {
    let passwordField = document.getElementById('password');
    if (this.checked){
        passwordField.type = "text"
    } else {
        passwordField.type = "password"
    }
})

signUp.addEventListener('click', () => {
    pLog.innerText = "Sign Up"
    box.style.height = '45em'
    signUp.style.backgroundColor = "rgb(13,110,253)"
    signUp.style.borderColor = 'rgb(13,110,253)'
    logIn.style.backgroundColor = "rgb(108,117,125)"
    logIn.style.borderColor = 'rgb(108,117,125)'
    inBox.innerHTML = 
    `
    <input type = "text" id="name" placeholder="Name">
    <input type = "text" id="age" placeholder="Age">
    <input type = "text" id="number" placeholder="Number">
    <input type = "text" id="name" placeholder="Password">
    <input type = "text" id="name" placeholder="Reciew Password">
    <button class="submit">Submit</button>
    `;
})
logIn.addEventListener('click', () => {
    signUp.style.backgroundColor = "rgb(108,117,125)"
    signUp.style.borderColor = 'rgb(108,117,125)'
    logIn.style.backgroundColor = "rgb(13,110,253)"
    logIn.style.borderColor = 'rgb(13,110,253)'
    pLog.innerText = "Login"
    box.style.height = '100vh'
    inBox.innerHTML = `                <label for="email" id="label">Email Address</label>
    <input type="email" id="email" class="input">
    <span class="svg-span">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
            <path
                d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
            <path
                d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
        </svg>
    </span>
    <label for="password" id="label2">Password</label>
    <input type="password" id="password" class="input">
    <span id="eye">
        <svg id="show"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
            viewBox="0 0 16 16">
            <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path
                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
        </svg>
    </span>
    <input type="checkbox" id="showPassword">
    <span class="span-label">Show password</span>
    <span><a href="#" class="a">Forgot password?</a></span>
    <button class="submit">Submit</button>`;
})