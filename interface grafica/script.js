let buscarPoliticoEmHtml = document.getElementById("buscarPoliticoEmHtml");
let PesquisarPolitico = document.getElementById("PesquisarPolitico");

async function getPolitico();

let PesquisarPoliticoValue = PesquisarPolitico.value;
//const uri = (link da api +PesquisarPolitivoValue+ "");
const encodeUri = encodeUri(uri);
const resposta = await fetch(encodeUri);
const json = await resposta.json();
console.log(json);

// document.getElementById('tipo do dado do politico').innerHTML = json.results.;
// document.getElementById('tipo do dado do politico').innerHTML = json.results.;
// document.getElementById('tipo do dado do politico').innerHTML = json.results.;      