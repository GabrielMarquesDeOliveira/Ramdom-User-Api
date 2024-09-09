async function fetchUserData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data.results[0];
    const userData = {
      nome: `${user.name.first} ${user.name.last}`,
      email: user.email,
      dataNascimento: user.dob.date,
      idade: user.dob.age,
    };

    console.log(userData);
    displayUserData(userData);

    sendToDatabase(userData);
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
  }
}

function displayUserData(userData) {
  const container = document.getElementById("user-container");
  container.innerHTML = `
      <p><strong>Nome:</strong> ${userData.nome}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Data de Nascimento:</strong> ${new Date(
        userData.dataNascimento
      ).toLocaleDateString()}</p>
      <p><strong>Idade:</strong> ${userData.idade} anos</p>
    `;
}

function sendToDatabase(userData) {
  fetch("http://localhost:3000/addUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => console.log("Sucesso:", data))
    .catch((error) => console.error("Erro:", error));
}

fetchUserData();
