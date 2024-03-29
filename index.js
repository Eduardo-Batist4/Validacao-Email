const userInputs = {
    name: document.querySelector("#fullName"),
    email: document.querySelector("#emailUser"),
    password: document.querySelector("#passwordUser")
};

const form = document.getElementById("form");
const loginSuccessModal = document.querySelector(".modalSuccessLogin");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetFormStyles(userInputs);
    try{
        userInputs.name.classList.add("success");
        
        validateEmail(userInputs.email.value);
        userInputs.email.classList.add("success");

        validatePassword(userInputs.password.value);
        userInputs.password.classList.add("success");

        loginSuccessModal.classList.add("modalOn");
        // Tirando o Overflow do body
        document.body.style.overflow = "hidden";

        userInputs.name.value = "";
        userInputs.email.value = "";
        userInputs.password.value = "";

    }catch (err){
        userInputs.email.classList.add("inputError");
        userInputs.password.classList.add("inputError");
        document.querySelector("#messageError").classList.add("messageErrorOn");
        console.log(err);
    };
});

// validando Email
function validateEmail(email) {
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-z]{2,}/)) {  //minimo 2 caracter/@/minimo 2 caracter de a-z ou A-Z/
        const err = new Error("Email invalido!");         //um ponto/minimo 2 caracter de a-z minusculo
        err.input = "email";
        throw err;
    };
};

// Resetando os estilos dos input e mensagem de erro
function resetFormStyles(inputs) {
    inputs.email.classList.remove("inputError");
    inputs.password.classList.remove("inputError");
    inputs.name.classList.remove("success");
    inputs.email.classList.remove("success");
    inputs.password.classList.remove("success");
    document.querySelector("#messageError").classList.remove("messageErrorOn");
};

// Validando a Senha
function validatePassword(password) {
    if(
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
        ){
            const err = new Error("Senha invalida!");
            err.input = "senha";
            throw err;
        };
};


// Fechando Modal
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
    loginSuccessModal.classList.remove("modalOn");
    resetFormStyles(userInputs);
    document.body.style.overflow = "auto";
});







