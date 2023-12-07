"use strict";
(self["webpackChunkbikesforchrist"] = self["webpackChunkbikesforchrist"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  padding: 0;
}

header {
  position: sticky;
  top: 0;
  z-index: 3;
  height: 24vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1DA1F2;
}
header .socials {
  display: flex;
  position: absolute;
  top: 1%;
  left: 85%;
}
header .socials img {
  cursor: pointer;
  margin-left: 10px;
  border-radius: 15px;
}
header .logo {
  max-width: 20vw;
  max-height: 20vh;
  border-radius: 20px;
}
header .headContainer div {
  display: flex;
}
header .headContainer div h1 {
  font-size: 74px;
  color: white;
}
header .headContainer div h3 {
  margin-top: 4vh;
  margin-left: 3vw;
  text-decoration: underline;
  color: white;
}
header .headContainer table {
  color: white;
}
header .headContainer table th {
  cursor: pointer;
  border-radius: 10px;
  background-color: #0066b2;
  width: 10vw;
  height: 3vh;
  transition: all 0.4s ease-in-out;
  margin: 0;
  border: none;
}
header .headContainer table th:hover {
  transition-delay: 1s;
  transition: all 0.4s ease-in-out;
  background-color: white;
  color: #0066b2;
}
header .headContainer table .volunteer td {
  text-align: center;
  border-radius: 10px;
  margin-top: 6px;
  margin-right: 5px;
  width: 10vw;
  height: 3vh;
  border: solid 1px black;
  display: none;
  background-color: #0066b2;
}
header .headContainer table .volunteer:hover td {
  padding: 0;
  display: block;
  right: 22.6%;
}
header .headContainer p {
  text-align: center;
  margin-top: 3vh;
  font-size: 18px;
  color: white;
  font-weight: bold;
}
header .headContainer h5 {
  text-align: center;
  color: white;
  font-size: 15px;
}

main {
  row-gap: 1vh;
  height: 155vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #28282B;
}
main .about {
  margin-bottom: 15vh;
  height: 32vh;
  margin-left: 5vw;
  width: 40vw;
  padding: 30px;
}
main .about h2 {
  color: #1DA1F2;
  font-size: 35px;
  text-align: center;
}
main .about p {
  font-size: larger;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 20px;
  background-color: #343434;
}
main .donate {
  width: 32vw;
  height: 40vh;
  margin-left: 10vw;
}
main .donate h1:hover {
  box-shadow: 0px 0px 10px 5px white;
}
main .donate h1 {
  box-shadow: 0px 0px 10px 5px #1DA1F2;
  background-color: #CC5500;
  position: absolute;
  min-width: 26vw;
  min-height: 26vh;
  height: 48vh;
  width: 30vw;
  border-radius: 10px;
  border: solid 1px red;
  margin-top: 3vh;
  margin-left: 1vw;
  text-align: center;
}
main .donate h1 button:hover {
  color: white;
}
main .donate h1 button {
  z-index: 2;
  transform: scale(1);
  animation: jumpOn 1s;
  cursor: pointer;
  color: black;
  border: none;
  font-size: 24px;
  font-weight: bolder;
  text-decoration: underline;
  background-color: #CC5500;
}
main .donate .sliderWrap {
  z-index: 1;
  margin-top: 7vh;
  margin-left: 3vw;
  border: solid 1px red;
  min-width: 26vw;
  min-height: 26vh;
  max-height: 40vh;
  max-width: 26vw;
  overflow: hidden;
}
main .donate .sliderWrap .imgSlider {
  z-index: 5;
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(0);
}
main .donate .sliderWrap .imgSlider img {
  min-width: 26vw;
  min-height: 26vh;
}
main .scriptDiv {
  background-color: #343434;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  grid-column: 1/3;
}
main .scriptDiv .script {
  font-size: 20px;
  color: white;
}
main .scriptDiv h4 {
  font-size: 18px;
  font-weight: bolder;
  color: #1DA1F2;
  cursor: pointer;
}
main .scriptDiv h4:hover {
  color: white;
}
main .videoDiv {
  height: 55vh;
  grid-column: 1/3;
  display: flex;
  border-radius: 10px;
  background-color: #343434;
  margin-left: 3vw;
  margin-right: 3vw;
}
main .videoDiv iframe {
  margin-left: 1vw;
  margin-top: 5vh;
  border-radius: 10px;
  width: 50vw;
  height: 45vh;
}
main .videoDiv .description {
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 4vw;
  width: 35vw;
  display: flex;
  flex-direction: column;
}
main .videoDiv .description h3 {
  font-size: 34px;
  color: #1DA1F2;
}
main .videoDiv .description p {
  font-size: 24px;
  color: white;
}
main .partnerDiv {
  margin: 2vh 3vw;
  background-color: #343434;
  grid-column: 1/3;
  border-radius: 10px;
}
main .partnerDiv h2 {
  text-align: center;
  color: #1DA1F2;
  font-size: 30px;
}
main .partnerDiv .partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
main .partnerDiv .partners li {
  margin: 10px 10px;
  font-size: 20px;
  color: white;
  text-decoration: underline;
}

footer {
  height: 40vh;
  background-color: #1DA1F2;
}
footer #BG {
  margin-left: 70%;
  border-radius: 10px;
}
footer div {
  display: flex;
  justify-content: center;
}
footer div h1 {
  margin-top: 2vh;
  font-size: 40px;
  color: white;
}
footer div p {
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 28px;
  margin-top: 2vh;
  margin-left: 10vw;
}
footer .foot {
  height: 20vh;
  display: flex;
  justify-content: space-around;
}
footer .foot .imgs img {
  margin-left: 5vw;
  border-radius: 10px;
}
footer .foot form {
  align-items: center;
  width: 20vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
}
footer .foot form label {
  font-size: 19px;
  margin-top: 2vh;
}
footer .foot form input {
  border: none;
  height: 3vh;
  width: 15vw;
  margin-top: 2vh;
}
footer .foot form .submit {
  color: white;
  background-color: #0066b2;
  border-radius: 10px;
  margin-top: 2vh;
  cursor: pointer;
}

