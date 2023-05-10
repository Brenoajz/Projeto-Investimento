function primeirapag() {
  const main = document.querySelector('#main');
  main.classList.add('hide');
  setTimeout(() => {
    main.innerHTML = `
    <nav><button onclick="segundapag()">Como investir no Brasil</button></nav>
      <h1>Vale a pena investir no Brasil?</h1>
      <p>O mercado de ações no Brasil pode ser uma opção interessante para investidores que buscam aplicar seu dinheiro a longo prazo e obter retornos significativos. A Bolsa de Valores de São Paulo (B3) é a principal bolsa de valores do país e concentra a maior parte das negociações.</p>
      
      <h2>Você ajuda seu país!</h2>
      <img src="img/ajuda.jpg" alt="Brasil Crescendo economicamente">
      <p>Investir em empresas brasileiras pode contribuir para o desenvolvimento do país, já que ao fornecer capital para essas empresas crescerem e se desenvolverem, há um potencial para a geração de empregos e o aumento da produção de bens e serviços.</p>
      <br>
      <h2>Além dos retornos, há vantagens fiscais!</h2>
      <img src="img/incentivo.webp" alt="imagem de incentivo fiscal">
      <p>Os incentivos fiscais oferecidos pelo governo brasileiro para investidores em ações visam estimular o investimento em empresas brasileiras e contribuir para o desenvolvimento da economia do país. Um dos principais incentivos fiscais para investidores em ações é a isenção de Imposto de Renda sobre o ganho de capital na venda de ações. No entanto, é importante estar ciente das regras e limitações para essa isenção, como um limite de vendas de até R$ 35 mil por mês.</p>
      <footer><a href="#logo"><button>Volte para o inicio!</button></a></footer>
      `;
    main.classList.remove('hide');
  }, 200);
}

function segundapag() {
  const main = document.querySelector('#main');
  main.classList.add('hide');
  setTimeout(() => {
    main.innerHTML = `
    <nav><button onclick="primeirapag()">Vale a pena?</button></nav>
      <h1>Como investir em ações no Brasil?</h1>
  
      <h2>Abra uma conta em uma corretora</h2>
      <p>Para investir em ações no Brasil, é necessário abrir uma conta em uma corretora de valores. As corretoras são intermediários entre o investidor e o mercado de ações, permitindo a compra e venda de ações.</p>
      <p>Antes de escolher uma corretora, é importante pesquisar e comparar as opções disponíveis. Considere fatores como as taxas de corretagem, custódia e outras tarifas, bem como a reputação e a segurança da corretora.</p>
      <p>Ao escolher uma corretora, verifique se ela é regulamentada pela Comissão de Valores Mobiliários (CVM), a agência reguladora do mercado de capitais no Brasil.</p>
      
      <h2>Faça sua primeira compra</h2>
      <img src="img/buy.jpg" alt="acões subindo e descendo">
      <p>Após escolher sua corretora e pesquisar as empresas, faça sua primeira compra de ações no Brasil. Antes de comprar ações, é importante avaliar o preço e o valor das ações.</p>
      <p>Ao comprar ações, escolha a quantidade que deseja comprar e o preço que está disposto a pagar. Lembre-se de que o preço das ações flutua diariamente, portanto, pode ser necessário esperar até que o preço atinja um nível desejável.</p>
      <p>Também é importante definir um stop loss, um limite de perda, para minimizar as perdas em caso de queda acentuada do preço da ação.</p>
      
      <h2>Monitore seus investimentos</h2>
      <img src="img/muni.jpg" alt="Analizando investimentos">
      <p>Monitore regularmente seus investimentos em ações e faça ajustes conforme necessário para manter seu portfólio saudável. Acompanhe o desempenho das ações e faça ajustes em sua carteira de investimentos de acordo com suas necessidades e objetivos.</p>
      <p>Além disso, é importante manter-se atualizado sobre as notícias do mercado e as mudanças nas perspectivas das empresas. Considere buscar orientação de um profissional de investimentos ou um consultor financeiro se você estiver inseguro sobre suas escolhas de investimento.</p>
      <p>Lembre-se de que investir em ações envolve riscos e a perda de dinheiro é possível. Por isso, é importante fazer sua própria pesquisa e estar ciente dos riscos antes de investir em ações no Brasil.</p>
      
      <h2>Como reduzir os riscos ao investir na bolsa de valores?</h2>
      <img src="img/seguro.png" alt="Imagem ilustrando de modo comico um investimento seguro">
      <p>Uma forma de reduzir o risco ao investir em ações é diversificar sua carteira de investimentos. Ao investir em ações de diferentes empresas e setores, você não depende exclusivamente de uma única empresa ou setor para obter lucro, o que ajuda a minimizar o risco de uma possível queda em um único investimento afetar sua carteira como um todo.</p>
      <footer><a href="#logo"><button>Volte para o inicio!</button></a></footer>
      `;
    main.classList.remove('hide');
  }, 200);
}
