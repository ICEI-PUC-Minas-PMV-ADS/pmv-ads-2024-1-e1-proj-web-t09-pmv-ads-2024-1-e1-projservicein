# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Verificar funcionamento de links e filtros por pesquisa na Homepage |
|:---|:---|
| Requisitos Associados | RF-01 A aplicação deve permitir ao usuário cadastrar uma conta. RF-02 A aplicação deve permitir ao usuário fazer login na sua conta. RF-03	A aplicação deve oferecer uma funcionalidade de pesquisa para permitir ao usuário Contratante localizar a categoria de serviço ou prestador de serviço que deseja.|
| Objetivo do Teste | Verificar se os botões da Homepage estão direcionando para as respectivas páginas corretamente, e se a barra de pesquisa está filtrando pelos serviços digitados.  |
| Passos |1 - Acessar o navegador. 2 - Informar o endereço do site. 3 - Visualizar a página Home. 4 - Buscar por algum serviço na barra de busca. 5 - Clicar nos links da página Home.
| Critérios de êxito | Todos os links da Homepage devem encaminhar os usuários para as páginas descritas e ao digitar o serviço na barra de busca a página deve ocultar as demais opções.  |
| Responsável pela elaborar do caso de Teste | Aline |

<hr>

|Caso de Teste    | CT-02 - Verificar o login de usuários |
|:---|:---| 
| Requisitos associados | RF-02 A aplicação deve permitir ao usuário fazer login na sua conta.|
| Objetivo do Teste | Verificar se o login está sendo feito corretamente. |
| Passos |1 - Acessar o navegador.  2 - Informar o endereço do site. 3 - Visualizar a HomePage. 4 - Clicar em "Login", no canto superior direito. 5 - Preencher os dados necessários e clicar em enviar. |
| Critérios de êxito | Após o login, o usuário deverá ser redirecionado para a tela de usuário logado. |
|Responsável pela elaboração do caso de Teste | Gustavo |

<hr>

|Caso de Teste    | CT-4- verificar funcionamento do cadastro do usuário |
|:---|:---|
| Requisitos Associados | RF-01 O site deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste | Verifique se o cadastro está sendo feito corretamente. |
| Passos | 1- Acesse o navegador. 2- informar o endereço do site. 3- visualize a pagina home. 4- Clique em cadastre-se, no Menu. 5- preencha o formulario e clique em usuario se for apenas fazer o cadastro. 6- Se for cadastrar como prestador de serviço preencher a pagina e ir para proxima pagina. |
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário e ao clicar em cadastrar deverá aparecer a mensagem usuario cadastrado com sucesso.  |
| Responsável pela elaborar do caso de Teste | FABIANO|

<hr>

|Caso de Teste    | CT-05 - Verificar funcionamento do chat e realizar avaliação de um fornecedor |
|:---|:---|
| Requisitos Associados | RF-05  A aplicação deve permitir ao usuário Prestador de Serviço disponibilizar informações dos serviços oferecidos como custos e contato. RF-06	A aplicação deve permitir ao usuário Contratante disponibilizar as informações de preferências de horário de atendimento. RF-07 A aplicação deve permitir ao usuário Contratante realizar avaliação ao usuário Prestador de Serviço mediante o serviço recebido e vice-versa.|
| Objetivo do Teste | Verificar se o chat é aplicável e funcional para permitir a disponibilização de horários, custos e outras informações em relação ao serviço prestado, e também verificar se é possível realizar avaliações.  |
| Passos |1 - Acessar o navegador. 2 - Informar o endereço do site. 3 - Visualizar a página chatPage. 4 - Digitar uma das opções no chatbox como por exemplo '1'. 5 - Clicar em 'Enviar' para obter mais informações. 6 - Na barra de avaliações avaliar um prestador de serviço ou um cliente. 7 - Clicar em 'Enviar'.
| Critérios de êxito | Deve ser possível realizar o envio das mensagens no chatbox e receber um retorno de orientação.  |
| Responsável pela elaborar do caso de Teste | Sara |

 <hr> 
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
