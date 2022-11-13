
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get("email") === "" || formData.get("password") === "") {
        return alert("not all fields are filled!");
    } else {
        const newUser = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
        event.currentTarget.reset();
        console.log(newUser);
        return newUser;
    }
}


