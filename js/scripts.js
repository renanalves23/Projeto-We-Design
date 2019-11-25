
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

var unselected_color = "#646872";
var selected_color = "#2A2D34";

//selecionar e guardar os elementos com a classe singletab

var about_tags = document.getElementsByClassName('single-tab');



for (var i = 0; i < about_tags.length; i++) {
     
  about_tags[i].onclick = function () {

      //outro loop para unselect do realce
      for (var j = 0; j < about_tags.length; j++) {
          about_tags[j].style['background-color'] = unselected_color;
      }
   
     this.style['background-color'] = selected_color;
     this.style['font-weight'] = 'bold';

   
  };
  
}




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


// Data Footer



  
   


   