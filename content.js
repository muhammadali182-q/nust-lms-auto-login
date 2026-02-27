chrome.storage.sync.get(["username", "password"], function(data) {

    const userField = document.querySelector("#username");
    const passField = document.querySelector("#password");
    const loginBtn = document.querySelector("#loginbtn");

    if (userField && passField && loginBtn) {
        userField.value = data.username;
        passField.value = data.password;
        loginBtn.click();
    }
});