window.addEventListener("load", function() {

    chrome.storage.sync.get(["username", "password"], function(data) {

        // Detect login page elements
        const userField = document.querySelector("input[name='username']");
        const passField = document.querySelector("input[name='password']");
        const loginBtn = document.querySelector("button[type='submit']");

        // If login page exists AND user is not logged in
        if(userField && passField && loginBtn){

            if(data.username && data.password){

                userField.value = data.username;
                passField.value = data.password;

                setTimeout(()=>{
                    loginBtn.click();
                }, 1000);
            }
        }

    });

});
