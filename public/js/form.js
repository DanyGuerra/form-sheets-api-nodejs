const btnRegsitrar = document.getElementById("btn_registrar");
const autoCompleteJS = new autoComplete({
  placeHolder: "Buscar titulo...",
  data: {
    src: [
      "Acupuntura Médica",
      "Adicciones",
      "Administración hospitalaria",
      "Alergia e Inmunología médica",
      "Anatomia Patológica",
      "Anestesiología",
      "Angiología",
      "Bienestar Y Salud Corporativa",
      "Bioenergética médica",
      "Biología",
      "Biólogo parasitólogo",
      "Bioquímica",
      "Cardiologia",
      "Ciencias de la salud",
      "Cirujano dentista",
      "Cirugia General",
      "Cirugia Oncologica",
      "Cirujano Oftalmologo",
      "Cirugia Pediatrica",
      "Cirugía Plástica",
      "Coloproctología",
      "Comunicación, Audiología Y Foniatría",
      "Cosmeotología",
      "Criminalística y ciencias forenses",
      "Dermatología",
      "Dietética y Nutrición",
      "Endometaendodoncia",
      "Enfermería y Obstetricia",
      "Epidemiología",
      "Gerontología",
      "Radio Diagnostico",
      "Salud Pública",
      "Estomatología",
      "Fisoterapeuta",
      "Gastroenterologo",
      "Ginecología",
      "Ginecologia Oncologica",
      "Hematología",
      "Homeopatía",
      "Ingeniero farmacéutico",
      "Ingeniería biomédica",
      "Ingeniero bioquímico",
      "Investigación Biomédica",
      "Nutrición",
      "Medicina Alternativa",
      "Medicina del Deporte",
      "Medicina General",
      "Medicina en Rehabilitación",
      "Medicina del Trabajo",
      "Medicina Estética",
      "Medicina Familiar",
      "Medicina Interna",
      "Medicina Legal",
      "Medicina Molecular",
      "Medicina en Urgencia",
      "Médico Cirujano",
      "Médico oftalmólogo",
      "Médico geriatra",
      "Médico pediatra",
      "Médico optometrista",
      "Naturopatía",
      "Neonatología",
      "Neurocirugía",
      "Médico otorrinolaringólogo",
      "Oncologia",
      "Oncologia Quirurgica",
      "Ortodoncia y ortopedia",
      "Ortopedia y traumatología",
      "Periodoncia",
      "Podología",
      "Psicología",
      "Psiquiatría",
      "Químico bacteriólogo",
      "Químico farmacobiólogo",
      "Quiropráctico",
      "Radiología e imagen",
      "Salud Comunitaria",
      "Sexología Educativa",
      "Técnica en enfermería",
      "Técnico químico",
      "Terapéutica Homeopática",
      "Terapia física y rehabilitación",
      "Traumatología y ortopedia",
      "Terapias alternativas",
      "Torax Y Cardiovascular",
      "Trasplante Renal",
      "Ultrasonido y diagnóstico",
      "Urgencias quirúrgicas",
      "Urología",
      "Veterinario Zootecnista",
      "Otros",
    ],
    cache: true,
  },
  resultsList: {
    maxResults: 15,
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: {
      render: true,
    },
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

// btnRegsitrar.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch("http://localhost:4000/", {
//     method: "POST",
//     body: JSON.stringify({
//       nombre: "luis daniel",
//       correo: "example@mail.com",
//       titulo: "medico",
//     }),
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch(() => {
//       console.log("error");
//     });
// });
