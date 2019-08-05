"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE dissemination_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("dissemination", [
      {
        added_by: 1,
        headline: "Detectar y detener a los saboteadores del espectro",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Socrates project",
        date: "2018-05-11 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7573"
      },
      {
        added_by: 1,
        headline:"Vía libre para el uso de ondas milimétricas con la tecnología  5G",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "mm waves and 5G technology",
        date: "2017-12-29 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7220"
      },
      {
        added_by: 1,
        headline:"Investigadores de la UC3M e IMDEA Networks presentan sus novedades sobre 5G en el Mobile World Congress 2018",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "IMDEA Networks and UC3M at MWC 2018",
        date: "2017-12-29 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7289"
      },
      {
        added_by: 1,
        headline:"IMDEA Networks participa en el primer máster sobre 5G del mundo",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: `First 5G master's degree`,
        date: "2018-03-13 00:00:00.000+00",
        pr_news: "NEWS",
        url:"https://www.networks.imdea.org/es/actualidad/noticias/2018/imdea-networks-participa-primer-master-sobre-5g-mundo"
      },
      {
        added_by: 1,
        headline:"Una investigación analizará la influencia de los algoritmos en la publicidad online",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "My Bubble project",
        date: "2018-04-19 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7274"
      },
      {
        added_by: 1,
        headline:"Miles de aplicaciones móviles para niños pueden estar violando su privacidad",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Apps for children might be violating their privacy",
        date: "2018-04-24 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7357"
      },
      {
        added_by: 1,
        headline: "Procesamiento dinámico en redes 5G",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Industrial PhD-Telcaria",
        date: "2018-03-6 00:00:00.000+00",
        pr_news: "NEWS",
        url:"https://www.networks.imdea.org/es/actualidad/noticias/2018/procesamiento-dinamico-redes-5g"
      },
      {
        added_by: 1,
        headline:"Desarrollan una solución de red de transporte flexible y dinámica para las comunicaciones 5G",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Crosshaul Final Review",
        date: "2018-05-30 00:00:00.000+00",
        pr_news: "PR",
        url: "https://www.networks.imdea.org/es/printpdf/7405"
      },
      {
        added_by: 1,
        headline:"Desarrollan una herramienta que muestra la brecha de género en Facebook",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "Facebook gender divide",
        date: "2018-06-20 00:00:00.000+00",
        pr_news: "NEWS",
        url:"https://www.networks.imdea.org/es/actualidad/noticias/2018/desarrollan-una-herramienta-que-muestra-brecha-genero-facebook"
      },
      {
        added_by: 1,
        headline:"Un sistema de posicionamiento impulsa la futura innovación inalámbrica",
        lead_paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat deleniti? Quaerat dolor fugiat provident aperiam vitae odit perspiciatis nemo consequuntur tempora consequatur facere architecto, molestias obcaecati id iusto voluptas!",
        summary: "WiSHFUL Project",
        date: "2018-08-31 00:00:00.000+00",
        pr_news: "NEWS",
        url:"https://www.networks.imdea.org/es/actualidad/noticias/2018/un-sistema-posicionamiento-impulsa-futura-innovacion-inalambrica"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dissemination", null, {});
  }
};