@keyframes jumpOn {
  from {
    transform: scale(0);
  }
  70% {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
}
@media (max-width: 1400px) {
  main {
    height: 160vh;
  }
  main .donate h1 {
    min-height: 30vh;
    margin-top: 7vh;
    max-height: 43vh;
  }
  main .donate .sliderWrap {
    margin-top: 11vh;
  }
  main .videoDiv iframe {
    margin-left: 5vw;
    width: 40vw;
  }
  main .videoDiv .description p {
    font-size: 20px;
  }
  main .videoDiv .description h3 {
    font-size: 28px;
  }
  footer {
    height: 35vh;
  }
}
@media (max-width: 1100px) {
  body {
    overflow-x: hidden;
  }
  header {
    position: sticky;
    top: 0;
    z-index: 3;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1DA1F2;
  }
  header .socials {
    display: flex;
    position: absolute;
    top: 1%;
    left: 80%;
  }
  header .socials img {
    cursor: pointer;
    border-radius: 15px;
  }
  header .logo {
    max-width: 20vw;
    max-height: 20vh;
    border-radius: 20px;
  }
  header .headContainer div {
    display: flex;
  }
  header .headContainer div h1 {
    font-size: 50px;
    color: white;
  }
  header .headContainer div h3 {
    margin-top: 3vh;
    margin-left: 3vw;
    text-decoration: underline;
    color: white;
  }
  header .headContainer table {
    color: white;
  }
  header .headContainer table th {
    cursor: pointer;
    border-radius: 10px;
    background-color: #0066b2;
    width: 10vw;
    height: 3vh;
    transition: all 0.4s ease-in-out;
    margin: 0;
    border: none;
  }
  header .headContainer table th:hover {
    transition-delay: 1s;
    transition: all 0.4s ease-in-out;
    background-color: white;
    color: #0066b2;
  }
  header .headContainer table .volunteer td {
    text-align: center;
    border-radius: 10px;
    margin-top: 6px;
    margin-right: 5px;
    width: 10vw;
    height: 3vh;
    border: solid 1px black;
    display: none;
    background-color: #0066b2;
  }
  header .headContainer table .volunteer:hover td {
    padding: 0;
    display: block;
    right: 22.6%;
  }
  header .headContainer p {
    margin-left: -7vw;
    text-align: center;
    margin-top: 3vh;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
  header .headContainer h5 {
    text-align: center;
    color: white;
    font-size: 15px;
  }
  main {
    width: 100%;
    row-gap: 1vh;
    height: 200vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #28282B;
  }
  main .about {
    margin-bottom: 20vh;
    height: 32vh;
    width: 40vw;
    padding: 30px;
  }
  main .about h2 {
    color: #1DA1F2;
    font-size: 35px;
    text-align: center;
  }
  main .about p {
    font-size: 16px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    min-width: 40vw;
    padding: 10px;
    background-color: #343434;
  }
  main .donate {
    width: 32vw;
    height: 40vh;
    margin-left: 10vw;
  }
  main .donate h1:hover {
    box-shadow: 0px 0px 10px 5px white;
  }
  main .donate h1 {
    box-shadow: 0px 0px 10px 5px #1DA1F2;
    background-color: #CC5500;
    position: absolute;
    min-width: 26vw;
    min-height: 26vh;
    height: 48vh;
    max-height: 35vh;
    width: 30vw;
    border-radius: 10px;
    border: solid 1px red;
    margin-top: 10vh;
    text-align: center;
  }
  main .donate h1 button:hover {
    color: white;
  }
  main .donate h1 button {
    z-index: 2;
    transform: scale(1);
    animation: jumpOn 1s;
    cursor: pointer;
    color: black;
    border: none;
    font-size: 24px;
    font-weight: bolder;
    text-decoration: underline;
    background-color: #CC5500;
  }
  main .donate .sliderWrap {
    z-index: 1;
    margin-top: 15vh;
    border: solid 1px red;
    min-width: 26vw;
    min-height: 26vh;
    max-height: 35vh;
    max-width: 26vw;
    overflow: hidden;
  }
  main .donate .sliderWrap .imgSlider {
    z-index: 5;
    display: flex;
    min-width: 26vw;
    min-height: 26vh;
    transition: transform 1s ease-in-out;
    transform: translateX(0);
  }
  main .donate .sliderWrap .imgSlider img {
    min-width: 26vw;
    min-height: 26vh;
  }
  main .scriptDiv {
    background-color: #343434;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    grid-column: 1/3;
  }
  main .scriptDiv .script {
    font-size: 20px;
    color: white;
  }
  main .scriptDiv h4 {
    font-size: 18px;
    font-weight: bolder;
    color: #1DA1F2;
    cursor: pointer;
  }
  main .scriptDiv h4:hover {
    color: white;
  }
  main .videoDiv {
    height: 55vh;
    grid-column: 1/3;
    display: flex;
    border-radius: 10px;
    background-color: #343434;
    margin-left: 0vw;
    margin-right: 0;
  }
  main .videoDiv iframe {
    margin-left: 1vw;
    margin-top: 5vh;
    border-radius: 10px;
    width: 50vw;
    height: 45vh;
  }
  main .videoDiv .description {
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: 4vw;
    width: 35vw;
    display: flex;
    flex-direction: column;
  }
  main .videoDiv .description h3 {
    font-size: 24px;
    color: #1DA1F2;
  }
  main .videoDiv .description p {
    font-size: 18px;
    color: white;
  }
  main .partnerDiv {
    margin: 2vh 0vw;
    background-color: #343434;
    grid-column: 1/3;
    border-radius: 10px;
  }
  main .partnerDiv h2 {
    text-align: center;
    color: #1DA1F2;
    font-size: 30px;
  }
  main .partnerDiv .partners {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  main .partnerDiv .partners li {
    margin: 10px 10px;
    font-size: 20px;
    color: white;
    text-decoration: underline;
  }
  footer {
    width: 100%;
    height: 45vh;
    background-color: #1DA1F2;
  }
  footer #BG {
    margin-left: 70%;
    border-radius: 10px;
  }
  footer div {
    display: flex;
    justify-content: center;
  }
  footer div h1 {
    margin-top: 2vh;
    font-size: 40px;
    color: white;
  }
  footer div p {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    margin-top: 2vh;
    margin-left: 10vw;
  }
  footer .foot {
    height: 20vh;
    display: flex;
    justify-content: space-around;
  }
  footer .foot .imgs img {
    margin-left: 5vw;
    border-radius: 10px;
  }
  footer .foot form {
    align-items: center;
    width: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
  }
  footer .foot form label {
    font-size: 19px;
    margin-top: 2vh;
  }
  footer .foot form input {
    border: none;
    height: 3vh;
    width: 15vw;
    margin-top: 2vh;
  }
  footer .foot form .submit {
    color: white;
    background-color: #0066b2;
    border-radius: 10px;
    margin-top: 2vh;
    cursor: pointer;
  }
}
@media (max-width: 600px) {
  body {
    margin: 0;
    padding: 0;
    margin-right: -27vw;
  }
  header {
    position: sticky;
    top: 0;
    z-index: 3;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1DA1F2;
  }
  header .socials {
    display: flex;
    position: absolute;
    top: 1%;
    left: 80%;
  }
  header .socials img {
    cursor: pointer;
    border-radius: 15px;
  }
  header .logo {
    max-width: 20vw;
    max-height: 20vh;
    border-radius: 20px;
  }
  header .headContainer {
    padding: 50px;
    border: 1px solid red;
  }
  header .headContainer div {
    display: flex;
  }
  header .headContainer div h1 {
    font-size: 50px;
    color: white;
  }
  header .headContainer div h3 {
    margin-top: 3vh;
    margin-left: 3vw;
    text-decoration: underline;
    color: white;
  }
  header .headContainer table {
    color: white;
  }
  header .headContainer table th {
    cursor: pointer;
    border-radius: 10px;
    background-color: #0066b2;
    width: 10vw;
    height: 3vh;
    transition: all 0.4s ease-in-out;
    margin: 0;
    border: none;
  }
  header .headContainer table th:hover {
    transition-delay: 1s;
    transition: all 0.4s ease-in-out;
    background-color: white;
    color: #0066b2;
  }
  header .headContainer table .volunteer td {
    text-align: center;
    border-radius: 10px;
    margin-top: 6px;
    margin-right: 5px;
    width: 10vw;
    height: 3vh;
    border: solid 1px black;
    display: none;
    background-color: #0066b2;
  }
  header .headContainer table .volunteer:hover td {
    padding: 0;
    display: block;
    right: 22.6%;
  }
  header .headContainer p {
    margin-left: -7vw;
    text-align: center;
    margin-top: 3vh;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
  header .headContainer h5 {
    text-align: center;
    color: white;
    font-size: 15px;
  }
  main {
    width: 100%;
    row-gap: 1vh;
    height: 200vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #28282B;
  }
  main .about {
    margin-bottom: 20vh;
    height: 32vh;
    width: 40vw;
    padding: 30px;
  }
  main .about h2 {
    color: #1DA1F2;
    font-size: 35px;
    text-align: center;
  }
  main .about p {
    font-size: 16px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    min-width: 40vw;
    padding: 10px;
    background-color: #343434;
  }
  main .donate {
    width: 32vw;
    height: 40vh;
    margin-left: 10vw;
  }
  main .donate h1:hover {
    box-shadow: 0px 0px 10px 5px white;
  }
  main .donate h1 {
    box-shadow: 0px 0px 10px 5px #1DA1F2;
    background-color: #CC5500;
    position: absolute;
    min-width: 26vw;
    min-height: 26vh;
    height: 48vh;
    max-height: 35vh;
    width: 30vw;
    border-radius: 10px;
    border: solid 1px red;
    margin-top: 10vh;
    text-align: center;
  }
  main .donate h1 button:hover {
    color: white;
  }
  main .donate h1 button {
    z-index: 2;
    transform: scale(1);
    animation: jumpOn 1s;
    cursor: pointer;
    color: black;
    border: none;
    font-size: 24px;
    font-weight: bolder;
    text-decoration: underline;
    background-color: #CC5500;
  }
  main .donate .sliderWrap {
    z-index: 1;
    margin-top: 15vh;
    border: solid 1px red;
    min-width: 26vw;
    min-height: 26vh;
    max-height: 35vh;
    max-width: 26vw;
    overflow: hidden;
  }
  main .donate .sliderWrap .imgSlider {
    z-index: 5;
    display: flex;
    min-width: 26vw;
    min-height: 26vh;
    transition: transform 1s ease-in-out;
    transform: translateX(0);
  }
  main .donate .sliderWrap .imgSlider img {
    min-width: 26vw;
    min-height: 26vh;
  }
  main .scriptDiv {
    background-color: #343434;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    grid-column: 1/3;
  }
  main .scriptDiv .script {
    font-size: 20px;
    color: white;
  }
  main .scriptDiv h4 {
    font-size: 18px;
    font-weight: bolder;
    color: #1DA1F2;
    cursor: pointer;
  }
  main .scriptDiv h4:hover {
    color: white;
  }
  main .videoDiv {
    height: 55vh;
    grid-column: 1/3;
    display: flex;
    border-radius: 10px;
    background-color: #343434;
    margin-left: 0vw;
    margin-right: 0;
  }
  main .videoDiv iframe {
    margin-left: 1vw;
    margin-top: 5vh;
    border-radius: 10px;
    width: 50vw;
    height: 45vh;
  }
  main .videoDiv .description {
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: 4vw;
    width: 35vw;
    display: flex;
    flex-direction: column;
  }
  main .videoDiv .description h3 {
    font-size: 24px;
    color: #1DA1F2;
  }
  main .videoDiv .description p {
    font-size: 18px;
    color: white;
  }
  main .partnerDiv {
    margin: 2vh 0vw;
    background-color: #343434;
    grid-column: 1/3;
    border-radius: 10px;
  }
  main .partnerDiv h2 {
    text-align: center;
    color: #1DA1F2;
    font-size: 30px;
  }
  main .partnerDiv .partners {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  main .partnerDiv .partners li {
    margin: 10px 10px;
    font-size: 20px;
    color: white;
    text-decoration: underline;
  }
  footer {
    width: 100%;
    height: 45vh;
    background-color: #1DA1F2;
  }
  footer #BG {
    margin-left: 70%;
    border-radius: 10px;
  }
  footer div {
    display: flex;
    justify-content: center;
  }
  footer div h1 {
    margin-top: 2vh;
    font-size: 40px;
    color: white;
  }
  footer div p {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 28px;
    margin-top: 2vh;
    margin-left: 10vw;
  }
  footer .foot {
    height: 20vh;
    display: flex;
    justify-content: space-around;
  }
  footer .foot .imgs img {
    margin-left: 5vw;
    border-radius: 10px;
  }
  footer .foot form {
    align-items: center;
    width: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
  }
  footer .foot form label {
    font-size: 19px;
    margin-top: 2vh;
  }
  footer .foot form input {
    border: none;
    height: 3vh;
    width: 15vw;
    margin-top: 2vh;
  }
  footer .foot form .submit {
    color: white;
    background-color: #0066b2;
    border-radius: 10px;
    margin-top: 2vh;
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,yCAAA;AACJ;;AAIA;EAEI,UAAA;AAFJ;;AAIA;EACI,gBAAA;EACA,MAAA;EACA,UAAA;EAYA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,yBAAA;AAZJ;AAHI;EACI,aAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;AAKR;AAJS;EACG,eAAA;EACA,iBAAA;EACA,mBAAA;AAMZ;AAEI;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;AAAR;AAGQ;EACI,aAAA;AADZ;AAEQ;EACI,eAAA;EACA,YAAA;AAAZ;AAEQ;EACI,eAAA;EACA,gBAAA;EACA,0BAAA;EACA,YAAA;AAAZ;AAGQ;EACI,YAAA;AADZ;AAEa;EACG,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,WAAA;EACC,WAAA;EACA,gCAAA;EACD,SAAA;EACA,YAAA;AAAhB;AAEa;EACG,oBAAA;EACA,gCAAA;EACA,uBAAA;EACA,cAAA;AAAhB;AAIgB;EACI,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACD,aAAA;EACA,yBAAA;AAFnB;AAMgB;EAEI,UAAA;EAEC,cAAA;EACD,YAAA;AANpB;AAUI;EACI,kBAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AARR;AAUI;EACI,kBAAA;EACA,YAAA;EACA,eAAA;AARR;;AAYA;EACI,YAAA;EACA,aAAA;EACC,aAAA;EACA,8BAAA;EACD,yBAAA;AATJ;AAUI;EACI,mBAAA;EACD,YAAA;EACJ,gBAAA;EACK,WAAA;EACA,aAAA;AARR;AASQ;EACI,cAlHJ;EAmHI,eAAA;EACF,kBAAA;AAPV;AASQ;EAEI,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,yBA9HD;AAsHX;AAWI;EAKI,WAAA;EACA,YAAA;EACA,iBAAA;AAbR;AAQQ;EACI,kCAAA;AANZ;AAWM;EAmBM,oCAAA;EACA,yBAAA;EAEA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AA5BZ;AADY;EACK,YAAA;AAGjB;AACY;EACI,UAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,0BAAA;EACA,yBAAA;AAChB;AAeI;EACI,UAAA;EACD,eAAA;EAEA,gBAAA;EACE,qBAAA;EACA,eAAA;EACA,gBAAA;EACD,gBAAA;EACA,eAAA;EACA,gBAAA;AAdR;AAeQ;EACI,UAAA;EACA,aAAA;EAEA,oCAAA;EACA,wBAAA;AAdZ;AAeY;EAEI,eAAA;EACA,gBAAA;AAdhB;AAmBA;EAEI,yBArMO;EAsMP,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;AAlBJ;AAoBI;EACI,eAAA;EACA,YAAA;AAlBR;AAoBI;EACG,eAAA;EACA,mBAAA;EACA,cAnNC;EAoND,eAAA;AAlBP;AAoBI;EACI,YAAA;AAlBR;AAqBA;EACI,YAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAhOO;EAiOP,gBAAA;EACA,iBAAA;AAnBJ;AAqBI;EACI,gBAAA;EACA,eAAA;EACC,mBAAA;EACD,WAAA;EACA,YAAA;AAnBR;AAqBI;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,sBAAA;AApBR;AAqBI;EACI,eAAA;EACA,cApPA;AAiOR;AAqBI;EACI,eAAA;EACA,YAAA;AAnBR;AAuBA;EACI,eAAA;EACA,yBA/PO;EAgQP,gBAAA;EACA,mBAAA;AArBJ;AAsBI;EACI,kBAAA;EACA,cAnQA;EAoQA,eAAA;AApBR;AAsBA;EAGI,aAAA;EACA,eAAA;EACA,8BAAA;AAtBJ;AAuBI;EACI,iBAAA;EACA,eAAA;EACA,YAAA;EACA,0BAAA;AArBR;;AA0BA;EAEI,YAAA;EAKA,yBA5RI;AAgQR;AAwBG;EACC,gBAAA;EACA,mBAAA;AAtBJ;AAyBK;EACG,aAAA;EACA,uBAAA;AAvBR;AAwBQ;EACI,eAAA;EACA,eAAA;EACA,YAAA;AAtBZ;AAwBQ;EACI,YAAA;EACA,4CAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;AAtBZ;AAyBK;EAQG,YAAA;EACA,aAAA;EACA,6BAAA;AA9BR;AAsBY;EACI,gBAAA;EACA,mBAAA;AApBhB;AA2BQ;EACK,mBAAA;EAED,WAAA;EAmBA,YAAA;EACA,aAAA;EACA,sBAAA;AA5CZ;AAwBY;EACI,eAAA;EACA,eAAA;AAtBhB;AAwBY;EACI,YAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AAtBhB;AAwBY;EACI,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AAtBhB;;AA+BA;EACI;IACI,mBAAA;EA5BN;EA8BE;IACI,qBAAA;EA5BN;EA8BE;IACI,mBAAA;EA5BN;AACF;AA8BA;EACI;IACI,aAAA;EA5BN;EA8BU;IACA,gBAAA;IACA,eAAA;IACA,gBAAA;EA5BV;EA8BU;IACI,gBAAA;EA5Bd;EAgCU;IACI,gBAAA;IACA,WAAA;EA9Bd;EAiCc;IACI,eAAA;EA/BlB;EAiCc;IACI,eAAA;EA/BlB;EAoCE;IACI,YAAA;EAlCN;AACF;AAoCA;EAEK;IACC,kBAAA;EAnCJ;EAqCG;IACG,gBAAA;IACA,MAAA;IACA,UAAA;IAYA,YAAA;IACA,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,yBAAA;EA9CN;EA+BM;IACI,aAAA;IACA,kBAAA;IACA,OAAA;IACA,SAAA;EA7BV;EA8BW;IACG,eAAA;IAEA,mBAAA;EA7Bd;EAqCM;IACI,eAAA;IACA,gBAAA;IACA,mBAAA;EAnCV;EAsCU;IACI,aAAA;EApCd;EAqCU;IACI,eAAA;IACA,YAAA;EAnCd;EAqCU;IACI,eAAA;IACA,gBAAA;IACA,0BAAA;IACA,YAAA;EAnCd;EAsCU;IACI,YAAA;EApCd;EAqCe;IACG,eAAA;IACA,mBAAA;IACA,yBAAA;IACA,WAAA;IACC,WAAA;IACA,gCAAA;IACD,SAAA;IACA,YAAA;EAnClB;EAqCe;IACG,oBAAA;IACA,gCAAA;IACA,uBAAA;IACA,cAAA;EAnClB;EAuCkB;IACI,kBAAA;IACA,mBAAA;IACA,eAAA;IACA,iBAAA;IACA,WAAA;IACA,WAAA;IACA,uBAAA;IACD,aAAA;IACA,yBAAA;EArCrB;EAyCkB;IAEI,UAAA;IAEC,cAAA;IACD,YAAA;EAzCtB;EA6CM;IACI,iBAAA;IACA,kBAAA;IACA,eAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;EA3CV;EA6CM;IACI,kBAAA;IACA,YAAA;IACA,eAAA;EA3CV;EA+CE;IACI,WAAA;IACA,YAAA;IACA,aAAA;IACC,aAAA;IACA,8BAAA;IACD,yBAAA;EA7CN;EA8CM;IACI,mBAAA;IACD,YAAA;IAEC,WAAA;IACA,aAAA;EA7CV;EA8CU;IACI,cAlfR;IAmfQ,eAAA;IACF,kBAAA;EA5CZ;EA8CU;IAEI,eAAA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;IACA,eAAA;IACA,aAAA;IACA,yBA/fL;EAkdT;EAgDM;IAKI,WAAA;IACA,YAAA;IACA,iBAAA;EAlDV;EA6CU;IACI,kCAAA;EA3Cd;EAgDQ;IAmBM,oCAAA;IACA,yBAAA;IAEA,kBAAA;IACA,eAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,WAAA;IACA,mBAAA;IACA,qBAAA;IACA,gBAAA;IAEA,kBAAA;EAlEd;EAoCc;IACK,YAAA;EAlCnB;EAsCc;IACI,UAAA;IACA,mBAAA;IACA,oBAAA;IACA,eAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,0BAAA;IACA,yBAAA;EApClB;EAqDM;IACI,UAAA;IACD,gBAAA;IAGE,qBAAA;IACA,eAAA;IACA,gBAAA;IACD,gBAAA;IACA,eAAA;IACA,gBAAA;EArDV;EAsDU;IACI,UAAA;IACA,aAAA;IACA,eAAA;IACQ,gBAAA;IACR,oCAAA;IACA,wBAAA;EApDd;EAqDc;IAEI,eAAA;IACA,gBAAA;EApDlB;EAyDE;IAEI,yBAxkBG;IAykBH,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,uBAAA;IACA,YAAA;IACA,gBAAA;EAxDN;EA0DM;IACI,eAAA;IACA,YAAA;EAxDV;EA0DM;IACG,eAAA;IACA,mBAAA;IACA,cAtlBH;IAulBG,eAAA;EAxDT;EA0DM;IACI,YAAA;EAxDV;EA2DE;IACI,YAAA;IACA,gBAAA;IACA,aAAA;IACA,mBAAA;IACA,yBAnmBG;IAomBH,gBAAA;IACA,eAAA;EAzDN;EA2DM;IACI,gBAAA;IACA,eAAA;IACC,mBAAA;IACD,WAAA;IACA,YAAA;EAzDV;EA2DM;IACI,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,WAAA;IAEA,aAAA;IACA,sBAAA;EA1DV;EA2DM;IACI,eAAA;IACA,cAvnBJ;EA8jBN;EA2DM;IACI,eAAA;IACA,YAAA;EAzDV;EA6DE;IACI,eAAA;IACA,yBAloBG;IAmoBH,gBAAA;IACA,mBAAA;EA3DN;EA4DM;IACI,kBAAA;IACA,cAtoBJ;IAuoBI,eAAA;EA1DV;EA4DE;IAGI,aAAA;IACA,eAAA;IACA,8BAAA;EA5DN;EA6DM;IACI,iBAAA;IACA,eAAA;IACA,YAAA;IACA,0BAAA;EA3DV;EAgEE;IACG,WAAA;IACC,YAAA;IAKA,yBA/pBA;EA6lBN;EA8DK;IACC,gBAAA;IACA,mBAAA;EA5DN;EA+DO;IACG,aAAA;IACA,uBAAA;EA7DV;EA8DU;IACI,eAAA;IACA,eAAA;IACA,YAAA;EA5Dd;EA8DU;IACI,YAAA;IACA,4CAAA;IACA,eAAA;IACA,eAAA;IACA,iBAAA;EA5Dd;EA+DO;IAQG,YAAA;IACA,aAAA;IACA,6BAAA;EApEV;EA4Dc;IACI,gBAAA;IACA,mBAAA;EA1DlB;EAiEU;IACK,mBAAA;IAED,WAAA;IAmBA,YAAA;IACA,aAAA;IACA,sBAAA;EAlFd;EA8Dc;IACI,eAAA;IACA,eAAA;EA5DlB;EA8Dc;IACI,YAAA;IACA,WAAA;IACA,WAAA;IACA,eAAA;EA5DlB;EA8Dc;IACI,YAAA;IACA,yBAAA;IACA,mBAAA;IACA,eAAA;IACA,eAAA;EA5DlB;AACF;AAqEA;EAEM;IACE,SAAA;IACA,UAAA;IAEA,mBAAA;EArEN;EAuEI;IAEG,gBAAA;IACA,MAAA;IACA,UAAA;IAYA,YAAA;IACA,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,yBAAA;EAjFP;EAkEO;IACI,aAAA;IACA,kBAAA;IACA,OAAA;IACA,SAAA;EAhEX;EAiEY;IACG,eAAA;IAEA,mBAAA;EAhEf;EAwEO;IACI,eAAA;IACA,gBAAA;IACA,mBAAA;EAtEX;EAwEO;IACG,aAAA;IACA,qBAAA;EAtEV;EAuEW;IACI,aAAA;EArEf;EAsEW;IACI,eAAA;IACA,YAAA;EApEf;EAsEW;IACI,eAAA;IACA,gBAAA;IACA,0BAAA;IACA,YAAA;EApEf;EAuEW;IACI,YAAA;EArEf;EAsEgB;IACG,eAAA;IACA,mBAAA;IACA,yBAAA;IACA,WAAA;IACC,WAAA;IACA,gCAAA;IACD,SAAA;IACA,YAAA;EApEnB;EAsEgB;IACG,oBAAA;IACA,gCAAA;IACA,uBAAA;IACA,cAAA;EApEnB;EAwEmB;IACI,kBAAA;IACA,mBAAA;IACA,eAAA;IACA,iBAAA;IACA,WAAA;IACA,WAAA;IACA,uBAAA;IACD,aAAA;IACA,yBAAA;EAtEtB;EA0EmB;IAEI,UAAA;IAEC,cAAA;IACD,YAAA;EA1EvB;EA8EO;IACI,iBAAA;IACA,kBAAA;IACA,eAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;EA5EX;EA8EO;IACI,kBAAA;IACA,YAAA;IACA,eAAA;EA5EX;EAgFG;IACI,WAAA;IACA,YAAA;IACA,aAAA;IACC,aAAA;IACA,8BAAA;IACD,yBAAA;EA9EP;EA+EO;IACI,mBAAA;IACD,YAAA;IAEC,WAAA;IACA,aAAA;EA9EX;EA+EW;IACI,cAj1BT;IAk1BS,eAAA;IACF,kBAAA;EA7Eb;EA+EW;IAEI,eAAA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;IACA,eAAA;IACA,aAAA;IACA,yBA91BN;EAgxBT;EAiFO;IAKI,WAAA;IACA,YAAA;IACA,iBAAA;EAnFX;EA8EW;IACI,kCAAA;EA5Ef;EAiFS;IAmBM,oCAAA;IACA,yBAAA;IAEA,kBAAA;IACA,eAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,WAAA;IACA,mBAAA;IACA,qBAAA;IACA,gBAAA;IAEA,kBAAA;EAnGf;EAqEe;IACK,YAAA;EAnEpB;EAuEe;IACI,UAAA;IACA,mBAAA;IACA,oBAAA;IACA,eAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,0BAAA;IACA,yBAAA;EArEnB;EAsFO;IACI,UAAA;IACD,gBAAA;IAGE,qBAAA;IACA,eAAA;IACA,gBAAA;IACD,gBAAA;IACA,eAAA;IACA,gBAAA;EAtFX;EAuFW;IACI,UAAA;IACA,aAAA;IACA,eAAA;IACQ,gBAAA;IACR,oCAAA;IACA,wBAAA;EArFf;EAsFe;IAEI,eAAA;IACA,gBAAA;EArFnB;EA0FG;IAEI,yBAv6BE;IAw6BF,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,uBAAA;IACA,YAAA;IACA,gBAAA;EAzFP;EA2FO;IACI,eAAA;IACA,YAAA;EAzFX;EA2FO;IACG,eAAA;IACA,mBAAA;IACA,cAr7BJ;IAs7BI,eAAA;EAzFV;EA2FO;IACI,YAAA;EAzFX;EA4FG;IACI,YAAA;IACA,gBAAA;IACA,aAAA;IACA,mBAAA;IACA,yBAl8BE;IAm8BF,gBAAA;IACA,eAAA;EA1FP;EA4FO;IACI,gBAAA;IACA,eAAA;IACC,mBAAA;IACD,WAAA;IACA,YAAA;EA1FX;EA4FO;IACI,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,WAAA;IAEA,aAAA;IACA,sBAAA;EA3FX;EA4FO;IACI,eAAA;IACA,cAt9BL;EA43BN;EA4FO;IACI,eAAA;IACA,YAAA;EA1FX;EA8FG;IACI,eAAA;IACA,yBAj+BE;IAk+BF,gBAAA;IACA,mBAAA;EA5FP;EA6FO;IACI,kBAAA;IACA,cAr+BL;IAs+BK,eAAA;EA3FX;EA6FG;IAGI,aAAA;IACA,eAAA;IACA,8BAAA;EA7FP;EA8FO;IACI,iBAAA;IACA,eAAA;IACA,YAAA;IACA,0BAAA;EA5FX;EAiGG;IACG,WAAA;IACC,YAAA;IAKA,yBA9/BD;EA25BN;EA+FM;IACC,gBAAA;IACA,mBAAA;EA7FP;EAgGQ;IACG,aAAA;IACA,uBAAA;EA9FX;EA+FW;IACI,eAAA;IACA,eAAA;IACA,YAAA;EA7Ff;EA+FW;IACI,YAAA;IACA,4CAAA;IACA,eAAA;IACA,eAAA;IACA,iBAAA;EA7Ff;EAgGQ;IAQG,YAAA;IACA,aAAA;IACA,6BAAA;EArGX;EA6Fe;IACI,gBAAA;IACA,mBAAA;EA3FnB;EAkGW;IACK,mBAAA;IAED,WAAA;IAmBA,YAAA;IACA,aAAA;IACA,sBAAA;EAnHf;EA+Fe;IACI,eAAA;IACA,eAAA;EA7FnB;EA+Fe;IACI,YAAA;IACA,WAAA;IACA,WAAA;IACA,eAAA;EA7FnB;EA+Fe;IACI,YAAA;IACA,yBAAA;IACA,mBAAA;IACA,eAAA;IACA,eAAA;EA7FnB;AACF","sourcesContent":["*{\n    margin:0;\n    font-family:Arial, Helvetica, sans-serif;\n}\n$jetBlack: #343434;\n$blue:  #1DA1F2;\n$bg: #28282B;\nbody{\n   \n    padding: 0;\n  }\nheader{\n    position: sticky;\n    top: 0;\n    z-index: 3;\n    .socials{\n        display: flex;\n        position: absolute;\n        top: 1%;\n        left: 85%;\n         img{\n            cursor: pointer;\n            margin-left: 10px;\n            border-radius: 15px;\n         }\n    }\n    height:24vh ;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #1DA1F2;\n    .logo{\n        max-width: 20vw;\n        max-height: 20vh;\n        border-radius: 20px;\n    }\n    .headContainer{\n        div{\n            display: flex;\n        h1{\n            font-size: 74px;\n            color: white;\n        }\n        h3{\n            margin-top: 4vh;\n            margin-left: 3vw;\n            text-decoration: underline;\n            color: white;\n        }\n    }\n        table{\n            color: white;\n             th{\n                cursor: pointer;\n                border-radius: 10px;\n                background-color: #0066b2;\n                width: 10vw;\n                 height:3vh;\n                 transition: all .4s ease-in-out;\n                margin: 0;\n                border: none;\n             }\n             th:hover{\n                transition-delay: 1s;\n                transition: all .4s ease-in-out;\n                background-color: white;\n                color: #0066b2;\n             }\n             .volunteer{\n                 \n                td{\n                    text-align: center;\n                    border-radius: 10px;\n                    margin-top: 6px;\n                    margin-right:5px;\n                    width: 10vw;\n                    height: 3vh;\n                    border: solid 1px black;\n                   display: none;\n                   background-color: #0066b2;\n                }\n             }\n             .volunteer:hover{\n                td{\n                \n                    padding: 0;\n                    \n                     display: block;\n                    right: 22.6%;\n                }\n            }\n    }\n    p{\n        text-align: center;\n        margin-top: 3vh;\n        font-size: 18px;\n        color: white;\n        font-weight: bold;\n    }\n    h5{\n        text-align: center;\n        color: white;\n        font-size: 15px;\n    }\n    }\n}\nmain{\n    row-gap: 1vh;\n    height: 155vh;\n     display: grid;\n     grid-template-columns: 1fr 1fr;\n    background-color: \t#28282B;\n    .about{\n        margin-bottom: 15vh;\n       height: 32vh;\n   margin-left: 5vw;\n        width: 40vw;\n        padding: 30px;\n        h2{\n            color: $blue;\n            font-size: 35px;\n          text-align: center;  \n        }\n        p{\n        \n            font-size: larger;\n            color: white;\n            font-weight: bold;\n            border-radius: 10px;\n            padding: 20px;\n            background-color: $jetBlack;\n        }\n    }\n    .donate{\n       \n        h1:hover{\n            box-shadow: 0px 0px 10px 5px white;\n        }\n        width: 32vw;\n        height: 40vh;\n        margin-left: 10vw;\n      h1{\n       \n            button:hover{\n                 color:white;\n                \n            }\n        \n            button{\n                z-index: 2;\n                transform: scale(1);\n                animation: jumpOn 1s;\n                cursor: pointer;\n                color: black;\n                border: none;\n                font-size: 24px;\n                font-weight: bolder;\n                text-decoration: underline;\n                background-color: \t#CC5500;\n            }\n            box-shadow: 0px 0px 10px 5px $blue;\n            background-color: \t#CC5500;\n           \n            position: absolute;\n            min-width: 26vw;\n            min-height: 26vh;\n            height:48vh;\n            width:  30vw;\n            border-radius: 10px;\n            border: solid 1px red;\n            margin-top: 3vh;\n            margin-left: 1vw;\n            text-align: center;\n        }\n    .sliderWrap{\n        z-index: 1;\n       margin-top: 7vh;\n       \n       margin-left: 3vw;\n         border: solid 1px red;\n         min-width: 26vw;\n         min-height: 26vh;\n        max-height: 40vh;\n        max-width: 26vw;\n        overflow: hidden;\n        .imgSlider{\n            z-index: 5;\n            display: flex;\n            \n            transition: transform 1s ease-in-out;\n            transform: translateX(0);\n            img{\n                \n                min-width: 26vw;\n                min-height: 26vh;\n            }\n        }\n    }\n}\n.scriptDiv{\n     \n    background-color: $jetBlack;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 10vh;\n    grid-column: 1/3;\n     \n    .script{\n        font-size: 20px;\n        color: white;\n    }\n    h4{\n       font-size: 18px;\n       font-weight: bolder;\n       color: $blue;\n       cursor: pointer;\n    }\n    h4:hover{\n        color: white;\n    }\n}\n.videoDiv{\n    height: 55vh;\n    grid-column: 1/3;\n    display: flex;\n    border-radius: 10px;\n    background-color: $jetBlack;\n    margin-left: 3vw;\n    margin-right: 3vw;\n    \n    iframe{\n        margin-left: 1vw;\n        margin-top: 5vh;\n         border-radius: 10px;\n        width: 50vw;\n        height: 45vh;\n    }\n    .description{\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n        margin-left: 4vw;\n        width: 35vw;\n         \n        display: flex;\n        flex-direction: column;\n    h3{\n        font-size: 34px;\n        color: $blue;\n    }\n    p{\n        font-size: 24px;\n        color: white;\n    }\n    }\n}\n.partnerDiv{\n    margin: 2vh 3vw;\n    background-color: $jetBlack;\n    grid-column: 1/3;\n    border-radius: 10px;\n    h2{\n        text-align: center;\n        color: $blue;\n        font-size: 30px;\n    }\n.partners{\n   \n   \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    li{\n        margin: 10px 10px;\n        font-size: 20px;\n        color: white;\n        text-decoration: underline;\n    }\n}\n}\n}\nfooter{\n   \n    height: 40vh;\n   #BG{\n    margin-left: 70%;\n    border-radius: 10px;\n   }\n    background-color: $blue;\n     div{\n        display: flex;\n        justify-content: center;\n        h1{\n            margin-top: 2vh;\n            font-size: 40px;\n            color:white;\n        }\n        p{\n            color: white;\n            font-family:'Times New Roman', Times, serif;\n            font-size: 28px;\n            margin-top: 2vh;\n            margin-left: 10vw;\n        }\n     }\n     .foot{\n        .imgs{\n            img{\n                margin-left: 5vw;\n                border-radius: 10px;\n            }\n        }\n        \n        height: 20vh;\n        display: flex;\n        justify-content: space-around;\n        form{\n             align-items: center;\n          \n            width: 20vw;\n            label{\n                font-size: 19px;\n                margin-top: 2vh;\n            }\n            input{\n                border: none;\n                height: 3vh;\n                width: 15vw;\n                margin-top: 2vh;\n            }\n            .submit{\n                color: white;\n                background-color: #0066b2;\n                border-radius: 10px;\n                margin-top: 2vh;\n                cursor: pointer;\n            }\n           \n            height: 20vh;\n            display: flex;\n            flex-direction: column;\n        }\n     }\n}\n@keyframes jumpOn{\n    from{\n        transform: scale(0);\n    }\n    70%{\n        transform: scale(1.5);\n    }\n    to{\n        transform: scale(1);\n    }\n}\n@media(max-width:1400px){\n    main{\n        height: 160vh;\n        .donate{\n            h1{\n            min-height: 30vh;\n            margin-top: 7vh;\n            max-height: 43vh;\n            }\n            .sliderWrap{\n                margin-top: 11vh;\n            }\n        }\n        .videoDiv{\n            iframe{\n                margin-left: 5vw;\n                width: 40vw;\n            }\n            .description{\n                p{\n                    font-size: 20px;\n                }\n                h3{\n                    font-size: 28px;\n                }\n            }\n        }\n    }\n    footer{\n        height: 35vh;\n    }\n}\n@media(max-width:1100px){\n   \n     body{\n      overflow-x: hidden;\n     }\n     header{\n        position: sticky;\n        top: 0;\n        z-index: 3;\n        .socials{\n            display: flex;\n            position: absolute;\n            top: 1%;\n            left: 80%;\n             img{\n                cursor: pointer;\n                 \n                border-radius: 15px;\n             }\n        }\n        height:30vh ;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background-color: #1DA1F2;\n        .logo{\n            max-width: 20vw;\n            max-height: 20vh;\n            border-radius: 20px;\n        }\n        .headContainer{\n            div{\n                display: flex;\n            h1{\n                font-size: 50px;\n                color: white;\n            }\n            h3{\n                margin-top: 3vh;\n                margin-left: 3vw;\n                text-decoration: underline;\n                color: white;\n            }\n        }\n            table{\n                color: white;\n                 th{\n                    cursor: pointer;\n                    border-radius: 10px;\n                    background-color: #0066b2;\n                    width: 10vw;\n                     height:3vh;\n                     transition: all .4s ease-in-out;\n                    margin: 0;\n                    border: none;\n                 }\n                 th:hover{\n                    transition-delay: 1s;\n                    transition: all .4s ease-in-out;\n                    background-color: white;\n                    color: #0066b2;\n                 }\n                 .volunteer{\n                     \n                    td{\n                        text-align: center;\n                        border-radius: 10px;\n                        margin-top: 6px;\n                        margin-right:5px;\n                        width: 10vw;\n                        height: 3vh;\n                        border: solid 1px black;\n                       display: none;\n                       background-color: #0066b2;\n                    }\n                 }\n                 .volunteer:hover{\n                    td{\n                    \n                        padding: 0;\n                        \n                         display: block;\n                        right: 22.6%;\n                    }\n                }\n        }\n        p{\n            margin-left: -7vw;\n            text-align: center;\n            margin-top: 3vh;\n            font-size: 18px;\n            color: white;\n            font-weight: bold;\n        }\n        h5{\n            text-align: center;\n            color: white;\n            font-size: 15px;\n        }\n        }\n    }\n    main{\n        width: 100%;\n        row-gap: 1vh;\n        height: 200vh;\n         display: grid;\n         grid-template-columns: 1fr 1fr;\n        background-color: \t#28282B;\n        .about{\n            margin-bottom: 20vh;\n           height: 32vh;\n     \n            width: 40vw;\n            padding: 30px;\n            h2{\n                color: $blue;\n                font-size: 35px;\n              text-align: center;  \n            }\n            p{\n            \n                font-size: 16px;\n                color: white;\n                font-weight: bold;\n                border-radius: 10px;\n                min-width: 40vw;\n                padding: 10px;\n                background-color: $jetBlack;\n            }\n        }\n        .donate{\n           \n            h1:hover{\n                box-shadow: 0px 0px 10px 5px white;\n            }\n            width: 32vw;\n            height: 40vh;\n            margin-left: 10vw;\n          h1{\n           \n                button:hover{\n                     color:white;\n                    \n                }\n            \n                button{\n                    z-index: 2;\n                    transform: scale(1);\n                    animation: jumpOn 1s;\n                    cursor: pointer;\n                    color: black;\n                    border: none;\n                    font-size: 24px;\n                    font-weight: bolder;\n                    text-decoration: underline;\n                    background-color: \t#CC5500;\n                }\n                box-shadow: 0px 0px 10px 5px $blue;\n                background-color: \t#CC5500;\n               \n                position: absolute;\n                min-width: 26vw;\n                min-height: 26vh;\n                height:48vh;\n                max-height: 35vh;\n                width:  30vw;\n                border-radius: 10px;\n                border: solid 1px red;\n                margin-top: 10vh;\n                \n                text-align: center;\n            }\n        .sliderWrap{\n            z-index: 1;\n           margin-top: 15vh;\n           \n            \n             border: solid 1px red;\n             min-width: 26vw;\n             min-height: 26vh;\n            max-height: 35vh;\n            max-width: 26vw;\n            overflow: hidden;\n            .imgSlider{\n                z-index: 5;\n                display: flex;\n                min-width: 26vw;\n                        min-height: 26vh;\n                transition: transform 1s ease-in-out;\n                transform: translateX(0);\n                img{\n                    \n                    min-width: 26vw;\n                    min-height: 26vh;\n                }\n            }\n        }\n    }\n    .scriptDiv{\n         \n        background-color: $jetBlack;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: 20vh;\n        grid-column: 1/3;\n         \n        .script{\n            font-size: 20px;\n            color: white;\n        }\n        h4{\n           font-size: 18px;\n           font-weight: bolder;\n           color: $blue;\n           cursor: pointer;\n        }\n        h4:hover{\n            color: white;\n        }\n    }\n    .videoDiv{\n        height: 55vh;\n        grid-column: 1/3;\n        display: flex;\n        border-radius: 10px;\n        background-color: $jetBlack;\n        margin-left: 0vw;\n        margin-right: 0;\n        \n        iframe{\n            margin-left: 1vw;\n            margin-top: 5vh;\n             border-radius: 10px;\n            width: 50vw;\n            height: 45vh;\n        }\n        .description{\n            margin-top: 5vh;\n            margin-bottom: 5vh;\n            margin-left: 4vw;\n            width: 35vw;\n             \n            display: flex;\n            flex-direction: column;\n        h3{\n            font-size: 24px;\n            color: $blue;\n        }\n        p{\n            font-size: 18px;\n            color: white;\n        }\n        }\n    }\n    .partnerDiv{\n        margin: 2vh 0vw;\n        background-color: $jetBlack;\n        grid-column: 1/3;\n        border-radius: 10px;\n        h2{\n            text-align: center;\n            color: $blue;\n            font-size: 30px;\n        }\n    .partners{\n       \n       \n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        li{\n            margin: 10px 10px;\n            font-size: 20px;\n            color: white;\n            text-decoration: underline;\n        }\n    }\n    }\n    }\n    footer{\n       width: 100%;\n        height: 45vh;\n       #BG{\n        margin-left: 70%;\n        border-radius: 10px;\n       }\n        background-color: $blue;\n         div{\n            display: flex;\n            justify-content: center;\n            h1{\n                margin-top: 2vh;\n                font-size: 40px;\n                color:white;\n            }\n            p{\n                color: white;\n                font-family:'Times New Roman', Times, serif;\n                font-size: 28px;\n                margin-top: 2vh;\n                margin-left: 10vw;\n            }\n         }\n         .foot{\n            .imgs{\n                img{\n                    margin-left: 5vw;\n                    border-radius: 10px;\n                }\n            }\n            \n            height: 20vh;\n            display: flex;\n            justify-content: space-around;\n            form{\n                 align-items: center;\n              \n                width: 20vw;\n                label{\n                    font-size: 19px;\n                    margin-top: 2vh;\n                }\n                input{\n                    border: none;\n                    height: 3vh;\n                    width: 15vw;\n                    margin-top: 2vh;\n                }\n                .submit{\n                    color: white;\n                    background-color: #0066b2;\n                    border-radius: 10px;\n                    margin-top: 2vh;\n                    cursor: pointer;\n                }\n               \n                height: 20vh;\n                display: flex;\n                flex-direction: column;\n            }\n         }\n    }\n}\n@media(max-width: 600px){\n    \n      body{\n        margin: 0;\n        padding: 0;\n         \n        margin-right: -27vw\n      }\n      header{\n         \n         position: sticky;\n         top: 0;\n         z-index: 3;\n         .socials{\n             display: flex;\n             position: absolute;\n             top: 1%;\n             left: 80%;\n              img{\n                 cursor: pointer;\n                  \n                 border-radius: 15px;\n              }\n         }\n         height:30vh ;\n         display: flex;\n         justify-content: space-around;\n         align-items: center;\n         background-color: #1DA1F2;\n         .logo{\n             max-width: 20vw;\n             max-height: 20vh;\n             border-radius: 20px;\n         }\n         .headContainer{\n            padding: 50px;\n            border: 1px solid red;\n             div{\n                 display: flex;\n             h1{\n                 font-size: 50px;\n                 color: white;\n             }\n             h3{\n                 margin-top: 3vh;\n                 margin-left: 3vw;\n                 text-decoration: underline;\n                 color: white;\n             }\n         }\n             table{\n                 color: white;\n                  th{\n                     cursor: pointer;\n                     border-radius: 10px;\n                     background-color: #0066b2;\n                     width: 10vw;\n                      height:3vh;\n                      transition: all .4s ease-in-out;\n                     margin: 0;\n                     border: none;\n                  }\n                  th:hover{\n                     transition-delay: 1s;\n                     transition: all .4s ease-in-out;\n                     background-color: white;\n                     color: #0066b2;\n                  }\n                  .volunteer{\n                      \n                     td{\n                         text-align: center;\n                         border-radius: 10px;\n                         margin-top: 6px;\n                         margin-right:5px;\n                         width: 10vw;\n                         height: 3vh;\n                         border: solid 1px black;\n                        display: none;\n                        background-color: #0066b2;\n                     }\n                  }\n                  .volunteer:hover{\n                     td{\n                     \n                         padding: 0;\n                         \n                          display: block;\n                         right: 22.6%;\n                     }\n                 }\n         }\n         p{\n             margin-left: -7vw;\n             text-align: center;\n             margin-top: 3vh;\n             font-size: 18px;\n             color: white;\n             font-weight: bold;\n         }\n         h5{\n             text-align: center;\n             color: white;\n             font-size: 15px;\n         }\n         }\n     }\n     main{\n         width: 100%;\n         row-gap: 1vh;\n         height: 200vh;\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n         background-color: \t#28282B;\n         .about{\n             margin-bottom: 20vh;\n            height: 32vh;\n      \n             width: 40vw;\n             padding: 30px;\n             h2{\n                 color: $blue;\n                 font-size: 35px;\n               text-align: center;  \n             }\n             p{\n             \n                 font-size: 16px;\n                 color: white;\n                 font-weight: bold;\n                 border-radius: 10px;\n                 min-width: 40vw;\n                 padding: 10px;\n                 background-color: $jetBlack;\n             }\n         }\n         .donate{\n            \n             h1:hover{\n                 box-shadow: 0px 0px 10px 5px white;\n             }\n             width: 32vw;\n             height: 40vh;\n             margin-left: 10vw;\n           h1{\n            \n                 button:hover{\n                      color:white;\n                     \n                 }\n             \n                 button{\n                     z-index: 2;\n                     transform: scale(1);\n                     animation: jumpOn 1s;\n                     cursor: pointer;\n                     color: black;\n                     border: none;\n                     font-size: 24px;\n                     font-weight: bolder;\n                     text-decoration: underline;\n                     background-color: \t#CC5500;\n                 }\n                 box-shadow: 0px 0px 10px 5px $blue;\n                 background-color: \t#CC5500;\n                \n                 position: absolute;\n                 min-width: 26vw;\n                 min-height: 26vh;\n                 height:48vh;\n                 max-height: 35vh;\n                 width:  30vw;\n                 border-radius: 10px;\n                 border: solid 1px red;\n                 margin-top: 10vh;\n                 \n                 text-align: center;\n             }\n         .sliderWrap{\n             z-index: 1;\n            margin-top: 15vh;\n            \n             \n              border: solid 1px red;\n              min-width: 26vw;\n              min-height: 26vh;\n             max-height: 35vh;\n             max-width: 26vw;\n             overflow: hidden;\n             .imgSlider{\n                 z-index: 5;\n                 display: flex;\n                 min-width: 26vw;\n                         min-height: 26vh;\n                 transition: transform 1s ease-in-out;\n                 transform: translateX(0);\n                 img{\n                     \n                     min-width: 26vw;\n                     min-height: 26vh;\n                 }\n             }\n         }\n     }\n     .scriptDiv{\n          \n         background-color: $jetBlack;\n         display: flex;\n         flex-direction: column;\n         align-items: center;\n         justify-content: center;\n         height: 20vh;\n         grid-column: 1/3;\n          \n         .script{\n             font-size: 20px;\n             color: white;\n         }\n         h4{\n            font-size: 18px;\n            font-weight: bolder;\n            color: $blue;\n            cursor: pointer;\n         }\n         h4:hover{\n             color: white;\n         }\n     }\n     .videoDiv{\n         height: 55vh;\n         grid-column: 1/3;\n         display: flex;\n         border-radius: 10px;\n         background-color: $jetBlack;\n         margin-left: 0vw;\n         margin-right: 0;\n         \n         iframe{\n             margin-left: 1vw;\n             margin-top: 5vh;\n              border-radius: 10px;\n             width: 50vw;\n             height: 45vh;\n         }\n         .description{\n             margin-top: 5vh;\n             margin-bottom: 5vh;\n             margin-left: 4vw;\n             width: 35vw;\n              \n             display: flex;\n             flex-direction: column;\n         h3{\n             font-size: 24px;\n             color: $blue;\n         }\n         p{\n             font-size: 18px;\n             color: white;\n         }\n         }\n     }\n     .partnerDiv{\n         margin: 2vh 0vw;\n         background-color: $jetBlack;\n         grid-column: 1/3;\n         border-radius: 10px;\n         h2{\n             text-align: center;\n             color: $blue;\n             font-size: 30px;\n         }\n     .partners{\n        \n        \n         display: flex;\n         flex-wrap: wrap;\n         justify-content: space-between;\n         li{\n             margin: 10px 10px;\n             font-size: 20px;\n             color: white;\n             text-decoration: underline;\n         }\n     }\n     }\n     }\n     footer{\n        width: 100%;\n         height: 45vh;\n        #BG{\n         margin-left: 70%;\n         border-radius: 10px;\n        }\n         background-color: $blue;\n          div{\n             display: flex;\n             justify-content: center;\n             h1{\n                 margin-top: 2vh;\n                 font-size: 40px;\n                 color:white;\n             }\n             p{\n                 color: white;\n                 font-family:'Times New Roman', Times, serif;\n                 font-size: 28px;\n                 margin-top: 2vh;\n                 margin-left: 10vw;\n             }\n          }\n          .foot{\n             .imgs{\n                 img{\n                     margin-left: 5vw;\n                     border-radius: 10px;\n                 }\n             }\n             \n             height: 20vh;\n             display: flex;\n             justify-content: space-around;\n             form{\n                  align-items: center;\n               \n                 width: 20vw;\n                 label{\n                     font-size: 19px;\n                     margin-top: 2vh;\n                 }\n                 input{\n                     border: none;\n                     height: 3vh;\n                     width: 15vw;\n                     margin-top: 2vh;\n                 }\n                 .submit{\n                     color: white;\n                     background-color: #0066b2;\n                     border-radius: 10px;\n                     margin-top: 2vh;\n                     cursor: pointer;\n                 }\n                \n                 height: 20vh;\n                 display: flex;\n                 flex-direction: column;\n             }\n          }\n     }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildHome.js":
/*!**************************!*\
  !*** ./src/buildHome.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHome)
/* harmony export */ });
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");

function buildHome(){
    const main = document.querySelector('main')
    const donateDiv = document.createElement('div')
    donateDiv.classList.add('donate')
  
    const aboutUs = document.createElement('div')
    aboutUs.classList.add('about')
    const aboutP = document.createElement('p')
    const aboutHead = document.createElement('h2')
    aboutHead.innerHTML = 'About Us'
    aboutP.innerHTML = `Bikes For Christ was started in 2016 with a commitment to helping those in need while also sharing the love of God. Our organization has quickly grown to encompass providing transportation across Hillsborough, Pinellas, Polk and Pasco counties with a mission to one day be nationwide. By showing God's love through providingbicycles for those in need, we hope to lead them to a life in His eternal kingdom.`
    aboutUs.appendChild(aboutHead)
    aboutUs.appendChild(aboutP)
    const visionHead = document.createElement('h2')
    visionHead.innerHTML = 'Our Vision'
    const vision = document.createElement('p')
    vision.innerHTML = 'Our vision is simple... Provide love and compassion to people while also tending to their spiritual needs so that each individual we touch has a chance to learn and grow in Christ'
    aboutUs.appendChild(visionHead)
    aboutUs.appendChild(vision)
    main.appendChild(aboutUs)
    const h1 = document.createElement('h1')
    const donateAnchor = document.createElement('button')
    donateAnchor.innerHTML = 'Donate today!'
    donateAnchor.addEventListener('click',()=>{
        main.innerHTML = ''
    })
    h1.appendChild(donateAnchor)
    donateDiv.appendChild(h1)
     
    main.appendChild(donateDiv)
    ;(0,_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const scriptDiv = document.createElement('div')
    scriptDiv.classList.add('scriptDiv')
    const script = document.createElement('p')
    script.classList.add('script')
    script.innerHTML = 'Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute'
    scriptDiv.appendChild(script)
   const scriptTag = document.createElement('h4')
    scriptTag.innerHTML = 'Psalm 82:3'
    scriptTag.addEventListener('click',()=>{
        window.location = 'https://www.bible.com/bible/59/PSA.82.3.ESV'
    })
    scriptDiv.appendChild(scriptTag)
    main.appendChild(scriptDiv)
    const iframe = document.createElement('iframe')
    const videoDiv = document.createElement('div')
    videoDiv.classList.add('videoDiv')
    iframe.src = "https://www.youtube.com/embed/q-lRec57pOg?si=6W7Ao2lHXz_Za78k" 
    iframe.title = 'Bikes For Christ'
    videoDiv.appendChild(iframe)
    const videoDescription = document.createElement('div')
    videoDescription.classList.add('description')
    const vidHeader = document.createElement('h3')
    vidHeader.innerHTML = 'Who we are'
    videoDescription.appendChild(vidHeader)
    const vidParagraph = document.createElement('p')
    vidParagraph.innerHTML = `We provide donated bicycles to the needy, veterans, underprivileged children and seniors while also ministering to their spiritual needs and sharing God's love with them<br><br> The most important part in all of this is that those who receive bikes know that someone loves and cares for them. "Through giving we show love, and it's the same love and compassion that Jesus showed us" Pat says. With every bicycle, a bible goes along with it. "It's the handbook that gets us through this life and into heaven to be with God for all eternity." `
    videoDescription.appendChild(vidParagraph)
    videoDiv.appendChild((videoDescription))
    main.appendChild(videoDiv)
    const partners = document.createElement('ul')
    partners.classList.add('partners')
    const partnerArr = ['FL Department of Corrections', `Hillsborough County Sheriff's department`, `Amazing Love Ministries`, `ECHO`, 'Tampa Crossroads', `Kay's Ministry`, 'Gracepoint Wellness', 'Northside Mental Health', `A Kid's Place`, `Florida Baptist Children's Home`, `Liberty Manor`, `Women's Resource Center of Tampa`, `Metropolitan Ministries`, `Kinship- Children's Home`, `Catholic Charities`, `Blanket Tampa Bay`,`The Lord's Lighthouse`, `Everyday Blessings`, `Family Promise of Greater Brandon`, `Tampa Homeless Outreach`, `Showered and Empowered`, `Marine Families`, `RCMA`, `The Salvation Army`, `New Life Village`, `St.Vincent De Paul`]
    for( let i = 0; i<partnerArr.length;i++){
        const li = document.createElement('li')
        li.innerHTML = partnerArr[i]
        partners.appendChild(li)
    }
    const partnerDiv = document.createElement('div')
    const partnerHead = document.createElement('h2')
    partnerHead.innerHTML = 'Our Partners'
    partnerDiv.appendChild(partnerHead)
    partnerDiv.classList.add('partnerDiv')
    partnerDiv.appendChild(partners)
    main.appendChild(partnerDiv)
  }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _best_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./best.jpg */ "./src/best.jpg");
/* harmony import */ var _smallBus_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smallBus.jpg */ "./src/smallBus.jpg");
/* harmony import */ var _winner_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winner.jpg */ "./src/winner.jpg");
/* harmony import */ var _BGLogo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BGLogo.jpg */ "./src/BGLogo.jpg");
/* harmony import */ var _buildHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildHome */ "./src/buildHome.js");
/* harmony import */ var _logo_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.jpeg */ "./src/logo.jpeg");
/* harmony import */ var _yt_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yt.png */ "./src/yt.png");
/* harmony import */ var _fb_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fb.jpg */ "./src/fb.jpg");
/* harmony import */ var _twitter_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twitter.png */ "./src/twitter.png");









 

