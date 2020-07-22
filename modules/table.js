;var table = (function table() {
    // if (testUtils.isUndef(app) || testUtils.isUndef(modal)) {
    //     return console.error('Подключите нужные модули');
    // }

    var openModal = function openModal(e) {
        e.stopPropagation();

        if (e.target.tagName !== 'TD') {
            return;
        }

        app.append(modal.modalEl);
    };

    var closeModal = function closeModal(e) {
        if (!e.target.classList.contains('modal')) {
            modal.modalEl.remove();
        }
    }    
    console.log(app);
    app.addEventListener('click', closeModal);
    
    var tableEl = htmlUtils.createHtmlElm('table', { className: 'table', handlers: [ openModal ], innerHTML: '<thead class="table__head"><tr><th>First Name</th><th>Last Name</th></tr></thead><tbody class="table__body body"><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr></tbody>' });
    
    return {
        tableEl: tableEl,
    };
})();

