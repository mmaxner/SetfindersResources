function dewit(name, id) {
	var container = document.getElementById(id);
	html2canvas(container, {allowTaint : false, useCORS: false}).then(function(canvas) {
		var link = document.createElement("a");
		document.body.appendChild(link);
		link.download = name + ".png";
		link.href = canvas.toDataURL("image/png");
		link.target = '_blank';
		link.click();
	});
}