const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const logo = document.createElement('img')
logo.src = _logo_jpeg__WEBPACK_IMPORTED_MODULE_6__
logo.alt = 'logo'
logo.classList.add('logo')
header.appendChild(logo)
const heading = document.createElement('h1')
heading.innerHTML = 'Bikes For Christ'
const headerContainer = document.createElement('div')
headerContainer.classList.add('headContainer')
heading.classList.add('title')
const reachUs = document.createElement('h3')
reachUs.innerHTML = 'Call Us: 813-533-9177'
 
const headingDiv = document.createElement('div')
headingDiv.appendChild(heading)
headingDiv.appendChild(reachUs)
 
headerContainer.appendChild(headingDiv)

const navbar = document.createElement('table')
const tr = document.createElement('tr')
for(let i = 0; i< 6; i++){
    const th = document.createElement('th')
    switch(i){
        case 0: 
            th.innerHTML = 'Home'
            th.addEventListener('click',()=>{
                main.innerHTML = ''
                ;(0,_buildHome__WEBPACK_IMPORTED_MODULE_5__["default"])()

            })
            tr.appendChild(th)
            break
        case 1: 
            th.innerHTML = 'About'
            tr.appendChild(th)
            break
        case 2:
            th.innerHTML = 'Missions'
            tr.appendChild(th)
            break
        case 3:
            th.innerHTML = 'Volunteer'
            th.classList.add('volunteer')
           /*  const td = document.createElement('td')
            td.innerHTML = 'Help List'
            th.appendChild(td) */
            tr.appendChild(th)
            break
        case 4:
            th.innerHTML = 'Events'
            tr.appendChild(th)
            break
        case 5: 
            th.innerHTML = 'Contact'
            tr.appendChild(th)
            break
                }
            }
        navbar.appendChild(tr)
