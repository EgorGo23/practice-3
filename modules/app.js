var app = (function app() {
    var loadLibrary = function loadLibrary(path) {
        var script = document.createElement('script');
        script.src = path;

        document.body.append(script);
    };

    (function appStart() {
        var app = document.createElement('div');
        app.id = 'app';
        document.body.prepend(app);

        loadLibrary('./modules/testUtils.js');
        loadLibrary('./test/testUtils.test.js');
        loadLibrary('./modules/htmlUtils.js');
        loadLibrary('./modules/table.js');
        loadLibrary('./modules/modal.js');
        loadLibrary('./modules/panel.js');
    })()

    return {
        loadLibrary: loadLibrary,
    }
})();

