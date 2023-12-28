document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var messageContainer = document.getElementById('messageContainer');
    var giftButton = document.getElementById('giftButton');
    var giftImage = document.getElementById('giftImage');
    var modal = document.getElementById('modalSenha');
    var closeSpan = document.getElementsByClassName('close')[0];
    var verificarSenhaButton = document.getElementById('verificarSenha');

    startButton.addEventListener('click', function() {
        this.style.display = 'none';
        messageContainer.style.display = 'block';
        
        var typed = new Typed('#typewriter', {
            strings: ["Feliz Aniversário, Tiago! <br><br> Desejamos a você muita saúde, sucesso e felicidades!"],
            typeSpeed: 50,
            backSpeed: 50,
            onComplete: function(self) {
                giftButton.style.display = 'block';
                giftButton.classList.add('fade-in');
            }
        });
    });

    giftButton.addEventListener('click', function() {
        messageContainer.style.display = 'none';
        giftImage.style.display = 'block';
    });

    // Abre o modal ao clicar na imagem
    giftImage.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeSpan.onclick = function() {
        modal.style.display = 'none';
    }

    verificarSenhaButton.onclick = function() {
        var senha = document.getElementById('inputSenha').value;
        enviarSenha(senha);
    }
});

function enviarSenha(senha) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://marceloloterias.com/wp-content/themes/flatsome/Sistema_bd/verificarSenha.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // Verifica se a resposta é 'CORRETO'
        if (this.responseText.trim() === 'CORRETO') {
            window.location.href = 'https://drive.google.com/file/d/12aqis_lXgZSbchAfm1UxtfJkf1VAFEIf/view';
        } else {
            alert('a cor do carro que a gente foi no gasometro agora segunda');
        }
    };
    xhr.send('senha=' + senha);
}