headerContainer.appendChild(navbar)
const hebrews = document.createElement('p')
    hebrews.innerHTML = `And do not forget to do good and to share with others, for with such sacrifices God is pleased`
const h5 = document.createElement('h5')
h5.innerHTML = ' Hebrews 13:16'
headerContainer.appendChild(hebrews)
headerContainer.appendChild(h5)
header.appendChild(headerContainer)
const socials = document.createElement('div')
const socialsB = document.createElement('div')
let count = 0
while(count <3 ){
    const anchor = document.createElement('a')
    const img = document.createElement('img')
    
    switch(count){
        case 0:
            img.src = _fb_jpg__WEBPACK_IMPORTED_MODULE_8__
            img.alt = 'Facebook'
            img.title ='Facebook'
        img.addEventListener('click',()=>{
            window.location = 'https://www.facebook.com/Bicycles4Christ/'
        })
         
        socials.appendChild(img)
        
        break
        case 1:
            img.src = _yt_png__WEBPACK_IMPORTED_MODULE_7__
            img.alt = 'youtube'
            img.title ='Youtube'
        img.addEventListener('click',()=>{
            window.location = 'https://www.youtube.com/channel/UCCPQ2ZBmAj9flOeGE508Wvw'
        })
       
        socials.appendChild(img)
        
        break
        case 2:
            img.src = _twitter_png__WEBPACK_IMPORTED_MODULE_9__
            img.alt = 'twitter'
            img.title = 'Twitter'
            img.addEventListener('click',()=>{
                window.location = 'https://twitter.com/Bikes4Christ'
            })
            
            socials.appendChild(img)
           
            break
    }
   
    count++
}
socials.classList.add('socials')


header.appendChild(socials)
;(0,_buildHome__WEBPACK_IMPORTED_MODULE_5__["default"])()
const footerHead = document.createElement('h1')
const footerDiv = document.createElement('div')
footerHead.innerHTML = 'Bikes For Christ'
footerDiv.appendChild(footerHead)
const FooterP = document.createElement('p')
FooterP.innerHTML = 'Bikes For Christ is a 501 (C)(3) Tax-Exempt Organization.'
footerDiv.appendChild(FooterP)
footer.appendChild(footerDiv)
const footerFoot = document.createElement('div')
footerFoot.classList.add('foot')
const form = document.createElement('form')
const input = document.createElement('input')
input.type = 'email'
input.name = 'email'
input.placeholder = 'Email Address'
const label = document.createElement('label')
label.for = 'email'
label.innerHTML = 'Join our mailing list<br> Never miss an update'
form.appendChild(label)
form.appendChild(input)
const btn = document.createElement('input')
btn.type = 'submit'
btn.classList.add('submit')
btn.innerHTML = 'Submit'
 
form.appendChild(btn)
footerFoot.appendChild(form)
const imgDiv = document.createElement('div')
count = 0
const BG = document.createElement('img')
BG.id = 'BG'
BG.src = _BGLogo_jpg__WEBPACK_IMPORTED_MODULE_4__
footer.appendChild(BG)
while(count < 3){
    const img = document.createElement('img')
    switch(count){
        case 0:
            img.src =  _winner_jpg__WEBPACK_IMPORTED_MODULE_3__
            imgDiv.appendChild(img)
            count++
            break
        case 1:
            img.src =_smallBus_jpg__WEBPACK_IMPORTED_MODULE_2__
            imgDiv.appendChild(img)
            count++
            break
        case 2:
            img.src = _best_jpg__WEBPACK_IMPORTED_MODULE_1__
            imgDiv.appendChild(img)
            count++
            break
    }
}
imgDiv.classList.add('imgs')
footerFoot.appendChild(imgDiv)
footer.appendChild(footerFoot)


