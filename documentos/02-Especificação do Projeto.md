# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Prestador de serviço </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Prestador de serviço que deseja oferecer seus serviços a residências que necessitem.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Encontrar clientes;
2. Possibilidade de contato com o contratante para ajustar detalhes do serviço;
3. Definir um raio de ação em que estará disponível para atender clientes;
4. Informar qual ou quais os serviços prestados.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 2: Contratante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
 Residente que necessita de reparos ou da realização de tarefas domésticas
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Encontrar profissional qualificado;
2. Encontrar profissional no momento necessário;
3. Possibilidade de selecionar o profissional através de critérios avaliativos.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Prestador de serviço | encontrar clientes com maior facilidade | atender maior quantidade de clientes. |        
| Prestador de serviço | definir um raio de ação | atender clientes em uma região geográfica definida. |
| Prestador de serviço | contactar possível cliente | definir detalhes, viabilidade e valor de serviço. |
| Contratante | encontrar profissionais | realizar serviços e tarefas domésticas. |
| Contratante | encontrar profissionais qualificados | relizar serviços que necessitem de qualificação técnica. |
| Contratante | visualizar a avaliação de outros contratantes | garantir um serviço bem feito.| 
| Contratante | avaliar o serviço prestado | outros contratantes possam realizar melhor as escolhas na plataforma. |


## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |	A aplicação deve permitir ao usuário cadastrar uma conta. |	Alta |
| RF-02 |	A aplicação deve permitir ao usuário fazer login na sua conta.	| Alta |  
| RF-03	| A aplicação deve oferecer uma funcionalidade de pesquisa para permitir ao usuário Contratante localizar a categoria de serviço ou prestador de serviço que deseja. |	Alta |
| RF-04 | Aplicação deve permitir ao usuário Prestador de Serviço fazer o cadastro dos serviços oferecidos. |	Alta |
| RF-05	| A aplicação deve permitir ao usuário Prestador de Serviço disponibilizar informações dos serviços oferecidos como custos e contato. |	Alta | 
| RF-06	| A aplicação deve permitir ao usuário Contratante disponibilizar as informações de preferências de horário de atendimento.	| Alta |
| RF-07	| A aplicação deve permitir ao usuário Contratante realizar avaliação ao usuário Prestador de Serviço mediante o serviço recebido e vice-versa. |	Alta |
| RF-08	| A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário Contratante localizar faixas de preços de preferência dos serviços oferecidos. |	Média |

**Prioridade: Alta / Média / Baixa. 


### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deve permitir meios de compartilhamento web. | Alta |
| RNF-02 | A aplicação deve ser de fácil manutenção, com código bem organizado e documentado, facilitando futuras atualizações e correções de bugs. |	Média |
| RNF-03 |	A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Edge e Safari. |	Alta |
| RNF-04 | A aplicação deve ter bom nível de contraste entre os elementos da tela. | Média |
| RNF-05 | A aplicação web deve possuir um bom desempenho de tempo. Estimativa: Processamento de telas em até 15 segundos. | Média |
| RNF-06 | A aplicação deve ser escalável, capaz de lidar com um aumento significativo com os números de usuários e no volume de dados sem comprometer o desempenho. |	Alta |
| RNF-07 | A aplicação deve ser responsiva, adaptando-se automaticamente a diferentes tamanhos de tela e resolução, proporcionando uma boa experiência de usuários em dispositivos móveis. | Baixa |

**Prioridade: Alta / Média / Baixa. 

