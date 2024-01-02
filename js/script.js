// inputs
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var sUpArr = [];
// catch base url from localhost
var path = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < path.length - 1; i++) {baseURL += '/' + path[i]}
/*signup*/
if (localStorage.getItem('users') !== null)
{sUpArr = JSON.parse(localStorage.getItem('users'))}else{sUpArr = [];}
function EmailLetter() {
  for (var i = 0; i < sUpArr.length; i++) {
      if (sUpArr[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
          return false}}}
//when inputs == Empty => All inputs is required
function signUp() {
  if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == ""){
      document.getElementById('require').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
      return false;}else{
  var signUp1 = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  }
  if (EmailLetter() == false) {
    clearForm();
      document.getElementById('require').innerHTML = '<span class="text-danger fw-bold m-3">email already exists</span>'
    } else {
sUpArr.push(signUp1);
if (baseURL == '/') {
        location.replace('https://' + location.hostname + '/index.html')
      } else {location.replace(baseURL + '/index.html')}
      clearForm();
        localStorage.setItem('users', JSON.stringify(sUpArr))
        document.getElementById('require').innerHTML = '<span class="text-success m-3">Success</span>'}
}}
function clearForm(){
  signupName.value='';
  signupEmail.value='';         
  signupPassword.value='';}
//   /*login*/
  function login() {
    if (signinPassword.value == "" || signinEmail.value == "")
    {document.getElementById('item').innerHTML = '<span class="text-danger fw-bold m-3">All inputs is required</span>'
      return false} else {
var password = signinPassword.value;
var email = signinEmail.value;
for (var i = 0; i < sUpArr.length; i++) {
    if (sUpArr[i].email.toLowerCase() == email.toLowerCase() && sUpArr[i].password.toLowerCase() == password.toLowerCase()) {
        localStorage.setItem('UserName', sUpArr[i].name)
        if (baseURL == '/') {
            location.replace('https://' + location.hostname + '/home.html')
          } else {location.replace(baseURL + '/home.html')}
          document.getElementById('item').innerHTML = '<span class="text-success m-3">Success</span>'
        } else {
        document.getElementById('item').innerHTML = '<span class="p-2 text-danger fw-bold">incorrect email or password</span>'
    }
  }  
}}
//  home page
var userName = localStorage.getItem('UserName')
if (userName) {document.getElementById('userName').innerHTML = "Welcome " + userName}
// logout
function logout() {localStorage.removeItem('UserName')}