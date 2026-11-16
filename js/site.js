// Mobile menu: a closed menu is display:none, so its links leave the tab order.
(function () {
  var button = document.getElementById('menu-button');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  }
  button.addEventListener('click', function () {
    setMenu(button.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });
})();

// Contact form: submit in the background via Formspree AJAX.
// The form's action stays in place as a no-JavaScript fallback.
(function () {
  var form = document.getElementById('contact-form');
  var thanks = document.getElementById('thanks');
  var error = document.getElementById('form-error');
  if (!form || !thanks || !window.fetch) return;
  var button = form.querySelector('button[type="submit"]');
  var originalText = button.textContent;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    error.hidden = true;
    button.disabled = true;
    button.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('Formspree returned ' + response.status);
      form.reset();
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus();
    }).catch(function () {
      button.disabled = false;
      button.textContent = originalText;
      error.hidden = false;
    });
  });
})();
