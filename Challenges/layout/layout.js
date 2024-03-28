document.getElementById("main-header").innerHTML = `
<header><h1>Esto es el header</h1>
<a href='/'><h3>Inicio</h3></a>
</header>
`;

document.getElementById("main-footer").innerHTML = `
<footer>
      <div>
        <p>
          Agradecimientos a
          <a href="https://adventjs.dev/es#retos">AdventurJS</a> por la
          proposicion de estos retos y su aportacion a la comunidad
        </p>
      </div>
      <div class="contact">
        <p>Puedes contactarme a tres de <span id="corner-arrow-icon"></span></p>
        <ul>
          <li>
            <a href="/">
              Correo
              <span id="mail-icon"></span>
            </a>
          </li>
          <li>
            <a href="">
              Linkedin
              <span id="linkedin-icon"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
`;
