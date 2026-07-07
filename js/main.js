/* Mercato: filters, GA events, notify form, lightbox */
(function () {
  'use strict';

  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  /* ---------- Topic filtering (landing page) ---------- */
  var chips = document.querySelectorAll('.chip[data-filter]');
  var allChip = document.querySelector('.chip[data-filter="all"]');

  function applyFilter(topic) {
    document.querySelectorAll('[data-topic]').forEach(function (card) {
      var topics = (card.getAttribute('data-topic') || '').split(' ');
      var show = topic === 'all' || topics.indexOf(topic) !== -1;
      card.classList.toggle('hidden', !show);
    });
    // hide sections whose cards are all hidden
    document.querySelectorAll('.shop-section').forEach(function (section) {
      var cards = section.querySelectorAll('[data-topic]');
      if (!cards.length) return;
      var anyVisible = Array.prototype.some.call(cards, function (c) {
        return !c.classList.contains('hidden');
      });
      section.classList.toggle('hidden', !anyVisible);
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var topic = chip.getAttribute('data-filter');
      applyFilter(topic);
      if (topic !== 'all') track('filter_topic', { topic: topic });
    });
  });

  /* ---------- Click tracking ---------- */
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      var name = el.getAttribute('data-track');
      var product = el.getAttribute('data-product');
      var params = product ? { product: product } : {};
      track(name, params);
    });
  });

  /* ---------- Notify form (Formspree) ---------- */
  document.querySelectorAll('form.notify-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var interests = data.getAll('interests').join(', ');
      var button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Form error');
          track('notify_submit', { interests: interests || 'none selected' });
          form.innerHTML = '<span class="form-success">Grazie! You are on the list.</span>';
        })
        .catch(function () {
          if (button) { button.disabled = false; button.textContent = 'Notify me'; }
          var err = form.querySelector('.form-error');
          if (!err) {
            err = document.createElement('span');
            err.className = 'form-error';
            form.appendChild(err);
          }
          err.textContent = 'That did not go through. Please try again.';
        });
    });
  });

  /* ---------- Lightbox (art page) ---------- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.art-item').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImg.src = item.getAttribute('data-full');
        lightboxImg.alt = item.querySelector('.art-item__meta b').textContent;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function () {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }
})();
