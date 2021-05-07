"use strict";

const bigContainer = document.querySelector("#bigContainer");

const formatter = new Intl.NumberFormat("ro-RO");

const firebaseConfig = {

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
