function toggleNav() {
    const navMenu = document.getElementById('main-menu');
    const navButton = document.querySelector('.btn-menu-toggle');

    if (navMenu) {
        navMenu.classList.toggle('open');

        if (navButton) {
            const isExpanded = navButton.getAttribute('aria-expanded') === 'true';
            navButton.setAttribute('aria-expanded', !isExpanded);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateForm()) {
                const data = {
                    nome: document.getElementById('nome').value,
                    email: document.getElementById('email').value,
                    assunto: document.getElementById('assunto').value,
                    mensagem: document.getElementById('mensagem').value
                };

                localStorage.setItem('contato', JSON.stringify(data));

                document.getElementById('success-message').textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                document.getElementById('success-message').style.display = 'block';

                form.reset();
            }
        });
    }
});

function validateForm() {
    let isValid = true;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    if (nome.value.trim() === '') {
        displayError('nome', 'O campo Nome é obrigatório.');
        isValid = false;
    } else {
        clearError('nome');
    }

    if (email.value.trim() === '' || !validateEmailFormat(email.value)) {
        displayError('email', 'Por favor, insira um endereço de e-mail válido.');
        isValid = false;
    } else {
        clearError('email');
    }

    if (assunto.value === '') {
        displayError('assunto', 'Selecione um assunto.');
        isValid = false;
    } else {
        clearError('assunto');
    }

    if (mensagem.value.trim() === '') {
        displayError('mensagem', 'A mensagem não pode estar vazia.');
        isValid = false;
    } else {
        clearError('mensagem');
    }

    if (!isValid) {
        document.getElementById('success-message').style.display = 'none';
    }

    return isValid;

    function validateEmailFormat(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function displayError(fieldId, message) {
        document.getElementById(`error-${fieldId}`).textContent = message;
        document.getElementById(fieldId).style.borderColor = 'var(--color-accent)';
    }

    function clearError(fieldId) {
        document.getElementById(`error-${fieldId}`).textContent = '';
        document.getElementById(fieldId).style.borderColor = '';
    }
}
