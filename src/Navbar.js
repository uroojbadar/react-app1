
function App() {
    return (
      <>
     
     <header class="header_wrapper">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container d-flex justify-content-end">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   
                    <i class="fas fa-stream navbar-toggler-icon"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav menu-navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="poem.html">Poems</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#videos">Videos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blogs.html">Blogs</a>
                        </li>
                        <li class="nav-item mt-3 mt-lg-0">
                            <a>
                                <button class="main-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#Contact">Contact</button>  
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
      </>
      
    );
  }
  
  export default App;
  
  