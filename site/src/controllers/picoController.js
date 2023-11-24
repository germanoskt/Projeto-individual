var picoModel = require("../models/picoModel")

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontoServer;
    var id = req.body.idServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        picoModel.cadastrar(pontos, id)
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
function pegaPico(req, res){
    var id = req.body.idServer;

    picoModel.pegaPico(id)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    

                        // aquarioModel.buscarAquariosPorEmpresa(resultado[0].empresaId)
                        // .then((resultadoAquarios) => {
                        console.log("é igual");
                        res.json({
                            pontos : resultado[0].pontos
                            // aquarios: resultadoAquarios
                        });

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
    pegaPico
}