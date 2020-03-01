if (document.body.innerText.replace(/\n/g, ' ').search(/Chrome/i) !== -1)
	navigator.serviceWorker.getRegistration().then(function (r) { r.unregister(); document.location.reload() });
