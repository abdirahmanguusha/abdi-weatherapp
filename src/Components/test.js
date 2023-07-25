/*--
	Author: W3layouts
	Author URL: http://w3layouts.com
	License: Creative Commons Attribution 3.0 Unported
	License URL: http://creativecommons.org/licenses/by/3.0/
--*/

/*-- Reset Code --*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
dl,
dt,
dd,
ol,
nav ul,
nav li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* start editing from here */
a {
  text-decoration: none;
}
.txt-rt {
  text-align: right;
} /* text align right */
.txt-lt {
  text-align: left;
} /* text align left */
.txt-center {
  text-align: center;
} /* text align center */
.float-rt {
  float: right;
} /* float right */
.float-lt {
  float: left;
} /* float left */
.clear {
  clear: both;
} /* clear float */
.pos-relative {
  position: relative;
} /* Position Relative */
.pos-absolute {
  position: absolute;
} /* Position Absolute */
.vertical-base {
  vertical-align: baseline;
} /* vertical align baseline */
.vertical-top {
  vertical-align: top;
} /* vertical align top */
.underline {
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
  margin: 0 0 20px 0;
} /* Add 5px bottom padding and a underline */
nav.vertical ul li {
  display: block;
} /* vertical menu */
nav.horizontal ul li {
  display: inline-block;
} /* horizontal menu */
img {
  max-width: 100%;
}
.current-time {
  font-size: 35px;
  font-weight: 100;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.current-date {
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 1px;
}

/*-- //Reset Code --*/

/*-- Index-Page-Styling --*/

body {
  background: url("./images/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

body a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
}

h1 {
  font-size: 50px;
  font-weight: 400;
  color: #f9f9f9;
  font-family: "Oxygen", sans-serif;
  letter-spacing: 7px;
  margin-top: 50px;
}

.container {
  width: 65%;
  height: 80vh;
  margin: 50px auto;
  background-color: rgba(0, 0, 0, 0.73);
}

.city {
  width: 60%;
  height: 100%;
  float: left;
  background: url("./images/city.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  min-height: 500px;
  position: relative;
  background-position-x: -30px;
}

.title {
  float: right;
  font-family: "Oxygen", sans-serif;
  padding: 30px 30px 0 0;
}

.title h2 {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}

.title h3 {
  font-size: 25px;
  font-weight: bold;
  color: #eee;
  margin-top: 0px;
  text-align: right;
}

.date-time {
  position: absolute;
  bottom: 0;
  color: #fff;
  width: 90%;
  padding: 0 30px 10px 30px;
  font-family: "Oxygen", sans-serif;
}

div#txt {
  font-size: 35px;
  font-weight: 100;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.dmy {
  float: left;
  text-align: left;
  position: absolute;
}

.temperature {
  width: 50%;
  float: right;
  position: relative;
  left: 10px;
}

.temperature p {
  font-family: "Raleway", sans-serif;
  font-size: 80px;
  font-weight: 100;
  margin: 0 40px;
}

.temperature p span {
  font-size: 50px;
  font-weight: 200;
}

.forecast {
  width: 40%;
  float: left;
  height: 100%;
}

.forecast-icon {
  padding: 25px 0;
  /* background: white; */
}

.today-weather h3 {
  text-transform: capitalize;
  font-size: 50px;
  color: #fff;
  width: 80%;
  margin: 0 auto 10px;
  padding-bottom: 10px;
  border-width: thin;
  border-bottom: 1px solid #eee;
}

.today-weather ul li {
  width: 74%;
  margin: 0 auto;
  line-height: 39px;
  border-width: thin;
  border-bottom: 1px solid #777;
  color: #eee;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}

.today-weather ul li span {
  float: right;
  padding-right: 10px;
}

.today-weather ul li:nth-child(5) {
  border-bottom: none;
}

.footer {
  padding-bottom: 20px;
}

.copyright p {
  color: #fff;
}

.copyright p a {
  color: #fff;
}
/*--w3layouts--*/
/*--agileits--*/
.copyright p a:hover {
  color: #ffeb3b;
}

/*-- //Index-Page-Styling --*/

/*-- Responsive Code --*/

@media screen and (max-width: 1920px) {
  .container {
    width: 50%;
  }
}

@media screen and (max-width: 1440px) {
  .container {
    width: 55%;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    width: 60%;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    width: 75%;
  }
}

@media screen and (max-width: 966px) {
  .container {
    width: 90%;
  }
}

@media screen and (max-width: 853px) {
  h1 {
    font-size: 45px;
  }
  /*--w3layouts--*/
  /*--agileits--*/
}

@media screen and (max-width: 800px) {
  h1 {
    font-size: 35px;
  }
  .temperature p {
    font-size: 100px;
  }
  .dmy {
    padding-top: 25px;
  }
}

@media screen and (max-width: 736px) {
  .temperature p {
    font-size: 80px;
  }
  .dmy {
    padding-top: 10px;
  }
  div#txt {
    font-size: 30px;
  }
  .forecast-icon img {
    width: 110px;
  }
}

@media screen and (max-width: 667px) {
  h1 {
    font-size: 40px;
    margin-top: 30px;
  }
  .container {
    width: 95%;
    margin-top: 30px;
  }
}

@media screen and (max-width: 640px) {
  h1 {
    font-size: 30px;
    margin-top: 45px;
  }
  div#txt {
    font-size: 25px;
  }
  /*--w3layouts--*/
  /*--agileits--*/
  .dmy {
    padding-top: 17px;
  }
  .temperature p {
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 603px) {
  h1 {
    font-size: 35px;
  }
  .city {
    width: 100%;
    min-height: 300px;
  }
  .temperature {
    text-align: right;
  }
  .temperature p {
    font-size: 100px;
  }
  .dmy {
    padding-top: 35px;
  }
  .forecast-icon {
    margin: 10px 0;
  }
  .forecast {
    width: 100%;
    padding-bottom: 30px;
  }
  .copyright {
    padding-bottom: 20px;
  }
  .copyright p {
    line-height: 30px;
    font-size: 14px;
  }
}

@media screen and (max-width: 533px) {
  h1 {
    font-size: 33px;
  }
}

@media screen and (max-width: 480px) {
  /*--w3layouts--*/
  /*--agileits--*/
  h1 {
    font-size: 28px;
    letter-spacing: 2px;
  }
  .container {
    margin-bottom: 20px;
  }
  .forecast-icon {
    margin: 40px 0 10px;
  }
  .forecast-icon img {
    width: 100px;
  }
  .today-weather h3 {
    font-size: 40px;
  }
  .city {
    min-height: 450px;
  }
  .title h2 {
    font-size: 25px;
  }
  .title h3 {
    font-size: 14px;
  }
  .date-time {
    width: 100%;
    padding: 0;
  }
  .dmy {
    padding: 0;
    margin-bottom: 35px;
    text-align: center;
    width: 100%;
  }
  div#txt {
    font-size: 30px;
  }
  .date {
    font-size: 22px;
  }
  .temperature {
    text-align: center;
    width: 100%;
  }
  .copyright {
    padding: 20px;
  }
  .temperature p {
    font-size: 60px;
    padding-bottom: 15px;
  }
  .forecast-icon img {
    width: 65px;
  }
  .today-weather h3 {
    font-size: 30px;
  }
  .copyright p {
    line-height: 25px;
    font-size: 13px;
  }
  .container {
    height: 60vh;
    margin-top: 60px;
  }
  .mb-icon {
    top: 20% !important;
    display: block !important;
  }
  .forecast-icon,
  .today-weather h3 {
    display: none;
  }
  .today-weather {
    background-color: rgba(0, 0, 0, 0.73);
    margin-top: 22px;
    padding: 25px 0px;
  }
}

@media screen and (max-width: 375px) {
  h1 {
    font-size: 26px;
    line-height: 1.5em;
    letter-spacing: 0;
  }
  .city {
    min-height: 315px;
  }
  .dmy {
    margin-bottom: 30px;
  }
  .date {
    font-size: 18px;
  }
  .temperature p {
    padding-bottom: 15px;
  }
}

/*-- //Responsive Code --*/
.cityHead {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}
.search-box .img-box {
  background: rgb(255, 255, 255, 0.2);
  border-radius: 50%;
  height: 32px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
}
.search-box img {
  width: 60%;
  cursor: pointer;
}
.search-box .search-bar {
  border: none;
  padding: 10px 11px;
  background: transparent;
  color: white;
  border-bottom: 1px solid;
  font-size: 16px;
}
.search-box .search-bar::placeholder {
  color: white;
}
.search-bar:focus {
  outline: none;
  border-bottom: 1px solid gray;
  transition: all 1s ease-in-out;
}
.mb-icon {
  height: 100%;
  position: absolute;
  top: 34%;
  left: 36%;
  z-index: 1;
  display: none;
}
.mb-icon p {
  color: white;
  width: fit-content;
  position: relative;
  left: 24%;
  top: 2%;
  font-size: 25px;
}
.footer-info {
  color: white;
}
.footer-info a {
  color: floralwhite;
  font-weight: bold;
}
.hh_button {
  display: inline-block;
  text-decoration: none;
  background: linear-gradient(to right, #ff8a00, #da1b60);
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  position: relative;
  margin-top: 30px;
  margin: 0px;
  position: absolute;
  right: 20px;
  top: 1.5%;
}

.error__text{
  opacity: 0;
font-size: 22px;
color: #f9f9f9;
background-color: red;
border-radius: 5px;
margin-top: 0px;
}
.title2{
  background-color: rgba(255, 255, 255, 0.79);
  color: red;
  height: 100%;
  align-items: center;
}

.title2 h2{
font-size: 40px;
margin: auto;

}
.search__error{
  color: red;
  font-weight: bolder;
background-color: #eee;
margin-bottom: 10px;
padding: 5px;
font-size: 17px;
margin-left: 5px;
border-radius: 9px;
margin-right: 5px;
}
