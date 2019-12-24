// Your code goes here
let email = prompt("Enter your email:");
let password = "";
if ((email.length === 0)|| (email === null)) {
  alert("Canceled.");
} else {
  if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols.");
  } else {
    if (email === "user@gmail.com" || email === "admin@gmail.com") {
      password = prompt("Enter your password:");
      if (password.length === 0 || password === null) {
        alert("Canceled.");
      } else {
        if (
          (email === "user@gmail.com" && password === "UserPass") ||
          (email === "admin@gmail.com" && password === "AdminPass")
        ) {
          let change = confirm("Do you want to change your password?");
          if (change == null) {
            alert("You have failed the change.");
          } else {
            prompt("Enter your old password:");
            if (password.length === 0 || password === null) {
              alert("Canceled.");
            } else {
              if (
                (email === "user@gmail.com" && password === "UserPass") ||
                (email === "admin@gmail.com" && password === "AdminPass")
              ) {
                let newPassword = prompt("Enter new password:");
                if (email.length === 0 || email === null) {
                  alert("Canceled.");
                } else {
                  if (email.length < 6) {
                    alert("It’s too short password. Sorry.");
                  } else {
                    let newPassword2 = prompt("Repeat your new password:");
                    if (newPassword === newPassword2) {
                      alert("You have successfully changed your password.");
                    } else {
                      alert("You wrote the wrong password.");
                    }
                  }
                }
              } else {
                alert("Wrong password.");
              }
            }
          }
        } else {
          alert("Wrong password.");
        }
      }
    } else {
      alert("I don’t know you.");
    }
  }
}
