class UI {
  constructor() {
    this.profile = document.getElementById("userOp");
  }

  showProfile(user) {
    // this.clearAlert();
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col col-md-3">
                    <img class="rounded img-fluid mb-2 img-thumbnail" src="${user.avatar_url}" alt="Avatar">
                    <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-4">View Profile</a>
                </div>

                <div class="col-md-9 text-dark">
                    <span class="badge text-bg-primary">Public Repo: ${user.public_repos}</span>
                    <span class="badge text-bg-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge text-bg-success">Followers: ${user.followers}</span>
                    <span class="badge text-bg-info">Following: ${user.following}</span>

                    <br>
                    <br>

                    <ul class="list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
  }

  showAlert(message, className) {
    this.clearAlert();
    let div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");
    container.insertBefore(div, search);
  }

  clearAlert() {
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  noUserFound() {
    let html = document.getElementById("userOp");
    html.innerHTML = `
      <h2>No User Found.</h2>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
    // alert("Please Provide a github username to search.");
  }
}
