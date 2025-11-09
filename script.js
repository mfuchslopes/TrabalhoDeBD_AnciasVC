//verificar A->B
let lhs_candidato = 'A';
let rhs_candidato = 'B';

let sql_verificador = 
`SELECT *
 FROM tabela1
 GROUP BY ${lhs_candidato}
 HAVING count(distinct ${rhs_candidato})>1
`;
console.log(sql_verificador)

lista_atributos = ["A", "B", "C"]

for (const lhs_candidato in lista_atributos) {
    for (const rhs_candidato in lista_atributos) {

        console.log(`Verificando ${lhs_candidato} -> ${rhs_candidato}`)

        if (lhs_candidato === rhs_candidato) {
            continue;
        }

        let sql_verificador = 
        `SELECT *
         FROM tabela1
         GROUP BY ${lhs_candidato}
         HAVING count(distinct ${rhs_candidato})>1`;
    }
}