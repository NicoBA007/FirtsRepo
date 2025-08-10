document.getElementById('formulario-login').addEventListener('submit', function (e) {
  e.preventDefault();

  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();
  const mensajeModal = document.getElementById('modal-mensaje');

  // Mostrar fondo borroso y modal
  document.getElementById('fondo-borroso').style.display = 'block';
  document.getElementById('modal').style.display = 'flex';

  if (correo === "Kevin@mail.com" && contrasena === "admin_123") {
    mensajeModal.textContent = "✅ Inicio de sesión exitoso";
    mensajeModal.style.color = "green";
  } else {
    mensajeModal.textContent = "❌ Datos incorrectos o no existen. Por favor ingrese un usuario válido.";
    mensajeModal.style.color = "red";
  }
});

// Función para cerrar modal y desenfocar
function cerrarModal() {
  document.getElementById('fondo-borroso').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
}

