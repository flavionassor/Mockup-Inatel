var situacaoAtual = ['questao01', 'questao02', 'questao03', 'questao04', 'questao05', 'questao06', 'questao07', 'questao08', 'questao09']
var opcoes = ['opcao01', 'opcao02', 'opcao03', 'opcao04', 'opcao05', 'opcao06', 'opcao07', 'opcao08', 'opcao09', 'opcao10', 'opcao11', 'opcao12', 'opcao13', 'opcao14', 'opcao15', 'opcao16', 'opcao17', 'opcao18', 'opcao19', 'opcao20', 'opcao21', 'opcao22', 'opcao23', 'opcao24', 'opcao25', 'opcao26', 'opcao27']
var opcoesData = [];

//deixa apenas uma opção ser selecionada por vez.
function onlyOne(checkbox,i) {
    var checkboxes = document.getElementsByName(situacaoAtual[i])
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

//armazena respostas no armazenamento local.
function handleSubmit(){    
    for(var i = 0; i < opcoes.length; i++){
        opcoesData[i] = document.getElementById(opcoes[i]).checked;
        localStorage.setItem(opcoes[i], opcoesData[i]);
    }    
}

//seleciona as respostas escolhidas no gabarito
function chosenQuest(){
    for(var i = 0; i < opcoes.length; i++){        
        if(localStorage.getItem(opcoes[i]) == 'true'){
            document.getElementById(opcoes[i]).checked = true;
        }    
    }   
}

//calcula valores a serem inseridos no grafico
function calcGraph(){
    var matValue = 0;
    var histValue = 0;
    var geoValue = 0;

    if(localStorage.getItem(opcoes[0]) == 'true'){
        matValue++;
    }

    if(localStorage.getItem(opcoes[5]) == 'true'){
        matValue++;
    }

    if(localStorage.getItem(opcoes[7]) == 'true'){
        matValue++;
    }

    if(localStorage.getItem(opcoes[11]) == 'true'){
        histValue++;
    }

    if(localStorage.getItem(opcoes[13]) == 'true'){
        histValue++;
    }

    if(localStorage.getItem(opcoes[16]) == 'true'){
        histValue++;
    }

    if(localStorage.getItem(opcoes[19]) == 'true'){
        geoValue++;
    } 

    if(localStorage.getItem(opcoes[22]) == 'true'){
        geoValue++;
    }

    if(localStorage.getItem(opcoes[24]) == 'true'){
        geoValue++;
    }

    switch(matValue){
        case 0:
        break;

        case 1:
            document.getElementById("matAcerto").style.height = '106px';
            document.getElementById("matAcerto").style.top = '780px';
            document.getElementById("valorMat").innerHTML = "1";
            document.getElementById("valorMat").style.top = '746px';
        break;

        case 2:
            document.getElementById("matAcerto").style.height = '207px';
            document.getElementById("matAcerto").style.top = '679px';
            document.getElementById("valorMat").innerHTML = "2";
            document.getElementById("valorMat").style.top = '645px';
        break;

        case 3:
            document.getElementById("matAcerto").style.height = '308px';
            document.getElementById("matAcerto").style.top = '578px';
            document.getElementById("valorMat").innerHTML = "3";
            document.getElementById("valorMat").style.top = '545px';
        break;
    }

    switch(histValue){
        case 0:
        break;

        case 1:
            document.getElementById("histAcerto").style.height = '106px';
            document.getElementById("histAcerto").style.top = '780px';
            document.getElementById("valorHist").innerHTML = "1";
            document.getElementById("valorHist").style.top = '746px';
        break;

        case 2:
            document.getElementById("histAcerto").style.height = '207px';
            document.getElementById("histAcerto").style.top = '679px';
            document.getElementById("valorHist").innerHTML = "2";
            document.getElementById("valorHist").style.top = '645px';
        break;

        case 3:
            document.getElementById("histAcerto").style.height = '308px';
            document.getElementById("histAcerto").style.top = '578px';
            document.getElementById("valorHist").innerHTML = "3";
            document.getElementById("valorHist").style.top = '545px';
        break;
    }

    switch(geoValue){
        case 0:
        break;

        case 1:
            document.getElementById("geoAcerto").style.height = '106px';
            document.getElementById("geoAcerto").style.top = '780px';
            document.getElementById("valorGeo").innerHTML = "1";
            document.getElementById("valorGeo").style.top = '746px';
        break;

        case 2:
            document.getElementById("geoAcerto").style.height = '207px';
            document.getElementById("geoAcerto").style.top = '679px';
            document.getElementById("valorGeo").innerHTML = "2";
            document.getElementById("valorGeo").style.top = '645px';
        break;

        case 3:
            document.getElementById("geoAcerto").style.height = '308px';
            document.getElementById("geoAcerto").style.top = '578px';
            document.getElementById("valorGeo").innerHTML = "3";
            document.getElementById("valorGeo").style.top = '545px';
        break;
    }

    var valorQuestao = 100/9;
    var nota = (matValue + geoValue + histValue) * valorQuestao;
    if(nota >=70 ){
        document.getElementById("valorNota").innerHTML = "Parabéns! Você tirou " + parseInt(nota) + ".";
    }else{
        document.getElementById("valorNota").innerHTML = "Você tirou " + parseInt(nota) + ".";
    }
}
