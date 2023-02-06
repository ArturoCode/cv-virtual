const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_b73e1vu';
   const templateID = 'template_9mkv95o';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado 💕');
    }, (err) => {
      btn.value = 'Repetir';
      alert(JSON.stringify(err));
    });

    document.getElementById('form').reset();

});