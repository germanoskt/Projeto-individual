var rankingModel = require("../models/rankingModel")

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontoServer;
    var nome = req.body.nomeServer;
    var marca = req.body.marcaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        rankingModel.cadastrar(pontos, nome, marca)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function ranking(req, res){

    rankingModel.ranking()
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                        // aquarioModel.buscarAquariosPorEmpresa(resultado[0].empresaId)
                        // .then((resultadoAquarios) => {
                        console.log("é igual");
                        res.json(
                            resultado
                        );

                        // } else {
                        //     res.status(204).json({ aquarios: [] });
                        // }
                        // })
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
module.exports = {
    cadastrar,
    ranking
}