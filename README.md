<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>Gihub Account Finder.</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-white" href="#"
            >Github Account Finder</a
          >
        </div>
      </nav>
      <div class="my-3 form-floating">
        <textarea
          class="form-control"
          id="gitUid"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Enter Github user name</label>
      </div>
      <div class="d-grid mx-auto">
        <button id="searchBtn" class="btn btn-success" type="button">
          Search
        </button>
      </div>
      <div class="user container" id="userOp">
        <!-- <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="rounded img-fluid mb-2 img-thumbnail"
                            src="https://avatars.githubusercontent.com/u/37467077?v=4" alt="Avatar">
                        <a href="https://github.com/cseruhul" target="_blank"
                            class="btn btn-success btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9 text-dark">
                        <span class="badge text-bg-primary">Primary</span>
                        <span class="badge text-bg-secondary">Secondary</span>
                        <span class="badge text-bg-success">Success</span>
                        <span class="badge text-bg-info">Info</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Name</li>
                            <li class="list-group-item">Bio</li>
                            <li class="list-group-item">Company</li>
                            <li class="list-group-item">Website</li>
                            <li class="list-group-item">Location</li>
                            <li class="list-group-item">Member</li>
                        </ul>
                    </div>
                </div>
            </div> -->
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script src="js/ui.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
