$(document).ready(function () {

    //Quando o campo cnpj perde o foco.
    $("#cnpjTomador").blur(function () {

        //Nova variável "cnpj" somente com dígitos.
        var cnpjTomador = $(this).val().replace(/\D/g, '');

        //Verifica se campo cnpj possui valor informado.
        if (cnpjTomador != "") {


            //Consulta o webservice publica.cnpj.ws/ //"https://publica.cnpj.ws/cnpj/
            $.getJSON("https://publica.cnpj.ws/cnpj/" + cnpjTomador, function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#logradouro").val(dados.estabelecimento.logradouro);
                    $("#numero").val(dados.estabelecimento.numero);
                    $("#razaoSocial").val(dados.razao_social);
                    $("#complemento").val(dados.estabelecimento.complemento);
                    $("#bairro").val(dados.estabelecimento.bairro);
                    $("#cep").val(dados.estabelecimento.cep);
                    $("#uf").val(dados.estabelecimento.estado.sigla);
                    $("#cnae").val(dados.estabelecimento.atividade_principal.id);
                    $("#cnaeDesc").val(dados.estabelecimento.atividade_principal.descricao);
                    $("#telDDD").val(dados.estabelecimento.ddd1);
                    $("#telContato").val(dados.estabelecimento.telefone1);
                    $("#inscEstadual").val(dados.estabelecimento.inscricoes_estaduais[0].inscricao_estadual);
                } //end if.
                else {
                    //CNPJ pesquisado não foi encontrado.
                    alert("CNPJ não encontrado.");
                }
            });
        } //end if.
        else {
            //CNPJ sem valor, limpa formulário.
            console.error(error);
        }
    });
});


