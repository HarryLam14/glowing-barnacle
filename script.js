window.onload = function () {
	L.mapquest.key = "UI5iBaLJvA5AazwNMIBIBs3D6guPDUx3";
	L.mapquest.map("map", {
		center: [37.7749, -122.4194],
		layers: L.mapquest.tileLayer("map"),
		zoom: 12,
	});
};
