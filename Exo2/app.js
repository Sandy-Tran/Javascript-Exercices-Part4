var language = ['PHP', 'JavaScript', 'HTML', 'CSS', 'JAVA', 'Bootstrap'];

function addLanguage() {
  var input = document.getElementById('new').value;
  language.unshift(input);
  alert(language);
  document.getElementById('html').innerHTML = language;

}
function seeLanguage() {
  alert(language);
}
