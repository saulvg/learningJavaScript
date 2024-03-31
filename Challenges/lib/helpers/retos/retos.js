window.onload = function () {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    //o en mas sencillo pero laboriosos recogiendo campo a campo
    const solutionTextarea = document.getElementById("solution");
    const solutionTextareaValue = solutionTextarea.value;

    const answerContainer = document.getElementById("answer");

    try {
      //Esto sin las comprobacines adecuadas es inseguro por la posible inyection de codigo
      const result = eval(data.solution);
      answerContainer.innerHTML = `
        <div>
            <p>La solucion a tu codigo es ...</p>
            <p>
                ${result}
            </p>
        </div>
      `;
    } catch (error) {
      answerContainer.innerHTML = `
        <div>
          <p>Ocurrió un error al ejecutar el código:</p>
          <p>${error}</p>
        </div>
    `;
    }
    solutionTextarea.value = "";
  });
};
