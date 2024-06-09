# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="[documentos/02-Especificação do Projeto.md](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/1e5cfed5451a502245729c91651895bbf5721d1f/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md)"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/1e5cfed5451a502245729c91651895bbf5721d1f/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Verificar funcionamento de links e filtros por pesquisa na Homepage |
|:---|:---|
| Requisitos Associados | RF-01 A aplicação deve permitir ao usuário cadastrar uma conta. RF-02 A aplicação deve permitir ao usuário fazer login na sua conta. RF-03	A aplicação deve oferecer uma funcionalidade de pesquisa para permitir ao usuário Contratante localizar a categoria de serviço ou prestador de serviço que deseja.|
| Objetivo do Teste | Verificar se os botões da Homepage estão direcionando para as respectivas páginas corretamente, e se a barra de pesquisa está filtrando pelos serviços digitados.  |
| Passos |1 - Acessar o navegador. 2 - Informar o endereço do site. 3 - Visualizar a página Home. 4 - Buscar por algum serviço na barra de busca. 5 - Clicar nos links da página Home.
| Critérios de êxito | Todos os links da Homepage devem encaminhar os usuários para as páginas descritas e ao digitar o serviço na barra de busca a página deve ocultar as demais opções.  |
| Responsável pela elaboraração do caso de Teste | Aline |

<hr>

|Caso de Teste    | CT-02 - Verificar o login de usuários |
|:---|:---| 
| Requisitos associados | RF-02 A aplicação deve permitir ao usuário fazer login na sua conta.|
| Objetivo do Teste | Verificar se o login está sendo feito corretamente. |
| Passos |1 - Acessar o navegador.  2 - Informar o endereço do site. 3 - Visualizar a HomePage. 4 - Clicar em "Login", no canto superior direito. 5 - Preencher os dados necessários e clicar em enviar. |
| Critérios de êxito | Após o login, o usuário deverá ser redirecionado para a tela de usuário logado. |
|Responsável pela elaboração do caso de Teste | Gustavo |

<hr>

|Caso de Teste    | CT-04- verificar funcionamento do cadastro do usuário |
|:---|:---|
| Requisitos Associados | RF-01 O site deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste | Verifique se o cadastro está sendo feito corretamente. |
| Passos | 1- Acesse o navegador. 2- informar o endereço do site. 3- visualize a pagina home. 4- Clique em cadastre-se, no Menu. 5- preencha o formulario e clique em usuario se for apenas fazer o cadastro. 6- Se for cadastrar como prestador de serviço preencher a pagina e ir para proxima pagina. |
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário e ao clicar em cadastrar deverá aparecer a mensagem usuario cadastrado com sucesso.  |
| Responsável pela elaboraração do caso de Teste | Fabiano|

<hr>

|Caso de Teste    | CT-05 - Verificar funcionamento do chat e realizar avaliação de um fornecedor |
|:---|:---|
| Requisitos Associados | RF-05  A aplicação deve permitir ao usuário Prestador de Serviço disponibilizar informações dos serviços oferecidos como custos e contato. RF-06	A aplicação deve permitir ao usuário Contratante disponibilizar as informações de preferências de horário de atendimento. RF-07 A aplicação deve permitir ao usuário Contratante realizar avaliação ao usuário Prestador de Serviço mediante o serviço recebido e vice-versa.|
| Objetivo do Teste | Verificar se o chat é aplicável e funcional para permitir a disponibilização de horários, custos e outras informações em relação ao serviço prestado, e também verificar se é possível realizar avaliações.  |
| Passos |1 - Acessar o navegador. 2 - Informar o endereço do site. 3 - Visualizar a página chatPage. 4 - Digitar uma das opções no chatbox como por exemplo '1'. 5 - Clicar em 'Enviar' para obter mais informações. 6 - Na barra de avaliações avaliar um prestador de serviço ou um cliente. 7 - Clicar em 'Enviar'.
| Critérios de êxito | Deve ser possível realizar o envio das mensagens no chatbox e receber um retorno de orientação.  |
| Responsável pela elaboraração do caso de Teste | Sara |

 <hr> 

|Caso de Teste    | CT-06 - Verificar funcionamento da a página prestadores e suas funcionalidades |
|:---|:---|
| Requisitos Associados | RF-03 A aplicação deve oferecer uma funcionalidade de pesquisa para permitir ao usuário Contratante localizar a categoria de serviço ou prestador de serviço que deseja. RF-06 A aplicação deve permitir ao usuário Contratante disponibilizar as informações de preferências de horário de atendimento. RF-08 A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário Contratante localizar faixas de preços de preferência dos serviços oferecidos.|
| Objetivo do Teste | Verificar se o campo de busca é funcional e exibe os prestadores desejados  |
| Passos |1 - Acessar o navegador. 2 - Informar o endereço do site. 3 - Visualizar a página prestradores. 4 - Realizar uma busca por nome de prestador ou serviço prestado. 5 - Clicar nas fotos do banner e analisar o funcionamento.
| Critérios de êxito | Deve ser possível encontrar prestadores cadastrados no localStorage através de informações fornecidas pelo prestador. |
| Responsável pela elaboraração do caso de Teste | Milton |

 <hr> 

