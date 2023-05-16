import axios from 'axios';

const BASE_URL = 'https://apphospital.com.br/api'; // Substitua pela URL base comum para todas as APIs

// Função genérica para fazer chamadas à API com autenticação
async function callAPI(endpoint, config) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`, config);
    return response.data;
  } catch (error) {
    throw new Error(`Erro na chamada da API: ${error.message}`);
  }
}

export { callAPI };
