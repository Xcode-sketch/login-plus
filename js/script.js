const thema = document.querySelector("#themeid");
const body = document.body;
const root = document.documentElement;

const userInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form");
const submitButton = document.querySelector("button");


/*
    --destaque: #1f66fd;
    --destaque-inverso: #5888f0;
    --fundo-card: #ececec;
    --fundo-principal: #f5f5f5;
    --text:#FFFFFF;
    --text-inverso:#222222;
*/

function validateUser(username) {
    if (username === null || username === undefined) {
        return { valid: false, message: "O campo usuário não pode ser nulo." };
    }
    
    if (username.trim() === "") {
        return { valid: false, message: "O campo usuário não pode estar em branco." };
    }
    
    return { valid: true, message: "" };
}

function validatePassword(password) {
    if (password === null || password === undefined) {
        return { valid: false, message: "O campo senha não pode ser nulo." };
    }
    
    if (password.trim() === "") {
        return { valid: false, message: "O campo senha não pode estar em branco." };
    }
    
    if (password.length < 8) {
        return { valid: false, message: "A senha deve ter pelo menos 4 caracteres." };
    }
    
    return { valid: true, message: "" };
}

function showError(message) {
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "14px";
    errorDiv.style.marginTop = "10px";
    errorDiv.textContent = message;
    
    submitButton.parentNode.insertBefore(errorDiv, submitButton.nextSibling);
}

function clearError() {
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }
}

function validateForm() {
    const username = userInput.value;
    const password = passwordInput.value;
    
    clearError();
    
    const userValidation = validateUser(username);
    if (!userValidation.valid) {
        showError(userValidation.message);
        userInput.focus();
        return false;
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
        showError(passwordValidation.message);
        passwordInput.focus();
        return false;
    }
    
    return true;
}

function darkTheme(isdark){
    if(isdark) {
        body.classList.add('dark');
        thema.innerHTML = '<a href="#" id="themeid"><i class="fa-solid fa-sun"></i></a>';
        root.style.setProperty('--destaque','#ffd900ff');
        root.style.setProperty('--destaque-inverso', '#91843eff');
        root.style.setProperty('--fundo-card', '#464646ff');
        root.style.setProperty('--fundo-principal', '#1f1f1fff');
        root.style.setProperty('--text', '#222222');
        root.style.setProperty('--text-inverso', '#FFFFFF');
    } else {
        body.classList.remove('dark');
        thema.innerHTML = '<a href="#" id="themeid"><i class="fa-solid fa-moon"></i></a>';
        root.style.setProperty('--destaque','#1f66fd');
        root.style.setProperty('--destaque-inverso', '#5888f0');
        root.style.setProperty('--fundo-card', '#ececec');
        root.style.setProperty('--fundo-principal', '#f5f5f5');
        root.style.setProperty('--text', '#FFFFFF');
        root.style.setProperty('--text-inverso', '#222222');
    }
}
thema.addEventListener('click', (e) => {
    e.preventDefault();
    const isdark = !body.classList.contains('dark');
    darkTheme(isdark);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        clearError();
        alert("Login válido! Formulário enviado com sucesso.");
    }
});

userInput.addEventListener('input', clearError);
passwordInput.addEventListener('input', clearError);
