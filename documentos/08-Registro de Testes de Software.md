# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. 

|Caso de Teste    | CT-01 - Verificar funcionamento dos links e filtros por pesquisa na Homepage |
|:---|:---|
| Resultados obtidos | Foi possível acessar a página normalmente. Foi feito o teste e não é ṕossível salvar o cadastro com campos obrigatórios não preenchidos. Foi verificado que não foram aplicadas máscaras e nem filtros específicos nos campos. Com as informações preenchidas o cadastro é realizado normalmente.|
| Responsável pela execução do caso de Teste | Sara |

<a href="https://www.youtube.com/watch?v=Yqltf2q88QM">Video teste.</a>

<hr>

|Caso de Teste    | 	CT-02 - Verificar o login de usuários |
|:---|:---|
| Resultados obtidos |Foi realizado com sucesso o teste colocando o login e senha .|
| Responsável pela execução do caso de Teste | Fabiano |

A página inicial sendo visualizada normalmente. 
![Teste_prestadores_inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Captura%20de%20tela%202024-06-09%20132907.png)

Apos login e senha a pagina sendo direcionada para tela de pesquisa.
![Teste_prestadores_segunda](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Captura%20de%20tela%202024-06-09%20142722.png)

Se o usuario não for cadastrado a pagina direciona ele para a tela de cadastro.
![Teste_prestadores_terceira](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Captura%20de%20tela%202024-06-09%20143017.png)

<hr>

|Caso de Teste    | CT-04 - Verificar funcionamento do cadastro do usuário |
|:---|:---|
| Resultados obtidos | Foi possível acessar a página normalmente. Foi feito o teste e não é ṕossível salvar o cadastro com campos obrigatórios não preenchidos. Foi verificado que não foram aplicadas máscaras e nem filtros específicos nos campos. Com as informações preenchidas o cadastro é realizado normalmente.|
| Responsável pela execução do caso de Teste | Milton |

Alerta informando que existem campos não preenchidos e que impede o cadastro:
![evidenciaCT04-1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/assets/165446124/e4b8f355-9b0d-4b2a-8698-6f3d588c5386)

Campos preenchidos sem máscara e sem formatação são aceitos:
![evidenciaCT04-2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/assets/165446124/f2e95ac2-790e-4bdb-8eff-3db8b302b73e)

Cadastro de usuário realizado normalmente no localStorage:
![evidenciaCT04-3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/assets/165446124/afa2dbdd-e908-412d-b603-a1a9b903fedf)

Cadastro de usuário prestador de serviço, ofercendo um serviço na plataforma:
![evidenciaCT04-6](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/assets/165446124/35c72212-19c9-45c8-8964-7113dbf1326b)

Cadastro salvo no localStorage com as informações do serviço prestado:
![evidenciaCT04-7](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/assets/165446124/7e08ba6b-9454-4b47-9fb4-e1b2e83544dc)

<hr>

|Caso de Teste    | CT-05 - Verificar funcionamento do chat e realizar avaliação de um fornecedor |
|:---|:---|
| Resultados obtidos | Foi possível acessar a página e avaliar o prestador normalmente, as informações de avaliação foram enviadas para o localStorage. Tembém foi possível obter retorno em relação a serviços, custos e horários através do chat.|
| Responsável pela execução do caso de Teste | Aline |

Após o envio do número correspondente a informação necessária a resposta é exibida no chat:
![chatpagechat01](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/90ba9f5546474debdfb3fb0c1bcd4558712759e1/documentos/img/chatpagechat01.png)

Avaliações de nota e comentários enviados para o localStorage:
![chatpage-localstorage](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/dad983ed045930ea4920d4e7bf736b6734b7bc8d/documentos/img/chatpage-localstorage.png)

<hr>

|Caso de Teste    | CT-06 - Verificar funcionamento da página prestadores e suas funcionalidades |
|:---|:---|
| Resultados obtidos | Foi possível acessar a página normalmente. Foi possível ter acesso a pagina inicial, fazer a consulta por um serviço que deseja e ter também acesso aos valores/faixas de preço oferecido pelos prestadores de serviço.|
| Responsável pela execução do caso de Teste | Gustavo |

A página inicial sendo visualizada normalmente. 
![Teste_prestadores_inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Teste_prestadores_inicial.png)

Feita a consulta na barra de pesquisa.
![Teste_prestadores_segunda](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Teste_prestadores_segunda.png)

Informações de valores/faixas de preço sendo visualizadas.
![Teste_prestadores_terceira](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projservicein/blob/main/documentos/img/Tela_prestadores_terceira.png) 


