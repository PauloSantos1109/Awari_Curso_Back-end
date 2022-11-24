const state = {
     "UF": [
          { "nome": "Acre", "sigla": "AC", "região": "Norte" },
          { "nome": "Alagoas", "sigla": "AL", "região": "Nordeste" },
          { "nome": "Amapá", "sigla": "AP", "região": "Norte" },
          { "nome": "Amazonas", "sigla": "AM", "região": "Norte" },
          { "nome": "Bahia", "sigla": "BA", "região": "Nordeste" },
          { "nome": "Ceará", "sigla": "CE", "região": "Nordeste" },
          { "nome": "Distrito Federal", "sigla": "DF", "região": "Centro-Oeste" },
          { "nome": "Espírito Santo", "sigla": "ES", "região": "Sudeste" },
          { "nome": "Goiás", "sigla": "GO", "região": "Centro-Oeste" },
          { "nome": "Maranhão", "sigla": "MA", "região": "Nordeste" },
          { "nome": "Mato Grosso", "sigla": "MT", "região": "Centro-Oeste" },
          { "nome": "Mato Grosso do Sul", "sigla": "MS", "região": "Centro-Oeste" },
          { "nome": "Minas Gerais", "sigla": "MG", "região": "Sudeste" },
          { "nome": "Pará", "sigla": "PA", "região": "Norte" },
          { "nome": "Paraíba", "sigla": "PB", "região": "Nordeste" },
          { "nome": "Paraná", "sigla": "PR", "região": "Sul" },
          { "nome": "Pernambuco", "sigla": "PE", "região": "Nordeste" },
          { "nome": "Piauí", "sigla": "PI", "região": "Nordeste" },
          { "nome": "Rio de Janeiro", "sigla": "RJ", "região": "Sudeste" },
          { "nome": "Rio Grande do Norte", "sigla": "RN", "região": "Nordeste" },
          { "nome": "Rio Grande do Sul", "sigla": "RS", "região": "Sul" },
          { "nome": "Rondônia", "sigla": "RO", "região": "Norte" },
          { "nome": "Roraima", "sigla": "RR", "região": "Norte" },
          { "nome": "Santa Catarina", "sigla": "SC", "região": "Sul" },
          { "nome": "São Paulo", "sigla": "SP", "região": "Sudeste" },
          { "nome": "Sergipe", "sigla": "SE", "região": "Nordeste" },
          { "nome": "Tocantins", "sigla": "TO", "região": "Norte" }

     ]
}
const fretes = {
     SIGLAS: [
          { "estado": "SP", "value": 5.00 },
          { "estado": "RJ", "value": 6.50 },
          { "estado": "MG", "value": 7.20 },
          { "estado": "PR", "value": 8.00 },
          { "estado": "AM", "value": 23.50 },
          { "estado": "AC", "value": 23.50 },
          { "estado": "RO", "value": 22.00 },
          { "estado": "RR", "value": 22.00 }
     ],
     REGIAO: [
          { "região": "Sul", "value": 10.00 },
          { "região": "Sudeste", "value": 8.00 },
          { "região": "Centro-Oeste", "value": 11.50 },
          { "região": "Nordeste", "value": 15.00 },
          { "região": "Norte", "value": 20.00 }
     ]
}
let cidade = "Santo André";
let est = "Bahia";

  
function calcularFrete(cidade, est) {
     let filterState = state.UF.filter(state => state.nome === est);

     let [{ nome, sigla, região }] = filterState;

     try{
          let filterFrete = fretes.SIGLAS.filter(fretes => fretes.estado === sigla);
          let [{ estado2, value }] = filterFrete
          console.log(`Local da entrega: ${cidade} \nEstado: ${est}\n\nValor do frete: ${value}`)
     }catch{
          let filterFrete = fretes.REGIAO.filter(fretes => fretes.região === região);
          let [{ reg, value }] = filterFrete
          console.log(`Local da entrega: ${cidade} \nRegião: ${região}\n\nValor do frete: ${value}`) 
     }

}

calcularFrete(cidade, est);

