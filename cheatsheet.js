const sceneEl = document.querySelector('a-scene')

const iot = sceneEl.querySelector('#iot_lab');
iot.setAttribute('scale', '0.5 0.5 0.5')

//
const sceneEl = document.querySelector('a-scene')

let el = document.createElement('a-entity');
el.setAttribute("media-loader", { src: "https://sketchfab.com/3d-models/desk-lamp-low-poly-0dded6b36c464294a0ab966b18109f6d", fitToBox: true, resolve: true })
el.setAttribute("position", "5.45 0.86 4.25")
el.setAttribute("rotation", "0 90 0")
el.setAttribute("id", "lamp")

sceneEl.appendChild(el)

let luz = document.createElement('a-entity');
luz.setAttribute("spot-light", "intensity: 0.0")
luz.setAttribute("position", "5.9 1.05 4.25")
sceneEl.appendChild(luz)

