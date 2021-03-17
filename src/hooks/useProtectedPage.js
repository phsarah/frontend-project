import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export function useProtectedPage() {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {               // se não existir token, volta para a tela principal
            history.push('/')
        }                                // token ? history.push('/') : getTripDetail()  <--- ternário
        
    }, [history])                   // toda varivel declarada fora, vai no array de dependencias (boas práticas do hook)
}