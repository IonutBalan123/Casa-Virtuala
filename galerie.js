"use strict";

const bigContainer = document.querySelector("#bigContainer");

const formatter = new Intl.NumberFormat("ro-RO");

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
  firebase
    .firestore()
    .collection("items")
    .get()
    .then((doc) => {
      doc.forEach((element) => {
        showData(element.data());
      });
    });
};

function showData(data) {
  bigContainer.innerHTML += `
     <div class="item" onclick="window.location.href='/imobil?${data.id}'">
        <div class="itemImgDiv">
        </div>
        <div class="itemDescriptionDiv">
          <p>${data.adresa}</p>
          <div class="itemDescriptionMoreDiv">
              <p>${data.nrCamere} camere</p>
              <p>${data.suprafata}mp&sup2;</p>
            </div>
        </div>
      </div>
  `;
}
