chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text : tabs[0].url,
		width : 200,
		height : 200
	});
});
