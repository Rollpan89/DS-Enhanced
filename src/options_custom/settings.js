window.addEvent("domready", function () {
    var settings = new FancySettings("DS Enhanced", "icon.jpg");

    var discreet = settings.create({
        "tab": i18n.get("Settings"),
        "group": i18n.get("settings"),
        "name": "discreet",
        "type": "checkbox",
        "label": i18n.get("Dölj bilder helt i 'Diskret läge'."),
        "text": i18n.get("x-characters"),
        "id": "discreet"
    });


    window.addEventListener("change", function (e) {
        const target = e.target.closest("#discreet");
    });


    var s = document.createElement('script');
    s.src = chrome.extension.getURL('js/injected.js');
    (document.head || document.documentElement).appendChild(s);

    s.onload = function () {

        var url = chrome.runtime.getURL("html/popup.html");

        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent("yourCustomEvent", true, true, url);
        document.dispatchEvent(evt);
    };

    settings.align([
        discreet
    ]);

});
