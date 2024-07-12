let searchBtn = document.querySelector("#searchBtn");
let username = document.querySelector("#gitUid");
let ui = new UI();

searchBtn.addEventListener("click", function (e) {
  if (username.value != "") {
    fetch(`https://api.github.com/users/${username.value}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          username.value = "";
          ui.noUserFound();
        } else {
          username.value = "";
          ui.showProfile(data);
          // console.log(data);
        }
      });
  } else {
    //Clear Profile
    alert(
      "You did not enter any user name. Please enter a github username to search."
    );
    ui.clearProfile();
  }
});
