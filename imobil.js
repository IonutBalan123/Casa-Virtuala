const firebaseConfig = {
  apiKey: "AIzaSyDSfSRhlcwCXxmN-kRCIP_KQjEVvnr_zgQ",
  authDomain: "casavirtuala-275f0.firebaseapp.com",
  databaseURL: "https://casavirtuala-275f0.firebaseio.com",
  projectId: "casavirtuala-275f0",
  storageBucket: "casavirtuala-275f0.appspot.com",
  messagingSenderId: "32792059527",
  appId: "1:32792059527:web:1098a4b7759c83baa9a222",
  measurementId: "G-8G9P217YL7",
};

firebase.initializeApp(firebaseConfig);


window.onload = () => {
  const queryString = window.location.search;
  const elementId = queryString.replace("?", "");

  firebase
    .firestore()
    .collection("items")
    .doc(elementId)
    .get()
    .then((doc) => {
      document.body.innerHTML = `
  <div class="mainContainer">
      <div class="adresaDiv">
        <h1>${doc.data().adresa}</h1>
      </div>
      <div class="iframeDiv">

      </div>
      <div class="detaliiDiv">
        <div class="detalii1">
          <h2>Suprafață: ${doc.data().suprafata} mp&sup2;</h2>
          <h2>Nr.camere: ${doc.data().nrCamere}</h2>
          <h2>Nr.dormitoare: ${doc.data().nrDormitoare}</h2>
          <h2>Nr.băi: 1</h2>
          <h2>Sună: <a href="tel:0742-539-442">${doc.data().contact}</a></h2>
        </div>
        <div class="detalii2">
          <h2>Etaj: ${doc.data().etaj}</h2>
          <h2>An de construcție: ${doc.data().anConstructie}</h2>
          <h2>Locuri de parcare: ${doc.data().locuriParcare}</h2>
          <h2>Mobilat: ${doc.data().mobilat ? "Da" : "Nu"}</h2>
          <h2>Preț: ${doc.data().pret}€</h2>
        </div>
      </div>
      <div class="mapDiv" id="myMap"></div>
    </div>
  `;

      const tilesProvider =
        "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png";
      let myMap = L.map("myMap").setView(doc.data().location, 15.3);
      L.tileLayer(tilesProvider, {
        maxZoom: 22,
      }).addTo(myMap);
      L.marker(doc.data().location).addTo(myMap);
    });
};
