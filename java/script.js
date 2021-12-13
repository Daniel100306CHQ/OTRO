let formulario = document.getElementById("my-fomr");
let contenido = document.getElementById("content");
 let formas = [];
 form.addEventListener("submit", function (event) {
         event.preventDefault();
         let data = new Formdata(form);
         formas.push({
             nombre: data.get("nombre"),
             figura: data.get("figura"),
             color: data.get("color"),
         });
         pintar_formas();
     })
 function pintar_formas() {
    content.innerHTML = "";
    formas.foreach((e) => {
        content.insertAdjacentHTML(
            'beforeend',

            <div
                class="${e.figura}"
                style="background: ${e.color};"
            >
                ${e.nombre}
            </div>

        );
    });
}