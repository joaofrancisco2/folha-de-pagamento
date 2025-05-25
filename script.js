function calcularFolha() {
  const nome = document.getElementById("nome").value;
  const salarioBase = parseFloat(document.getElementById("salario").value);
  const vendas = parseFloat(document.getElementById("vendas").value);
  const percentual = parseFloat(document.getElementById("comissao").value);

  if (!nome || isNaN(salarioBase) || isNaN(vendas) || isNaN(percentual)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const comissao = vendas * (percentual / 100);
  const salarioBruto = salarioBase + comissao;
  const descontoINSS = salarioBruto * 0.08;
  const salarioLiquido = salarioBruto - descontoINSS;

  const resultado = `
    <p>Funcionário: ${nome}</p>
    <p>Comissão: R$ ${comissao.toFixed(2)}</p>
    <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
    <p>Desconto INSS (8%): R$ ${descontoINSS.toFixed(2)}</p>
    <p><strong>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</strong></p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}
