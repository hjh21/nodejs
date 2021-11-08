"use strict";

const id = document.querySelector('#id');
const psword = document.querySelector('#psword');
const confirmPsword = document.querySelector('#confirm-psword');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
    if (!id.value) return alert("essential id");
    if (!psword.value) {
        return alert("password id");
    } else {
        if (psword.value !== confirmPsword.value) return alert("not same password");
    }
    if (!confirmPsword.value) return alert("password");
    
    const req = {
        id : id.value,
        psword: psword.value,
    };
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("sing error");
    })
}