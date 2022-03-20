const BASE_API = 'https://klrentacar.com.br/sistema/api/';

export default{
    checktoken: async () =>{

    },
    logar: async (login, senha)=>{
        const req = await fetch(`${BASE_API}/checklist/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json',
            },
            body: JSON.stringify({login,senha})
        });
        const json = await req.json();
        return json;
    },
    buscarLocacao: async (placa_car) =>{
        const req = await fetch(`${BASE_API}/checklist/pesquisar_locacao`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json',
            },
            body: JSON.stringify({placa_car}, method='GET')
        });
        const json = await req.json();
        return json;
    },
    locacaoDia: async () =>{
        const req = await fetch(`${BASE_API}/checklist/locacao_dia`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json',
            },
            body: JSON.stringify({placa_car})
        });
        const json = await req.json();
        return json;
    },
    salvarAtendimento: async() =>{
        const req = await fetch(`${BASE_API}salvar_atendimento`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json',
            },
            body: JSON.stringify({procedencia,senha})

        })
    }

    
}