/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildImageSlider)
/* harmony export */ });
/* harmony import */ var _imgs_bike_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/bike.jpg */ "./src/imgs/bike.jpg");
/* harmony import */ var _imgs_bikeB_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/bikeB.jpg */ "./src/imgs/bikeB.jpg");
/* harmony import */ var _imgs_bikeC_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/bikeC.jpg */ "./src/imgs/bikeC.jpg");
/* harmony import */ var _imgs_bikeD_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/bikeD.jpg */ "./src/imgs/bikeD.jpg");
/* harmony import */ var _imgs_bikeE_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/bikeE.jpg */ "./src/imgs/bikeE.jpg");
/* harmony import */ var _imgs_bikeF_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/bikeF.jpg */ "./src/imgs/bikeF.jpg");
/* harmony import */ var _imgs_bikeG_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/bikeG.jpg */ "./src/imgs/bikeG.jpg");
/* harmony import */ var _imgs_bikeH_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/bikeH.jpg */ "./src/imgs/bikeH.jpg");
/* harmony import */ var _imgs_bikeI_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/bikeI.jpg */ "./src/imgs/bikeI.jpg");
/* harmony import */ var _imgs_bikeJ_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/bikeJ.jpg */ "./src/imgs/bikeJ.jpg");
/* harmony import */ var _imgs_bikeK_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgs/bikeK.png */ "./src/imgs/bikeK.png");
/* harmony import */ var _imgs_bikeM_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/bikeM.png */ "./src/imgs/bikeM.png");
/* harmony import */ var _imgs_bikeN_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imgs/bikeN.jpg */ "./src/imgs/bikeN.jpg");
/* harmony import */ var _imgs_bikeO_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./imgs/bikeO.jpg */ "./src/imgs/bikeO.jpg");
/* harmony import */ var _imgs_bikeP_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./imgs/bikeP.jpg */ "./src/imgs/bikeP.jpg");
/* harmony import */ var _imgs_bikeQ_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./imgs/bikeQ.jpg */ "./src/imgs/bikeQ.jpg");
/* harmony import */ var _imgs_bikeS_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imgs/bikeS.jpg */ "./src/imgs/bikeS.jpg");
/* harmony import */ var _imgs_bikeT_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./imgs/bikeT.jpg */ "./src/imgs/bikeT.jpg");
/* harmony import */ var _imgs_bikeU_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./imgs/bikeU.jpg */ "./src/imgs/bikeU.jpg");
/* harmony import */ var _imgs_bikeV_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./imgs/bikeV.jpg */ "./src/imgs/bikeV.jpg");
/* harmony import */ var _imgs_bikeW_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./imgs/bikeW.jpg */ "./src/imgs/bikeW.jpg");
/* harmony import */ var _imgs_bikeX_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./imgs/bikeX.jpg */ "./src/imgs/bikeX.jpg");
/* harmony import */ var _imgs_bikeL_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./imgs/bikeL.jpg */ "./src/imgs/bikeL.jpg");

















 






 
function buildImageSlider(){
    const bikes = [_imgs_bike_jpg__WEBPACK_IMPORTED_MODULE_0__,_imgs_bikeB_jpg__WEBPACK_IMPORTED_MODULE_1__,_imgs_bikeC_jpg__WEBPACK_IMPORTED_MODULE_2__,_imgs_bikeD_jpg__WEBPACK_IMPORTED_MODULE_3__,_imgs_bikeE_jpg__WEBPACK_IMPORTED_MODULE_4__,_imgs_bikeF_jpg__WEBPACK_IMPORTED_MODULE_5__,_imgs_bikeG_jpg__WEBPACK_IMPORTED_MODULE_6__,_imgs_bikeH_jpg__WEBPACK_IMPORTED_MODULE_7__,_imgs_bikeI_jpg__WEBPACK_IMPORTED_MODULE_8__,_imgs_bikeJ_jpg__WEBPACK_IMPORTED_MODULE_9__,_imgs_bikeK_png__WEBPACK_IMPORTED_MODULE_10__,_imgs_bikeL_jpg__WEBPACK_IMPORTED_MODULE_22__,_imgs_bikeM_png__WEBPACK_IMPORTED_MODULE_11__,_imgs_bikeN_jpg__WEBPACK_IMPORTED_MODULE_12__,_imgs_bikeO_jpg__WEBPACK_IMPORTED_MODULE_13__,_imgs_bikeP_jpg__WEBPACK_IMPORTED_MODULE_14__,_imgs_bikeQ_jpg__WEBPACK_IMPORTED_MODULE_15__,_imgs_bikeS_jpg__WEBPACK_IMPORTED_MODULE_16__,_imgs_bikeT_jpg__WEBPACK_IMPORTED_MODULE_17__,_imgs_bikeU_jpg__WEBPACK_IMPORTED_MODULE_18__,_imgs_bikeV_jpg__WEBPACK_IMPORTED_MODULE_19__,_imgs_bikeW_jpg__WEBPACK_IMPORTED_MODULE_20__,_imgs_bikeX_jpg__WEBPACK_IMPORTED_MODULE_21__ ]
    const donate = document.querySelector('.donate')
    const slider = document.createElement('div')
    slider.classList.add('imgSlider')
    const wrap = document.createElement('div')
    wrap.classList.add('sliderWrap')
    for( let i = 0; i < bikes.length; i++){
        const image = document.createElement('img')
        image.src = bikes[i]
        slider.appendChild(image)
    }
    let count = 0
    var interval = setInterval(()=>{
        let vw = 26
        if(count ==-20){
            count = 0
            vw = vw*count
            slider.style.transition = 'none'
            slider.style.transform = `translateX(${vw}vw)`
        }else{
            count--
            vw = vw*count
            slider.style.transform = `translateX(${vw}vw)`
            slider.style.transition = 'transform 1s ease-in-out'
            }
    },5000)
    wrap.appendChild(slider)
    donate.appendChild(wrap)
}
 

/***/ }),

/***/ "./src/BGLogo.jpg":
/*!************************!*\
  !*** ./src/BGLogo.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5b424da107415fb7929.jpg";

/***/ }),

/***/ "./src/best.jpg":
/*!**********************!*\
  !*** ./src/best.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e7ef2bf4816cadc9df8.jpg";

/***/ }),

/***/ "./src/fb.jpg":
/*!********************!*\
  !*** ./src/fb.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "484dee481774f6ec5a95.jpg";

/***/ }),

/***/ "./src/imgs/bike.jpg":
/*!***************************!*\
  !*** ./src/imgs/bike.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52ed5bb40d9b763acbb8.jpg";

/***/ }),

/***/ "./src/imgs/bikeB.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeB.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "476d932a6486d55497b5.jpg";

/***/ }),

/***/ "./src/imgs/bikeC.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeC.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ac925140298db94a303.jpg";

/***/ }),

/***/ "./src/imgs/bikeD.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeD.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbdbb5bf7f477ac25464.jpg";

/***/ }),

/***/ "./src/imgs/bikeE.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeE.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81c5dad0c465ea40fd01.jpg";

/***/ }),

/***/ "./src/imgs/bikeF.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeF.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95dcbcbf14e3dae89a68.jpg";

/***/ }),

/***/ "./src/imgs/bikeG.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeG.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45ce678d791c6f3c1a4e.jpg";

/***/ }),

/***/ "./src/imgs/bikeH.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeH.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bb328d01e613f1b2d58.jpg";

/***/ }),

/***/ "./src/imgs/bikeI.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeI.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e7d56c45d0ee5ccb5d5.jpg";

/***/ }),

/***/ "./src/imgs/bikeJ.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeJ.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3db461af208d29b5138c.jpg";

/***/ }),

/***/ "./src/imgs/bikeK.png":
/*!****************************!*\
  !*** ./src/imgs/bikeK.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52f274ce56559372ca72.png";

/***/ }),

/***/ "./src/imgs/bikeL.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeL.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6407f95000e489059cbc.jpg";

/***/ }),

/***/ "./src/imgs/bikeM.png":
/*!****************************!*\
  !*** ./src/imgs/bikeM.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "933637603c9534fec296.png";

/***/ }),

/***/ "./src/imgs/bikeN.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeN.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8caf868c3fe4863a2637.jpg";

/***/ }),

/***/ "./src/imgs/bikeO.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeO.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b433e390bf1810ddbb4.jpg";

/***/ }),

/***/ "./src/imgs/bikeP.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeP.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f0fc9a180fa574f85bd.jpg";

/***/ }),

/***/ "./src/imgs/bikeQ.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeQ.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dc92e9f9733dfbfa102.jpg";

/***/ }),

/***/ "./src/imgs/bikeS.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeS.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ced2b7e8cba6640012c.jpg";

/***/ }),

/***/ "./src/imgs/bikeT.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeT.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9e6346387e4934bdd30.jpg";

/***/ }),

/***/ "./src/imgs/bikeU.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeU.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0102e8a002ba2f2970d.jpg";

/***/ }),

/***/ "./src/imgs/bikeV.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeV.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02fc43605a6275eb8d8a.jpg";

/***/ }),

/***/ "./src/imgs/bikeW.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeW.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "032223131ddc6eeee2f9.jpg";

/***/ }),

/***/ "./src/imgs/bikeX.jpg":
/*!****************************!*\
  !*** ./src/imgs/bikeX.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01fa9c3df6dad7de858b.jpg";

/***/ }),

/***/ "./src/logo.jpeg":
/*!***********************!*\
  !*** ./src/logo.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68d27a4337d75776bbe2.jpeg";

/***/ }),

/***/ "./src/smallBus.jpg":
/*!**************************!*\
  !*** ./src/smallBus.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01a6bb943f816557fd3a.jpg";

/***/ }),

/***/ "./src/twitter.png":
/*!*************************!*\
  !*** ./src/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "689e7adafea8106c8856.png";

/***/ }),

/***/ "./src/winner.jpg":
/*!************************!*\
  !*** ./src/winner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "076ce4884775ab3e85d7.jpg";

/***/ }),

