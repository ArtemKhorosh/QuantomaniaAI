const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=a77123d001aee3', { headers: { 'Accept': 'application/json' } })
        .then((resp) => resp.json())
        .catch(() => {
            return {
                country: 'us',
            };
        })
        .then((resp) => callback(resp.country));
};