import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { callAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';


export default function Login(  ) {

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(''); // Estado para controlar a mensagem de alerta
  const navigate = useNavigate(); // Hook useNavigate para redirecionamento
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setAlertMessage(''); // Limpa a mensagem de alerta ao fazer o novo envio
   

    try {
      await loginṔag(email, password);
      // Redirecionar ou executar ações necessárias após a autenticação
    } catch (error) {
      setAlertMessage('Erro');
    }
    finally {
      // Finalizar o carregamento
      setLoading(false);
    }
  };
  


  // Exemplo de uso para autenticação em uma API específica
  async function loginṔag(email, password) {
    
    try {
    const endpoint = 'auth/login'; // Substitua pelo endpoint específico da API
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: {
        email,
        password,
      },
    };
  
   
      const response = await callAPI(endpoint, config);
      login(response.token)
      navigate('/home');
      // Trate a resposta da API conforme necessário
    } catch (error) {
  
      setAlertMessage('Erro de autenticação: Usuario ou senha errado ')
    }
  }




  return (
    <div className="container justify-content-center align-items-center  d-flex vh-100">
      <div className="row justify-content-center col-md-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-12">Login</h2>
              {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Carregando...' : 'Login'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




