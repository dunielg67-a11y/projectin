// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    console.log("JS conectado ✅");

    const form = document.getElementById("form-medico");
    const output = document.getElementById("file-output");

    if (!form || !output) {
        console.error("No se encontró el formulario o el output ❌");
        return;
    }

    form.addEventListener("submit", function(e){
        e.preventDefault();

        alert("Formulario enviado ✅"); // PRUEBA

        const expediente = `
            <div class="file-header">
                <h3>Expediente Clínico</h3>
                <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <div class="file-block">
                <h4>Datos del Paciente</h4>
                <p><strong>Nombre:</strong> ${nombre.value} ${apellidos.value}</p>
                <p><strong>Edad:</strong> ${edad.value}</p>
                <p><strong>Teléfono:</strong> ${telefono.value}</p>
            </div>

            <div class="file-block">
                <h4>Consulta</h4>
                <p><strong>Motivo:</strong> ${motivo.value}</p>
            </div>
        `;

        output.innerHTML = expediente;
    });

});

// IMPRIMIR
function imprimirExpediente(){
    window.print();
}