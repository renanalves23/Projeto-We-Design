
// Menu Mobile

const hamb_icon = document.getElementById('hamburguer-icon').onclick = () => {
    document.getElementById('sliding-header-menu-outer').style.right = '0px';
};

const close_icon = document.getElementById('sliding-header-menu-close-button').onclick = () => {
  document.getElementById('sliding-header-menu-outer').style.right = '-312px';
};


//id="sliding-header-menu-outer"
//id="hamburguer-icon"
// class="close-icon"


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";



// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


// id service-previous // id service-next //service-title //service-text

// SETA PREVIOUS
var servico_atual = 0;
document.getElementById('service-previous').onclick = function () {
    //se estiver na posição zero, ir para o último
  if (servico_atual == 0) {
    var servico_anterior = our_services.length - 1;
  }else {
    var servico_anterior = servico_atual - 1;
  }

  document.getElementById('service-title').innerHTML = our_services[servico_anterior].title;
  document.getElementById('service-text').innerHTML = our_services[servico_anterior].text;
  servico_atual = servico_anterior;
}

// SETA NEXT
document.getElementById('service-next').onclick = function () {
  //se estiver na posição zero, ir para o último
if (servico_atual == our_services.length - 1) {
  var servico_seguinte = 0;
}else {
  var servico_seguinte = servico_atual + 1;
}

document.getElementById('service-title').innerHTML = our_services[servico_seguinte].title;
document.getElementById('service-text').innerHTML = our_services[servico_seguinte].text;
servico_atual = servico_seguinte;
}


// Data Footer



  
   


   