/***/ "./src/yt.png":
/*!********************!*\
  !*** ./src/yt.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d717af0c29afc70eebd.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVB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Q0FBQyxDQUFDLDZDQUFDLENBQUMsNkNBQUMsQ0FBQyw2Q0FBQyxDQUFDLDZDQUFDLENBQUMsNkNBQUMsQ0FBQyw2Q0FBQyxDQUFDLDZDQUFDLENBQUMsNkNBQUMsQ0FBQyw2Q0FBQyxDQUFDLDZDQUFDLENBQUMsNkNBQUMsQ0FBQyw2Q0FBQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEdBQUc7QUFDdEQsU0FBUztBQUNUO0FBQ0E7QUFDQSxtREFBbUQsR0FBRztBQUN0RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iaWtlc2ZvcmNocmlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iaWtlc2ZvcmNocmlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jpa2VzZm9yY2hyaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jpa2VzZm9yY2hyaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jpa2VzZm9yY2hyaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iaWtlc2ZvcmNocmlzdC8uL3NyYy9idWlsZEhvbWUuanMiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmlrZXNmb3JjaHJpc3QvLi9zcmMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMztcbiAgaGVpZ2h0OiAyNHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTFGMjtcbn1cbmhlYWRlciAuc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxJTtcbiAgbGVmdDogODUlO1xufVxuaGVhZGVyIC5zb2NpYWxzIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5oZWFkZXIgLmxvZ28ge1xuICBtYXgtd2lkdGg6IDIwdnc7XG4gIG1heC1oZWlnaHQ6IDIwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5oZWFkZXIgLmhlYWRDb250YWluZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciAuaGVhZENvbnRhaW5lciBkaXYgaDEge1xuICBmb250LXNpemU6IDc0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlciAuaGVhZENvbnRhaW5lciBkaXYgaDMge1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogd2hpdGU7XG59XG5oZWFkZXIgLmhlYWRDb250YWluZXIgdGFibGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5oZWFkZXIgLmhlYWRDb250YWluZXIgdGFibGUgdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDN2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIHRoOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDY2YjI7XG59XG5oZWFkZXIgLmhlYWRDb250YWluZXIgdGFibGUgLnZvbHVudGVlciB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogM3ZoO1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn1cbmhlYWRlciAuaGVhZENvbnRhaW5lciB0YWJsZSAudm9sdW50ZWVyOmhvdmVyIHRkIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAyMi42JTtcbn1cbmhlYWRlciAuaGVhZENvbnRhaW5lciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhlYWRlciAuaGVhZENvbnRhaW5lciBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbm1haW4ge1xuICByb3ctZ2FwOiAxdmg7XG4gIGhlaWdodDogMTU1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyQjtcbn1cbm1haW4gLmFib3V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTV2aDtcbiAgaGVpZ2h0OiAzMnZoO1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICB3aWR0aDogNDB2dztcbiAgcGFkZGluZzogMzBweDtcbn1cbm1haW4gLmFib3V0IGgyIHtcbiAgY29sb3I6ICMxREExRjI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAuYWJvdXQgcCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxubWFpbiAuZG9uYXRlIHtcbiAgd2lkdGg6IDMydnc7XG4gIGhlaWdodDogNDB2aDtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG59XG5tYWluIC5kb25hdGUgaDE6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHdoaXRlO1xufVxubWFpbiAuZG9uYXRlIGgxIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCAjMURBMUYyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M1NTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMjZ2dztcbiAgbWluLWhlaWdodDogMjZ2aDtcbiAgaGVpZ2h0OiA0OHZoO1xuICB3aWR0aDogMzB2dztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLmRvbmF0ZSBoMSBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5kb25hdGUgaDEgYnV0dG9uIHtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYW5pbWF0aW9uOiBqdW1wT24gMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQzU1MDA7XG59XG5tYWluIC5kb25hdGUgLnNsaWRlcldyYXAge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiA3dmg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcbiAgbWluLXdpZHRoOiAyNnZ3O1xuICBtaW4taGVpZ2h0OiAyNnZoO1xuICBtYXgtaGVpZ2h0OiA0MHZoO1xuICBtYXgtd2lkdGg6IDI2dnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5tYWluIC5kb25hdGUgLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxubWFpbiAuZG9uYXRlIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgbWluLXdpZHRoOiAyNnZ3O1xuICBtaW4taGVpZ2h0OiAyNnZoO1xufVxubWFpbiAuc2NyaXB0RGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTB2aDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cbm1haW4gLnNjcmlwdERpdiAuc2NyaXB0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5zY3JpcHREaXYgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMURBMUYyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYWluIC5zY3JpcHREaXYgaDQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC52aWRlb0RpdiB7XG4gIGhlaWdodDogNTV2aDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XG59XG5tYWluIC52aWRlb0RpdiBpZnJhbWUge1xuICBtYXJnaW4tbGVmdDogMXZ3O1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDQ1dmg7XG59XG5tYWluIC52aWRlb0RpdiAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgd2lkdGg6IDM1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5tYWluIC52aWRlb0RpdiAuZGVzY3JpcHRpb24gaDMge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGNvbG9yOiAjMURBMUYyO1xufVxubWFpbiAudmlkZW9EaXYgLmRlc2NyaXB0aW9uIHAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm1haW4gLnBhcnRuZXJEaXYge1xuICBtYXJnaW46IDJ2aCAzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5tYWluIC5wYXJ0bmVyRGl2IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFEQTFGMjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxubWFpbiAucGFydG5lckRpdiAucGFydG5lcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbm1haW4gLnBhcnRuZXJEaXYgLnBhcnRuZXJzIGxpIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyO1xufVxuZm9vdGVyICNCRyB7XG4gIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5mb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb290ZXIgZGl2IGgxIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvb3RlciBkaXYgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuZm9vdGVyIC5mb290IHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmZvb3RlciAuZm9vdCAuaW1ncyBpbWcge1xuICBtYXJnaW4tbGVmdDogNXZ3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZm9vdGVyIC5mb290IGZvcm0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyIC5mb290IGZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cbmZvb3RlciAuZm9vdCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDN2aDtcbiAgd2lkdGg6IDE1dnc7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cbmZvb3RlciAuZm9vdCBmb3JtIC5zdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGp1bXBPbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgbWFpbiB7XG4gICAgaGVpZ2h0OiAxNjB2aDtcbiAgfVxuICBtYWluIC5kb25hdGUgaDEge1xuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XG4gICAgbWFyZ2luLXRvcDogN3ZoO1xuICAgIG1heC1oZWlnaHQ6IDQzdmg7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIC5zbGlkZXJXcmFwIHtcbiAgICBtYXJnaW4tdG9wOiAxMXZoO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IGlmcmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICB3aWR0aDogNDB2dztcbiAgfVxuICBtYWluIC52aWRlb0RpdiAuZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IC5kZXNjcmlwdGlvbiBoMyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIGZvb3RlciB7XG4gICAgaGVpZ2h0OiAzNXZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIGJvZHkge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDM7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyO1xuICB9XG4gIGhlYWRlciAuc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxJTtcbiAgICBsZWZ0OiA4MCU7XG4gIH1cbiAgaGVhZGVyIC5zb2NpYWxzIGltZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgaGVhZGVyIC5sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwdnc7XG4gICAgbWF4LWhlaWdodDogMjB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIGRpdiBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoZWFkZXIgLmhlYWRDb250YWluZXIgZGl2IGgzIHtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIHRoIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmIyO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGhlaWdodDogM3ZoO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIHRoOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwNjZiMjtcbiAgfVxuICBoZWFkZXIgLmhlYWRDb250YWluZXIgdGFibGUgLnZvbHVudGVlciB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGhlaWdodDogM3ZoO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbiAgfVxuICBoZWFkZXIgLmhlYWRDb250YWluZXIgdGFibGUgLnZvbHVudGVlcjpob3ZlciB0ZCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICByaWdodDogMjIuNiU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAtN3Z3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBoZWFkZXIgLmhlYWRDb250YWluZXIgaDUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJvdy1nYXA6IDF2aDtcbiAgICBoZWlnaHQ6IDIwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4MkI7XG4gIH1cbiAgbWFpbiAuYWJvdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XG4gICAgaGVpZ2h0OiAzMnZoO1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cbiAgbWFpbiAuYWJvdXQgaDIge1xuICAgIGNvbG9yOiAjMURBMUYyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgbWFpbiAuYWJvdXQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1pbi13aWR0aDogNDB2dztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIHtcbiAgICB3aWR0aDogMzJ2dztcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIGgxOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHdoaXRlO1xuICB9XG4gIG1haW4gLmRvbmF0ZSBoMSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCAjMURBMUYyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQzU1MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogMjZ2dztcbiAgICBtaW4taGVpZ2h0OiAyNnZoO1xuICAgIGhlaWdodDogNDh2aDtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1haW4gLmRvbmF0ZSBoMSBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBtYWluIC5kb25hdGUgaDEgYnV0dG9uIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYW5pbWF0aW9uOiBqdW1wT24gMXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDNTUwMDtcbiAgfVxuICBtYWluIC5kb25hdGUgLnNsaWRlcldyYXAge1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gICAgbWluLXdpZHRoOiAyNnZ3O1xuICAgIG1pbi1oZWlnaHQ6IDI2dmg7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBtYXgtd2lkdGg6IDI2dnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBtYWluIC5kb25hdGUgLnNsaWRlcldyYXAgLmltZ1NsaWRlciB7XG4gICAgei1pbmRleDogNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogMjZ2dztcbiAgICBtaW4taGVpZ2h0OiAyNnZoO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIgaW1nIHtcbiAgICBtaW4td2lkdGg6IDI2dnc7XG4gICAgbWluLWhlaWdodDogMjZ2aDtcbiAgfVxuICBtYWluIC5zY3JpcHREaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gIH1cbiAgbWFpbiAuc2NyaXB0RGl2IC5zY3JpcHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgbWFpbiAuc2NyaXB0RGl2IGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogIzFEQTFGMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWFpbiAuc2NyaXB0RGl2IGg0OmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgbWFpbiAudmlkZW9EaXYge1xuICAgIGhlaWdodDogNTV2aDtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICAgIG1hcmdpbi1sZWZ0OiAwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IGlmcmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gIH1cbiAgbWFpbiAudmlkZW9EaXYgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgd2lkdGg6IDM1dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IC5kZXNjcmlwdGlvbiBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMURBMUYyO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIG1haW4gLnBhcnRuZXJEaXYge1xuICAgIG1hcmdpbjogMnZoIDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBtYWluIC5wYXJ0bmVyRGl2IGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMxREExRjI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIG1haW4gLnBhcnRuZXJEaXYgLnBhcnRuZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgbWFpbiAucGFydG5lckRpdiAucGFydG5lcnMgbGkge1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTFGMjtcbiAgfVxuICBmb290ZXIgI0JHIHtcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgZm9vdGVyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBmb290ZXIgZGl2IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBmb290ZXIgZGl2IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIH1cbiAgZm9vdGVyIC5mb290IHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBmb290ZXIgLmZvb3QgLmltZ3MgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgZm9vdGVyIC5mb290IGZvcm0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBmb290ZXIgLmZvb3QgZm9ybSBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxuICBmb290ZXIgLmZvb3QgZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogM3ZoO1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxuICBmb290ZXIgLmZvb3QgZm9ybSAuc3VibWl0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yN3Z3O1xuICB9XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMztcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XG4gIH1cbiAgaGVhZGVyIC5zb2NpYWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIGxlZnQ6IDgwJTtcbiAgfVxuICBoZWFkZXIgLnNvY2lhbHMgaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBoZWFkZXIgLmxvZ28ge1xuICAgIG1heC13aWR0aDogMjB2dztcbiAgICBtYXgtaGVpZ2h0OiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICBoZWFkZXIgLmhlYWRDb250YWluZXIgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciBkaXYgaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIGRpdiBoMyB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciB0YWJsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciB0YWJsZSB0aCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciB0YWJsZSB0aDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwMDY2YjI7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIC52b2x1bnRlZXIgdGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIHRhYmxlIC52b2x1bnRlZXI6aG92ZXIgdGQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcmlnaHQ6IDIyLjYlO1xuICB9XG4gIGhlYWRlciAuaGVhZENvbnRhaW5lciBwIHtcbiAgICBtYXJnaW4tbGVmdDogLTd2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaGVhZGVyIC5oZWFkQ29udGFpbmVyIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByb3ctZ2FwOiAxdmg7XG4gICAgaGVpZ2h0OiAyMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODJCO1xuICB9XG4gIG1haW4gLmFib3V0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xuICAgIGhlaWdodDogMzJ2aDtcbiAgICB3aWR0aDogNDB2dztcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gIG1haW4gLmFib3V0IGgyIHtcbiAgICBjb2xvcjogIzFEQTFGMjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1haW4gLmFib3V0IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtaW4td2lkdGg6IDQwdnc7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICB9XG4gIG1haW4gLmRvbmF0ZSB7XG4gICAgd2lkdGg6IDMydnc7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG4gIG1haW4gLmRvbmF0ZSBoMTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCB3aGl0ZTtcbiAgfVxuICBtYWluIC5kb25hdGUgaDEge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggIzFEQTFGMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M1NTAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4td2lkdGg6IDI2dnc7XG4gICAgbWluLWhlaWdodDogMjZ2aDtcbiAgICBoZWlnaHQ6IDQ4dmg7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICB3aWR0aDogMzB2dztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBtYWluIC5kb25hdGUgaDEgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIGgxIGJ1dHRvbiB7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGFuaW1hdGlvbjoganVtcE9uIDFzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQzU1MDA7XG4gIH1cbiAgbWFpbiAuZG9uYXRlIC5zbGlkZXJXcmFwIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuICAgIG1pbi13aWR0aDogMjZ2dztcbiAgICBtaW4taGVpZ2h0OiAyNnZoO1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgbWF4LXdpZHRoOiAyNnZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgbWFpbiAuZG9uYXRlIC5zbGlkZXJXcmFwIC5pbWdTbGlkZXIge1xuICAgIHotaW5kZXg6IDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDI2dnc7XG4gICAgbWluLWhlaWdodDogMjZ2aDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIG1haW4gLmRvbmF0ZSAuc2xpZGVyV3JhcCAuaW1nU2xpZGVyIGltZyB7XG4gICAgbWluLXdpZHRoOiAyNnZ3O1xuICAgIG1pbi1oZWlnaHQ6IDI2dmg7XG4gIH1cbiAgbWFpbiAuc2NyaXB0RGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICB9XG4gIG1haW4gLnNjcmlwdERpdiAuc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIG1haW4gLnNjcmlwdERpdiBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICMxREExRjI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIG1haW4gLnNjcmlwdERpdiBoNDpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IHtcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgICBtYXJnaW4tbGVmdDogMHZ3O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICBtYWluIC52aWRlb0RpdiBpZnJhbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICB9XG4gIG1haW4gLnZpZGVvRGl2IC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBtYWluIC52aWRlb0RpdiAuZGVzY3JpcHRpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzFEQTFGMjtcbiAgfVxuICBtYWluIC52aWRlb0RpdiAuZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBtYWluIC5wYXJ0bmVyRGl2IHtcbiAgICBtYXJnaW46IDJ2aCAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgbWFpbiAucGFydG5lckRpdiBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMURBMUYyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICBtYWluIC5wYXJ0bmVyRGl2IC5wYXJ0bmVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIG1haW4gLnBhcnRuZXJEaXYgLnBhcnRuZXJzIGxpIHtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XG4gIH1cbiAgZm9vdGVyICNCRyB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIGZvb3RlciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIGRpdiBoMSB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgZm9vdGVyIGRpdiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG4gIGZvb3RlciAuZm9vdCB7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgZm9vdGVyIC5mb290IC5pbWdzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIGZvb3RlciAuZm9vdCBmb3JtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgZm9vdGVyIC5mb290IGZvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cbiAgZm9vdGVyIC5mb290IGZvcm0gaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICB3aWR0aDogMTV2dztcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cbiAgZm9vdGVyIC5mb290IGZvcm0gLnN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUlBO0VBRUksVUFBQTtBQUZKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQVlBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWko7QUFISTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBS1I7QUFKUztFQUNHLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTVo7QUFFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHUTtFQUNJLGFBQUE7QUFEWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFBWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUVhO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0MsV0FBQTtFQUNBLGdDQUFBO0VBQ0QsU0FBQTtFQUNBLFlBQUE7QUFBaEI7QUFFYTtFQUNHLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFBaEI7QUFJZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNELGFBQUE7RUFDQSx5QkFBQTtBQUZuQjtBQU1nQjtFQUVJLFVBQUE7RUFFQyxjQUFBO0VBQ0QsWUFBQTtBQU5wQjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVJSO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUlI7O0FBWUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNELHlCQUFBO0FBVEo7QUFVSTtFQUNJLG1CQUFBO0VBQ0QsWUFBQTtFQUNKLGdCQUFBO0VBQ0ssV0FBQTtFQUNBLGFBQUE7QUFSUjtBQVNRO0VBQ0ksY0FsSEo7RUFtSEksZUFBQTtFQUNGLGtCQUFBO0FBUFY7QUFTUTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBOUhEO0FBc0hYO0FBV0k7RUFLSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYlI7QUFRUTtFQUNJLGtDQUFBO0FBTlo7QUFXTTtFQW1CTSxvQ0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTVCWjtBQURZO0VBQ0ssWUFBQTtBQUdqQjtBQUNZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ2hCO0FBZUk7RUFDSSxVQUFBO0VBQ0QsZUFBQTtFQUVBLGdCQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRSO0FBZVE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUVBLG9DQUFBO0VBQ0Esd0JBQUE7QUFkWjtBQWVZO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBZGhCO0FBbUJBO0VBRUkseUJBck1PO0VBc01QLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFsQko7QUFvQkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQWxCUjtBQW9CSTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBbk5DO0VBb05ELGVBQUE7QUFsQlA7QUFvQkk7RUFDSSxZQUFBO0FBbEJSO0FBcUJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBaE9PO0VBaU9QLGdCQUFBO0VBQ0EsaUJBQUE7QUFuQko7QUFxQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQyxtQkFBQTtFQUNELFdBQUE7RUFDQSxZQUFBO0FBbkJSO0FBcUJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBcEJSO0FBcUJJO0VBQ0ksZUFBQTtFQUNBLGNBcFBBO0FBaU9SO0FBcUJJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFuQlI7QUF1QkE7RUFDSSxlQUFBO0VBQ0EseUJBL1BPO0VBZ1FQLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUFzQkk7RUFDSSxrQkFBQTtFQUNBLGNBblFBO0VBb1FBLGVBQUE7QUFwQlI7QUFzQkE7RUFHSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBdEJKO0FBdUJJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBckJSOztBQTBCQTtFQUVJLFlBQUE7RUFLQSx5QkE1Ukk7QUFnUVI7QUF3Qkc7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FBdEJKO0FBeUJLO0VBQ0csYUFBQTtFQUNBLHVCQUFBO0FBdkJSO0FBd0JRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBdEJaO0FBd0JRO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXRCWjtBQXlCSztFQVFHLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUE5QlI7QUFzQlk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBcEJoQjtBQTJCUTtFQUNLLG1CQUFBO0VBRUQsV0FBQTtFQW1CQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBNUNaO0FBd0JZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUF0QmhCO0FBd0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXRCaEI7QUF3Qlk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBdEJoQjs7QUErQkE7RUFDSTtJQUNJLG1CQUFBO0VBNUJOO0VBOEJFO0lBQ0kscUJBQUE7RUE1Qk47RUE4QkU7SUFDSSxtQkFBQTtFQTVCTjtBQUNGO0FBOEJBO0VBQ0k7SUFDSSxhQUFBO0VBNUJOO0VBOEJVO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUE1QlY7RUE4QlU7SUFDSSxnQkFBQTtFQTVCZDtFQWdDVTtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtFQTlCZDtFQWlDYztJQUNJLGVBQUE7RUEvQmxCO0VBaUNjO0lBQ0ksZUFBQTtFQS9CbEI7RUFvQ0U7SUFDSSxZQUFBO0VBbENOO0FBQ0Y7QUFvQ0E7RUFFSztJQUNDLGtCQUFBO0VBbkNKO0VBcUNHO0lBQ0csZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQVlBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBOUNOO0VBK0JNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7RUE3QlY7RUE4Qlc7SUFDRyxlQUFBO0lBRUEsbUJBQUE7RUE3QmQ7RUFxQ007SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQW5DVjtFQXNDVTtJQUNJLGFBQUE7RUFwQ2Q7RUFxQ1U7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQW5DZDtFQXFDVTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFQW5DZDtFQXNDVTtJQUNJLFlBQUE7RUFwQ2Q7RUFxQ2U7SUFDRyxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQyxXQUFBO0lBQ0EsZ0NBQUE7SUFDRCxTQUFBO0lBQ0EsWUFBQTtFQW5DbEI7RUFxQ2U7SUFDRyxvQkFBQTtJQUNBLGdDQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0VBbkNsQjtFQXVDa0I7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNELGFBQUE7SUFDQSx5QkFBQTtFQXJDckI7RUF5Q2tCO0lBRUksVUFBQTtJQUVDLGNBQUE7SUFDRCxZQUFBO0VBekN0QjtFQTZDTTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQTNDVjtFQTZDTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEzQ1Y7RUErQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQyxhQUFBO0lBQ0EsOEJBQUE7SUFDRCx5QkFBQTtFQTdDTjtFQThDTTtJQUNJLG1CQUFBO0lBQ0QsWUFBQTtJQUVDLFdBQUE7SUFDQSxhQUFBO0VBN0NWO0VBOENVO0lBQ0ksY0FsZlI7SUFtZlEsZUFBQTtJQUNGLGtCQUFBO0VBNUNaO0VBOENVO0lBRUksZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSx5QkEvZkw7RUFrZFQ7RUFnRE07SUFLSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBbERWO0VBNkNVO0lBQ0ksa0NBQUE7RUEzQ2Q7RUFnRFE7SUFtQk0sb0NBQUE7SUFDQSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUVBLGtCQUFBO0VBbEVkO0VBb0NjO0lBQ0ssWUFBQTtFQWxDbkI7RUFzQ2M7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUFwQ2xCO0VBcURNO0lBQ0ksVUFBQTtJQUNELGdCQUFBO0lBR0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDRCxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXJEVjtFQXNEVTtJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNRLGdCQUFBO0lBQ1Isb0NBQUE7SUFDQSx3QkFBQTtFQXBEZDtFQXFEYztJQUVJLGVBQUE7SUFDQSxnQkFBQTtFQXBEbEI7RUF5REU7SUFFSSx5QkF4a0JHO0lBeWtCSCxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBeEROO0VBMERNO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUF4RFY7RUEwRE07SUFDRyxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQXRsQkg7SUF1bEJHLGVBQUE7RUF4RFQ7RUEwRE07SUFDSSxZQUFBO0VBeERWO0VBMkRFO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBbm1CRztJQW9tQkgsZ0JBQUE7SUFDQSxlQUFBO0VBekROO0VBMkRNO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0MsbUJBQUE7SUFDRCxXQUFBO0lBQ0EsWUFBQTtFQXpEVjtFQTJETTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtFQTFEVjtFQTJETTtJQUNJLGVBQUE7SUFDQSxjQXZuQko7RUE4akJOO0VBMkRNO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUF6RFY7RUE2REU7SUFDSSxlQUFBO0lBQ0EseUJBbG9CRztJQW1vQkgsZ0JBQUE7SUFDQSxtQkFBQTtFQTNETjtFQTRETTtJQUNJLGtCQUFBO0lBQ0EsY0F0b0JKO0lBdW9CSSxlQUFBO0VBMURWO0VBNERFO0lBR0ksYUFBQTtJQUNBLGVBQUE7SUFDQSw4QkFBQTtFQTVETjtFQTZETTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQTNEVjtFQWdFRTtJQUNHLFdBQUE7SUFDQyxZQUFBO0lBS0EseUJBL3BCQTtFQTZsQk47RUE4REs7SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VBNUROO0VBK0RPO0lBQ0csYUFBQTtJQUNBLHVCQUFBO0VBN0RWO0VBOERVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBNURkO0VBOERVO0lBQ0ksWUFBQTtJQUNBLDRDQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQTVEZDtFQStETztJQVFHLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFwRVY7RUE0RGM7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBMURsQjtFQWlFVTtJQUNLLG1CQUFBO0lBRUQsV0FBQTtJQW1CQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBbEZkO0VBOERjO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUE1RGxCO0VBOERjO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQTVEbEI7RUE4RGM7SUFDSSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBNURsQjtBQUNGO0FBcUVBO0VBRU07SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUVBLG1CQUFBO0VBckVOO0VBdUVJO0lBRUcsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQVlBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBakZQO0VBa0VPO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7RUFoRVg7RUFpRVk7SUFDRyxlQUFBO0lBRUEsbUJBQUE7RUFoRWY7RUF3RU87SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXRFWDtFQXdFTztJQUNHLGFBQUE7SUFDQSxxQkFBQTtFQXRFVjtFQXVFVztJQUNJLGFBQUE7RUFyRWY7RUFzRVc7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQXBFZjtFQXNFVztJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFQXBFZjtFQXVFVztJQUNJLFlBQUE7RUFyRWY7RUFzRWdCO0lBQ0csZUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0MsV0FBQTtJQUNBLGdDQUFBO0lBQ0QsU0FBQTtJQUNBLFlBQUE7RUFwRW5CO0VBc0VnQjtJQUNHLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7RUFwRW5CO0VBd0VtQjtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0QsYUFBQTtJQUNBLHlCQUFBO0VBdEV0QjtFQTBFbUI7SUFFSSxVQUFBO0lBRUMsY0FBQTtJQUNELFlBQUE7RUExRXZCO0VBOEVPO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBNUVYO0VBOEVPO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQTVFWDtFQWdGRztJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNDLGFBQUE7SUFDQSw4QkFBQTtJQUNELHlCQUFBO0VBOUVQO0VBK0VPO0lBQ0ksbUJBQUE7SUFDRCxZQUFBO0lBRUMsV0FBQTtJQUNBLGFBQUE7RUE5RVg7RUErRVc7SUFDSSxjQWoxQlQ7SUFrMUJTLGVBQUE7SUFDRixrQkFBQTtFQTdFYjtFQStFVztJQUVJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EseUJBOTFCTjtFQWd4QlQ7RUFpRk87SUFLSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBbkZYO0VBOEVXO0lBQ0ksa0NBQUE7RUE1RWY7RUFpRlM7SUFtQk0sb0NBQUE7SUFDQSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUVBLGtCQUFBO0VBbkdmO0VBcUVlO0lBQ0ssWUFBQTtFQW5FcEI7RUF1RWU7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUFyRW5CO0VBc0ZPO0lBQ0ksVUFBQTtJQUNELGdCQUFBO0lBR0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDRCxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXRGWDtFQXVGVztJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNRLGdCQUFBO0lBQ1Isb0NBQUE7SUFDQSx3QkFBQTtFQXJGZjtFQXNGZTtJQUVJLGVBQUE7SUFDQSxnQkFBQTtFQXJGbkI7RUEwRkc7SUFFSSx5QkF2NkJFO0lBdzZCRixhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBekZQO0VBMkZPO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUF6Rlg7RUEyRk87SUFDRyxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQXI3Qko7SUFzN0JJLGVBQUE7RUF6RlY7RUEyRk87SUFDSSxZQUFBO0VBekZYO0VBNEZHO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBbDhCRTtJQW04QkYsZ0JBQUE7SUFDQSxlQUFBO0VBMUZQO0VBNEZPO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0MsbUJBQUE7SUFDRCxXQUFBO0lBQ0EsWUFBQTtFQTFGWDtFQTRGTztJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtFQTNGWDtFQTRGTztJQUNJLGVBQUE7SUFDQSxjQXQ5Qkw7RUE0M0JOO0VBNEZPO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUExRlg7RUE4Rkc7SUFDSSxlQUFBO0lBQ0EseUJBaitCRTtJQWsrQkYsZ0JBQUE7SUFDQSxtQkFBQTtFQTVGUDtFQTZGTztJQUNJLGtCQUFBO0lBQ0EsY0FyK0JMO0lBcytCSyxlQUFBO0VBM0ZYO0VBNkZHO0lBR0ksYUFBQTtJQUNBLGVBQUE7SUFDQSw4QkFBQTtFQTdGUDtFQThGTztJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQTVGWDtFQWlHRztJQUNHLFdBQUE7SUFDQyxZQUFBO0lBS0EseUJBOS9CRDtFQTI1Qk47RUErRk07SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VBN0ZQO0VBZ0dRO0lBQ0csYUFBQTtJQUNBLHVCQUFBO0VBOUZYO0VBK0ZXO0lBQ0ksZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBN0ZmO0VBK0ZXO0lBQ0ksWUFBQTtJQUNBLDRDQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQTdGZjtFQWdHUTtJQVFHLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFyR1g7RUE2RmU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBM0ZuQjtFQWtHVztJQUNLLG1CQUFBO0lBRUQsV0FBQTtJQW1CQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBbkhmO0VBK0ZlO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUE3Rm5CO0VBK0ZlO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQTdGbkI7RUErRmU7SUFDSSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBN0ZuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG4kamV0QmxhY2s6ICMzNDM0MzQ7XFxuJGJsdWU6ICAjMURBMUYyO1xcbiRiZzogIzI4MjgyQjtcXG5ib2R5e1xcbiAgIFxcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICAuc29jaWFsc3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDElO1xcbiAgICAgICAgbGVmdDogODUlO1xcbiAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICB9XFxuICAgIH1cXG4gICAgaGVpZ2h0OjI0dmggO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTFGMjtcXG4gICAgLmxvZ297XFxuICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgfVxcbiAgICAuaGVhZENvbnRhaW5lcntcXG4gICAgICAgIGRpdntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaDF7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA3NHB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIGgze1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDR2aDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAgICAgdGFibGV7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICB0aHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmIyO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgIGhlaWdodDozdmg7XFxuICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICB0aDpob3ZlcntcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNjZiMjtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAudm9sdW50ZWVye1xcbiAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHRke1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3ZoO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAudm9sdW50ZWVyOmhvdmVye1xcbiAgICAgICAgICAgICAgICB0ZHtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjIuNiU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgIGg1e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuICAgIH1cXG59XFxubWFpbntcXG4gICAgcm93LWdhcDogMXZoO1xcbiAgICBoZWlnaHQ6IDE1NXZoO1xcbiAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzI4MjgyQjtcXG4gICAgLmFib3V0e1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG4gICAgICAgaGVpZ2h0OiAzMnZoO1xcbiAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgICBoMntcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXG4gICAgICAgIH1cXG4gICAgICAgIHB7XFxuICAgICAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRqZXRCbGFjaztcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuZG9uYXRle1xcbiAgICAgICBcXG4gICAgICAgIGgxOmhvdmVye1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggd2hpdGU7XFxuICAgICAgICB9XFxuICAgICAgICB3aWR0aDogMzJ2dztcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgIGgxe1xcbiAgICAgICBcXG4gICAgICAgICAgICBidXR0b246aG92ZXJ7XFxuICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGp1bXBPbiAxcztcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0I0NDNTUwMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCAkYmx1ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjQ0M1NTAwO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjZ2dztcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnZoO1xcbiAgICAgICAgICAgIGhlaWdodDo0OHZoO1xcbiAgICAgICAgICAgIHdpZHRoOiAgMzB2dztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIC5zbGlkZXJXcmFwe1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgbWFyZ2luLXRvcDogN3ZoO1xcbiAgICAgICBcXG4gICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XFxuICAgICAgICAgbWluLXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgIG1pbi1oZWlnaHQ6IDI2dmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA0MHZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIC5pbWdTbGlkZXJ7XFxuICAgICAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnZoO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4uc2NyaXB0RGl2e1xcbiAgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRqZXRCbGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgIFxcbiAgICAuc2NyaXB0e1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIGg0e1xcbiAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgIGNvbG9yOiAkYmx1ZTtcXG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIGg0OmhvdmVye1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcbi52aWRlb0RpdntcXG4gICAgaGVpZ2h0OiA1NXZoO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkamV0QmxhY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgIG1hcmdpbi1yaWdodDogM3Z3O1xcbiAgICBcXG4gICAgaWZyYW1le1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDUwdnc7XFxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gICAgICAgIHdpZHRoOiAzNXZ3O1xcbiAgICAgICAgIFxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGgze1xcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgICAgY29sb3I6ICRibHVlO1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgfVxcbn1cXG4ucGFydG5lckRpdntcXG4gICAgbWFyZ2luOiAydmggM3Z3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkamV0QmxhY2s7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGgye1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICRibHVlO1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB9XFxuLnBhcnRuZXJze1xcbiAgIFxcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbGl7XFxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxufVxcbn1cXG59XFxuZm9vdGVye1xcbiAgIFxcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgI0JHe1xcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICBkaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoMXtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgfVxcbiAgICAgfVxcbiAgICAgLmZvb3R7XFxuICAgICAgICAuaW1nc3tcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgICAgICAgICBsYWJlbHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3ZoO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc3VibWl0e1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgICB9XFxufVxcbkBrZXlmcmFtZXMganVtcE9ue1xcbiAgICBmcm9te1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbiAgICA3MCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcbkBtZWRpYShtYXgtd2lkdGg6MTQwMHB4KXtcXG4gICAgbWFpbntcXG4gICAgICAgIGhlaWdodDogMTYwdmg7XFxuICAgICAgICAuZG9uYXRle1xcbiAgICAgICAgICAgIGgxe1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwdmg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogN3ZoO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzdmg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zbGlkZXJXcmFwe1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXZoO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC52aWRlb0RpdntcXG4gICAgICAgICAgICBpZnJhbWV7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaDN7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICB9XFxufVxcbkBtZWRpYShtYXgtd2lkdGg6MTEwMHB4KXtcXG4gICBcXG4gICAgIGJvZHl7XFxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgfVxcbiAgICAgaGVhZGVye1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAuc29jaWFsc3tcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDElO1xcbiAgICAgICAgICAgIGxlZnQ6IDgwJTtcXG4gICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgaGVpZ2h0OjMwdmggO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XFxuICAgICAgICAubG9nb3tcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjB2aDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmhlYWRDb250YWluZXJ7XFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGgxe1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaDN7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAgICAgdGFibGV7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgIHRoe1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6M3ZoO1xcbiAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICB0aDpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDY2YjI7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAudm9sdW50ZWVye1xcbiAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgdGR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgIC52b2x1bnRlZXI6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICB0ZHtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMi42JTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTd2dztcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuICAgICAgICBoNXtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICByb3ctZ2FwOiAxdmg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHZoO1xcbiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzI4MjgyQjtcXG4gICAgICAgIC5hYm91dHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xcbiAgICAgICAgICAgaGVpZ2h0OiAzMnZoO1xcbiAgICAgXFxuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XFxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcXG4gICAgICAgICAgICBoMntcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwdnc7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRqZXRCbGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZG9uYXRle1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgaDE6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHdpZHRoOiAzMnZ3O1xcbiAgICAgICAgICAgIGhlaWdodDogNDB2aDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcXG4gICAgICAgICAgaDF7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGp1bXBPbiAxcztcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCNDQzU1MDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCAkYmx1ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0I0NDNTUwMDtcXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2dnc7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2dmg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDo0OHZoO1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogIDMwdnc7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuc2xpZGVyV3JhcHtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XFxuICAgICAgICAgICAgIG1pbi13aWR0aDogMjZ2dztcXG4gICAgICAgICAgICAgbWluLWhlaWdodDogMjZ2aDtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjZ2dztcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIC5pbWdTbGlkZXJ7XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjZ2dztcXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnZoO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2dnc7XFxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnZoO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5zY3JpcHREaXZ7XFxuICAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkamV0QmxhY2s7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogMjB2aDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICAgXFxuICAgICAgICAuc2NyaXB0e1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICAgICAgICBoNHtcXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICBoNDpob3ZlcntcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnZpZGVvRGl2e1xcbiAgICAgICAgaGVpZ2h0OiA1NXZoO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGpldEJsYWNrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDB2dztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIFxcbiAgICAgICAgaWZyYW1le1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xcbiAgICAgICAgICAgIGhlaWdodDogNDV2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XFxuICAgICAgICAgICAgd2lkdGg6IDM1dnc7XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGgze1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnBhcnRuZXJEaXZ7XFxuICAgICAgICBtYXJnaW46IDJ2aCAwdnc7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkamV0QmxhY2s7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcbiAgICAucGFydG5lcnN7XFxuICAgICAgIFxcbiAgICAgICBcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG4gICAgfVxcbiAgICBmb290ZXJ7XFxuICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA0NXZoO1xcbiAgICAgICAjQkd7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNzAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgfVxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgaDF7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIH1cXG4gICAgICAgICAuZm9vdHtcXG4gICAgICAgICAgICAuaW1nc3tcXG4gICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgICAgZm9ybXtcXG4gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc3VibWl0e1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgIH1cXG59XFxuQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xcbiAgICBcXG4gICAgICBib2R5e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICBcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTI3dndcXG4gICAgICB9XFxuICAgICAgaGVhZGVye1xcbiAgICAgICAgIFxcbiAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICAgLnNvY2lhbHN7XFxuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgdG9wOiAxJTtcXG4gICAgICAgICAgICAgbGVmdDogODAlO1xcbiAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICAgICAgaGVpZ2h0OjMwdmggO1xcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyO1xcbiAgICAgICAgIC5sb2dve1xcbiAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwdnc7XFxuICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgfVxcbiAgICAgICAgIC5oZWFkQ29udGFpbmVye1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICBoMXtcXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICBoM3tcXG4gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgIH1cXG4gICAgICAgICAgICAgdGFibGV7XFxuICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgdGh7XFxuICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjN2aDtcXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB0aDpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA2NmIyO1xcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAudm9sdW50ZWVye1xcbiAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICB0ZHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDN2aDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmIyO1xcbiAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgLnZvbHVudGVlcjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICB0ZHtcXG4gICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIyLjYlO1xcbiAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICAgICAgcHtcXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03dnc7XFxuICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgfVxcbiAgICAgICAgIGg1e1xcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICB9XFxuICAgICBtYWlue1xcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgIHJvdy1nYXA6IDF2aDtcXG4gICAgICAgICBoZWlnaHQ6IDIwMHZoO1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0IzI4MjgyQjtcXG4gICAgICAgICAuYWJvdXR7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMnZoO1xcbiAgICAgIFxcbiAgICAgICAgICAgICB3aWR0aDogNDB2dztcXG4gICAgICAgICAgICAgcGFkZGluZzogMzBweDtcXG4gICAgICAgICAgICAgaDJ7XFxuICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxuICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwdnc7XFxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGpldEJsYWNrO1xcbiAgICAgICAgICAgICB9XFxuICAgICAgICAgfVxcbiAgICAgICAgIC5kb25hdGV7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgIGgxOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCB3aGl0ZTtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICB3aWR0aDogMzJ2dztcXG4gICAgICAgICAgICAgaGVpZ2h0OiA0MHZoO1xcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcXG4gICAgICAgICAgIGgxe1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICBidXR0b257XFxuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoganVtcE9uIDFzO1xcbiAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFxcdCNDQzU1MDA7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4ICRibHVlO1xcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXFx0I0NDNTUwMDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2dnc7XFxuICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNnZoO1xcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ4dmg7XFxuICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgICAgICAgICAgd2lkdGg6ICAzMHZ3O1xcbiAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcXG4gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgfVxcbiAgICAgICAgIC5zbGlkZXJXcmFwe1xcbiAgICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjZ2aDtcXG4gICAgICAgICAgICAgbWF4LWhlaWdodDogMzV2aDtcXG4gICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAuaW1nU2xpZGVye1xcbiAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2dnc7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2dmg7XFxuICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNnZ3O1xcbiAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2dmg7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICB9XFxuICAgICAuc2NyaXB0RGl2e1xcbiAgICAgICAgICBcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkamV0QmxhY2s7XFxuICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICAgIFxcbiAgICAgICAgIC5zY3JpcHR7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgIH1cXG4gICAgICAgICBoNHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgIH1cXG4gICAgICAgICBoNDpob3ZlcntcXG4gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgIH1cXG4gICAgIH1cXG4gICAgIC52aWRlb0RpdntcXG4gICAgICAgICBoZWlnaHQ6IDU1dmg7XFxuICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGpldEJsYWNrO1xcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAwdnc7XFxuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgIFxcbiAgICAgICAgIGlmcmFtZXtcXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgd2lkdGg6IDUwdnc7XFxuICAgICAgICAgICAgIGhlaWdodDogNDV2aDtcXG4gICAgICAgICB9XFxuICAgICAgICAgLmRlc2NyaXB0aW9ue1xcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gICAgICAgICAgICAgd2lkdGg6IDM1dnc7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICBoM3tcXG4gICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgfVxcbiAgICAgICAgIHB7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgICB9XFxuICAgICAucGFydG5lckRpdntcXG4gICAgICAgICBtYXJnaW46IDJ2aCAwdnc7XFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGpldEJsYWNrO1xcbiAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICBoMntcXG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICB9XFxuICAgICAucGFydG5lcnN7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICBsaXtcXG4gICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICB9XFxuICAgICB9XFxuICAgICB9XFxuICAgICB9XFxuICAgICBmb290ZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgICAgICAjQkd7XFxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwJTtcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICBoMXtcXG4gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuZm9vdHtcXG4gICAgICAgICAgICAgLmltZ3N7XFxuICAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XFxuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgICAgICAgICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzdmg7XFxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XFxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgLnN1Ym1pdHtcXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcXG4gICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xcbiAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBidWlsZEltYWdlU2xpZGVyIGZyb20gXCIuL3NsaWRlci5qc1wiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgZG9uYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkb25hdGVEaXYuY2xhc3NMaXN0LmFkZCgnZG9uYXRlJylcbiAgXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dCcpXG4gICAgY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFib3V0SGVhZC5pbm5lckhUTUwgPSAnQWJvdXQgVXMnXG4gICAgYWJvdXRQLmlubmVySFRNTCA9IGBCaWtlcyBGb3IgQ2hyaXN0IHdhcyBzdGFydGVkIGluIDIwMTYgd2l0aCBhIGNvbW1pdG1lbnQgdG8gaGVscGluZyB0aG9zZSBpbiBuZWVkIHdoaWxlIGFsc28gc2hhcmluZyB0aGUgbG92ZSBvZiBHb2QuIE91ciBvcmdhbml6YXRpb24gaGFzIHF1aWNrbHkgZ3Jvd24gdG8gZW5jb21wYXNzIHByb3ZpZGluZyB0cmFuc3BvcnRhdGlvbiBhY3Jvc3MgSGlsbHNib3JvdWdoLCBQaW5lbGxhcywgUG9sayBhbmQgUGFzY28gY291bnRpZXMgd2l0aCBhIG1pc3Npb24gdG8gb25lIGRheSBiZSBuYXRpb253aWRlLiBCeSBzaG93aW5nIEdvZCdzIGxvdmUgdGhyb3VnaCBwcm92aWRpbmdiaWN5Y2xlcyBmb3IgdGhvc2UgaW4gbmVlZCwgd2UgaG9wZSB0byBsZWFkIHRoZW0gdG8gYSBsaWZlIGluIEhpcyBldGVybmFsIGtpbmdkb20uYFxuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkKVxuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYWJvdXRQKVxuICAgIGNvbnN0IHZpc2lvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdmlzaW9uSGVhZC5pbm5lckhUTUwgPSAnT3VyIFZpc2lvbidcbiAgICBjb25zdCB2aXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB2aXNpb24uaW5uZXJIVE1MID0gJ091ciB2aXNpb24gaXMgc2ltcGxlLi4uIFByb3ZpZGUgbG92ZSBhbmQgY29tcGFzc2lvbiB0byBwZW9wbGUgd2hpbGUgYWxzbyB0ZW5kaW5nIHRvIHRoZWlyIHNwaXJpdHVhbCBuZWVkcyBzbyB0aGF0IGVhY2ggaW5kaXZpZHVhbCB3ZSB0b3VjaCBoYXMgYSBjaGFuY2UgdG8gbGVhcm4gYW5kIGdyb3cgaW4gQ2hyaXN0J1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQodmlzaW9uSGVhZClcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKHZpc2lvbilcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VXMpXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY29uc3QgZG9uYXRlQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkb25hdGVBbmNob3IuaW5uZXJIVE1MID0gJ0RvbmF0ZSB0b2RheSEnXG4gICAgZG9uYXRlQW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgfSlcbiAgICBoMS5hcHBlbmRDaGlsZChkb25hdGVBbmNob3IpXG4gICAgZG9uYXRlRGl2LmFwcGVuZENoaWxkKGgxKVxuICAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGRvbmF0ZURpdilcbiAgICBidWlsZEltYWdlU2xpZGVyKClcbiAgICBjb25zdCBzY3JpcHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcmlwdERpdi5jbGFzc0xpc3QuYWRkKCdzY3JpcHREaXYnKVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHNjcmlwdC5jbGFzc0xpc3QuYWRkKCdzY3JpcHQnKVxuICAgIHNjcmlwdC5pbm5lckhUTUwgPSAnR2l2ZSBqdXN0aWNlIHRvIHRoZSB3ZWFrIGFuZCB0aGUgZmF0aGVybGVzczsgbWFpbnRhaW4gdGhlIHJpZ2h0IG9mIHRoZSBhZmZsaWN0ZWQgYW5kIHRoZSBkZXN0aXR1dGUnXG4gICAgc2NyaXB0RGl2LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgIGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICBzY3JpcHRUYWcuaW5uZXJIVE1MID0gJ1BzYWxtIDgyOjMnXG4gICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cuYmlibGUuY29tL2JpYmxlLzU5L1BTQS44Mi4zLkVTVidcbiAgICB9KVxuICAgIHNjcmlwdERpdi5hcHBlbmRDaGlsZChzY3JpcHRUYWcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzY3JpcHREaXYpXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBjb25zdCB2aWRlb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmlkZW9EaXYuY2xhc3NMaXN0LmFkZCgndmlkZW9EaXYnKVxuICAgIGlmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3EtbFJlYzU3cE9nP3NpPTZXN0FvMmxIWHpfWmE3OGtcIiBcbiAgICBpZnJhbWUudGl0bGUgPSAnQmlrZXMgRm9yIENocmlzdCdcbiAgICB2aWRlb0Rpdi5hcHBlbmRDaGlsZChpZnJhbWUpXG4gICAgY29uc3QgdmlkZW9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmlkZW9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICAgY29uc3QgdmlkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHZpZEhlYWRlci5pbm5lckhUTUwgPSAnV2hvIHdlIGFyZSdcbiAgICB2aWRlb0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHZpZEhlYWRlcilcbiAgICBjb25zdCB2aWRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB2aWRQYXJhZ3JhcGguaW5uZXJIVE1MID0gYFdlIHByb3ZpZGUgZG9uYXRlZCBiaWN5Y2xlcyB0byB0aGUgbmVlZHksIHZldGVyYW5zLCB1bmRlcnByaXZpbGVnZWQgY2hpbGRyZW4gYW5kIHNlbmlvcnMgd2hpbGUgYWxzbyBtaW5pc3RlcmluZyB0byB0aGVpciBzcGlyaXR1YWwgbmVlZHMgYW5kIHNoYXJpbmcgR29kJ3MgbG92ZSB3aXRoIHRoZW08YnI+PGJyPiBUaGUgbW9zdCBpbXBvcnRhbnQgcGFydCBpbiBhbGwgb2YgdGhpcyBpcyB0aGF0IHRob3NlIHdobyByZWNlaXZlIGJpa2VzIGtub3cgdGhhdCBzb21lb25lIGxvdmVzIGFuZCBjYXJlcyBmb3IgdGhlbS4gXCJUaHJvdWdoIGdpdmluZyB3ZSBzaG93IGxvdmUsIGFuZCBpdCdzIHRoZSBzYW1lIGxvdmUgYW5kIGNvbXBhc3Npb24gdGhhdCBKZXN1cyBzaG93ZWQgdXNcIiBQYXQgc2F5cy4gV2l0aCBldmVyeSBiaWN5Y2xlLCBhIGJpYmxlIGdvZXMgYWxvbmcgd2l0aCBpdC4gXCJJdCdzIHRoZSBoYW5kYm9vayB0aGF0IGdldHMgdXMgdGhyb3VnaCB0aGlzIGxpZmUgYW5kIGludG8gaGVhdmVuIHRvIGJlIHdpdGggR29kIGZvciBhbGwgZXRlcm5pdHkuXCIgYFxuICAgIHZpZGVvRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodmlkUGFyYWdyYXBoKVxuICAgIHZpZGVvRGl2LmFwcGVuZENoaWxkKCh2aWRlb0Rlc2NyaXB0aW9uKSlcbiAgICBtYWluLmFwcGVuZENoaWxkKHZpZGVvRGl2KVxuICAgIGNvbnN0IHBhcnRuZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHBhcnRuZXJzLmNsYXNzTGlzdC5hZGQoJ3BhcnRuZXJzJylcbiAgICBjb25zdCBwYXJ0bmVyQXJyID0gWydGTCBEZXBhcnRtZW50IG9mIENvcnJlY3Rpb25zJywgYEhpbGxzYm9yb3VnaCBDb3VudHkgU2hlcmlmZidzIGRlcGFydG1lbnRgLCBgQW1hemluZyBMb3ZlIE1pbmlzdHJpZXNgLCBgRUNIT2AsICdUYW1wYSBDcm9zc3JvYWRzJywgYEtheSdzIE1pbmlzdHJ5YCwgJ0dyYWNlcG9pbnQgV2VsbG5lc3MnLCAnTm9ydGhzaWRlIE1lbnRhbCBIZWFsdGgnLCBgQSBLaWQncyBQbGFjZWAsIGBGbG9yaWRhIEJhcHRpc3QgQ2hpbGRyZW4ncyBIb21lYCwgYExpYmVydHkgTWFub3JgLCBgV29tZW4ncyBSZXNvdXJjZSBDZW50ZXIgb2YgVGFtcGFgLCBgTWV0cm9wb2xpdGFuIE1pbmlzdHJpZXNgLCBgS2luc2hpcC0gQ2hpbGRyZW4ncyBIb21lYCwgYENhdGhvbGljIENoYXJpdGllc2AsIGBCbGFua2V0IFRhbXBhIEJheWAsYFRoZSBMb3JkJ3MgTGlnaHRob3VzZWAsIGBFdmVyeWRheSBCbGVzc2luZ3NgLCBgRmFtaWx5IFByb21pc2Ugb2YgR3JlYXRlciBCcmFuZG9uYCwgYFRhbXBhIEhvbWVsZXNzIE91dHJlYWNoYCwgYFNob3dlcmVkIGFuZCBFbXBvd2VyZWRgLCBgTWFyaW5lIEZhbWlsaWVzYCwgYFJDTUFgLCBgVGhlIFNhbHZhdGlvbiBBcm15YCwgYE5ldyBMaWZlIFZpbGxhZ2VgLCBgU3QuVmluY2VudCBEZSBQYXVsYF1cbiAgICBmb3IoIGxldCBpID0gMDsgaTxwYXJ0bmVyQXJyLmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gcGFydG5lckFycltpXVxuICAgICAgICBwYXJ0bmVycy5hcHBlbmRDaGlsZChsaSlcbiAgICB9XG4gICAgY29uc3QgcGFydG5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcGFydG5lckhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcGFydG5lckhlYWQuaW5uZXJIVE1MID0gJ091ciBQYXJ0bmVycydcbiAgICBwYXJ0bmVyRGl2LmFwcGVuZENoaWxkKHBhcnRuZXJIZWFkKVxuICAgIHBhcnRuZXJEaXYuY2xhc3NMaXN0LmFkZCgncGFydG5lckRpdicpXG4gICAgcGFydG5lckRpdi5hcHBlbmRDaGlsZChwYXJ0bmVycylcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhcnRuZXJEaXYpXG4gIH0iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBiZXN0IGZyb20gJy4vYmVzdC5qcGcnXG5pbXBvcnQgc21hbGwgZnJvbSAnLi9zbWFsbEJ1cy5qcGcnXG5pbXBvcnQgd2lubmVyIGZyb20gJy4vd2lubmVyLmpwZydcbmltcG9ydCBiZyBmcm9tICcuL0JHTG9nby5qcGcnXG5pbXBvcnQgYnVpbGRIb21lIGZyb20gJy4vYnVpbGRIb21lJ1xuaW1wb3J0IHBob3RvIGZyb20gJy4vbG9nby5qcGVnJ1xuaW1wb3J0IHl0IGZyb20gJy4veXQucG5nJ1xuaW1wb3J0IGZiIGZyb20gJy4vZmIuanBnJ1xuIFxuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyLnBuZydcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5sb2dvLnNyYyA9IHBob3RvXG5sb2dvLmFsdCA9ICdsb2dvJ1xubG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJylcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmhlYWRpbmcuaW5uZXJIVE1MID0gJ0Jpa2VzIEZvciBDaHJpc3QnXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRDb250YWluZXInKVxuaGVhZGluZy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5jb25zdCByZWFjaFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxucmVhY2hVcy5pbm5lckhUTUwgPSAnQ2FsbCBVczogODEzLTUzMy05MTc3J1xuIFxuY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5oZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpXG5oZWFkaW5nRGl2LmFwcGVuZENoaWxkKHJlYWNoVXMpXG4gXG5oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ0RpdilcblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxuY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG5mb3IobGV0IGkgPSAwOyBpPCA2OyBpKyspe1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxuICAgIHN3aXRjaChpKXtcbiAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgIHRoLmlubmVySFRNTCA9ICdIb21lJ1xuICAgICAgICAgICAgdGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgIGJ1aWxkSG9tZSgpXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICB0aC5pbm5lckhUTUwgPSAnQWJvdXQnXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoLmlubmVySFRNTCA9ICdNaXNzaW9ucydcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGguaW5uZXJIVE1MID0gJ1ZvbHVudGVlcidcbiAgICAgICAgICAgIHRoLmNsYXNzTGlzdC5hZGQoJ3ZvbHVudGVlcicpXG4gICAgICAgICAgIC8qICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9ICdIZWxwIExpc3QnXG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZCh0ZCkgKi9cbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGguaW5uZXJIVE1MID0gJ0V2ZW50cydcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgIHRoLmlubmVySFRNTCA9ICdDb250YWN0J1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGgpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKHRyKVxuaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcilcbmNvbnN0IGhlYnJld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBoZWJyZXdzLmlubmVySFRNTCA9IGBBbmQgZG8gbm90IGZvcmdldCB0byBkbyBnb29kIGFuZCB0byBzaGFyZSB3aXRoIG90aGVycywgZm9yIHdpdGggc3VjaCBzYWNyaWZpY2VzIEdvZCBpcyBwbGVhc2VkYFxuY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXG5oNS5pbm5lckhUTUwgPSAnIEhlYnJld3MgMTM6MTYnXG5oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVicmV3cylcbmhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoNSlcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpXG5jb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IHNvY2lhbHNCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmxldCBjb3VudCA9IDBcbndoaWxlKGNvdW50IDwzICl7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBcbiAgICBzd2l0Y2goY291bnQpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpbWcuc3JjID0gZmJcbiAgICAgICAgICAgIGltZy5hbHQgPSAnRmFjZWJvb2snXG4gICAgICAgICAgICBpbWcudGl0bGUgPSdGYWNlYm9vaydcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9CaWN5Y2xlczRDaHJpc3QvJ1xuICAgICAgICB9KVxuICAgICAgICAgXG4gICAgICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICBcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW1nLnNyYyA9IHl0XG4gICAgICAgICAgICBpbWcuYWx0ID0gJ3lvdXR1YmUnXG4gICAgICAgICAgICBpbWcudGl0bGUgPSdZb3V0dWJlJ1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0NQUTJaQm1BajlmbE9lR0U1MDhXdncnXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICBcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW1nLnNyYyA9IHR3aXR0ZXJcbiAgICAgICAgICAgIGltZy5hbHQgPSAndHdpdHRlcidcbiAgICAgICAgICAgIGltZy50aXRsZSA9ICdUd2l0dGVyJ1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL3R3aXR0ZXIuY29tL0Jpa2VzNENocmlzdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxuICAgXG4gICAgY291bnQrK1xufVxuc29jaWFscy5jbGFzc0xpc3QuYWRkKCdzb2NpYWxzJylcblxuXG5oZWFkZXIuYXBwZW5kQ2hpbGQoc29jaWFscylcbmJ1aWxkSG9tZSgpXG5jb25zdCBmb290ZXJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmZvb3RlckhlYWQuaW5uZXJIVE1MID0gJ0Jpa2VzIEZvciBDaHJpc3QnXG5mb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVySGVhZClcbmNvbnN0IEZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbkZvb3RlclAuaW5uZXJIVE1MID0gJ0Jpa2VzIEZvciBDaHJpc3QgaXMgYSA1MDEgKEMpKDMpIFRheC1FeGVtcHQgT3JnYW5pemF0aW9uLidcbmZvb3RlckRpdi5hcHBlbmRDaGlsZChGb290ZXJQKVxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRpdilcbmNvbnN0IGZvb3RlckZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZm9vdGVyRm9vdC5jbGFzc0xpc3QuYWRkKCdmb290JylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuaW5wdXQudHlwZSA9ICdlbWFpbCdcbmlucHV0Lm5hbWUgPSAnZW1haWwnXG5pbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJ1xuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG5sYWJlbC5mb3IgPSAnZW1haWwnXG5sYWJlbC5pbm5lckhUTUwgPSAnSm9pbiBvdXIgbWFpbGluZyBsaXN0PGJyPiBOZXZlciBtaXNzIGFuIHVwZGF0ZSdcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG5mb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuYnRuLnR5cGUgPSAnc3VibWl0J1xuYnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpXG5idG4uaW5uZXJIVE1MID0gJ1N1Ym1pdCdcbiBcbmZvcm0uYXBwZW5kQ2hpbGQoYnRuKVxuZm9vdGVyRm9vdC5hcHBlbmRDaGlsZChmb3JtKVxuY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvdW50ID0gMFxuY29uc3QgQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuQkcuaWQgPSAnQkcnXG5CRy5zcmMgPSBiZ1xuZm9vdGVyLmFwcGVuZENoaWxkKEJHKVxud2hpbGUoY291bnQgPCAzKXtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHN3aXRjaChjb3VudCl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGltZy5zcmMgPSAgd2lubmVyXG4gICAgICAgICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW1nLnNyYyA9c21hbGxcbiAgICAgICAgICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpbWcuc3JjID0gYmVzdFxuICAgICAgICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxufVxuaW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2ltZ3MnKVxuZm9vdGVyRm9vdC5hcHBlbmRDaGlsZChpbWdEaXYpXG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRm9vdClcbiIsIlxuaW1wb3J0IGEgZnJvbSAnLi9pbWdzL2Jpa2UuanBnJ1xuaW1wb3J0IGIgZnJvbSAnLi9pbWdzL2Jpa2VCLmpwZydcbmltcG9ydCBjIGZyb20gJy4vaW1ncy9iaWtlQy5qcGcnXG5pbXBvcnQgZCBmcm9tICcuL2ltZ3MvYmlrZUQuanBnJ1xuaW1wb3J0IGUgZnJvbSAnLi9pbWdzL2Jpa2VFLmpwZydcbmltcG9ydCBmIGZyb20gJy4vaW1ncy9iaWtlRi5qcGcnXG5pbXBvcnQgZyBmcm9tICcuL2ltZ3MvYmlrZUcuanBnJ1xuaW1wb3J0IGggZnJvbSAnLi9pbWdzL2Jpa2VILmpwZydcbmltcG9ydCBpIGZyb20gJy4vaW1ncy9iaWtlSS5qcGcnXG5pbXBvcnQgaiBmcm9tICcuL2ltZ3MvYmlrZUouanBnJ1xuaW1wb3J0IGsgZnJvbSAnLi9pbWdzL2Jpa2VLLnBuZydcbmltcG9ydCBtIGZyb20gJy4vaW1ncy9iaWtlTS5wbmcnXG5pbXBvcnQgbiBmcm9tICcuL2ltZ3MvYmlrZU4uanBnJ1xuaW1wb3J0IG8gZnJvbSAnLi9pbWdzL2Jpa2VPLmpwZydcbmltcG9ydCBwIGZyb20gJy4vaW1ncy9iaWtlUC5qcGcnXG5pbXBvcnQgcSBmcm9tICcuL2ltZ3MvYmlrZVEuanBnJ1xuIFxuaW1wb3J0IHMgZnJvbSAnLi9pbWdzL2Jpa2VTLmpwZydcbmltcG9ydCB0IGZyb20gJy4vaW1ncy9iaWtlVC5qcGcnXG5pbXBvcnQgdSBmcm9tICcuL2ltZ3MvYmlrZVUuanBnJ1xuaW1wb3J0IHYgZnJvbSAnLi9pbWdzL2Jpa2VWLmpwZydcbmltcG9ydCB3IGZyb20gJy4vaW1ncy9iaWtlVy5qcGcnXG5pbXBvcnQgeCBmcm9tICcuL2ltZ3MvYmlrZVguanBnJ1xuaW1wb3J0IGwgZnJvbSAnLi9pbWdzL2Jpa2VMLmpwZycgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEltYWdlU2xpZGVyKCl7XG4gICAgY29uc3QgYmlrZXMgPSBbYSxiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHMsdCx1LHYsdyx4IF1cbiAgICBjb25zdCBkb25hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uYXRlJylcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWdTbGlkZXInKVxuICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2xpZGVyV3JhcCcpXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBiaWtlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmlrZXNbaV1cbiAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIH1cbiAgICBsZXQgY291bnQgPSAwXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgbGV0IHZ3ID0gMjZcbiAgICAgICAgaWYoY291bnQgPT0tMjApe1xuICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvdW50LS1cbiAgICAgICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWBcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAxcyBlYXNlLWluLW91dCdcbiAgICAgICAgICAgIH1cbiAgICB9LDUwMDApXG4gICAgd3JhcC5hcHBlbmRDaGlsZChzbGlkZXIpXG4gICAgZG9uYXRlLmFwcGVuZENoaWxkKHdyYXApXG59XG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9