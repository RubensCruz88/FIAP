const form = document.querySelector("form");
const nameFields = document.querySelectorAll('input[type="text"]');
const historyField = document.getElementById("history");

const API_URL = "https://fsdt-contact.onrender.com/contact";

form.addEventListener("submit", async (event) => {
  event.preventDefault(); 

  const names = Array.from(nameFields)
    .map((field) => field.value.trim())
    .filter((name) => name !== ""); 
  
  const message = historyField.value.trim();

  const formData = {
    names,
    message,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Dados enviados com sucesso!");

      nameFields.forEach((field) => (field.value = ""));
      historyField.value = "";
    } else {
      alert("Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Ocorreu um erro inesperado. Verifique sua conexão e tente novamente.");
  }
});