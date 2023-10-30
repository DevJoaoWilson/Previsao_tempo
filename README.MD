<h1 align="center">Projeto de Exemplo - Aplicação de Previsão do Tempo</h1>



## 📚 Visão Geral

Neste projeto, criamos uma aplicação que permite aos usuários obter informações atualizadas sobre o clima de uma cidade escolhida. A aplicação usa a API de previsão do tempo para buscar dados precisos e em tempo real. A interface do usuário é desenvolvida em HTML e estilizada com CSS. A lógica da aplicação é controlada pelo JavaScript.

## ⚙️ Funcionalidades

- **Pesquisa de cidade:** Os usuários podem inserir o nome da cidade na caixa de pesquisa e obter informações sobre o clima atual e a previsão para os próximos dias.

- **Exibição de informações:** A aplicação exibe o nome da cidade, a temperatura atual, a descrição do clima e a previsão para os próximos 5 dias.

## 🛠️ Tecnologias Utilizadas

- **HTML:** Utilizado para criar a estrutura da página web.

- **CSS:** Responsável pelo estilo e layout da página, tornando-a atraente e fácil de usar.

- **JavaScript:** Controla a interação do usuário, faz as solicitações à API e exibe os resultados na página.

- **API de Previsão do Tempo:** Utilizamos uma API de terceiros para obter informações meteorológicas atualizadas. No projeto de exemplo, estamos usando a [API OpenWeather](https://openweathermap.org/).

## ▶️ Como Executar o Projeto

Para executar o projeto em sua máquina local, siga as etapas abaixo:

1. Clone este repositório ou baixe os arquivos para o seu computador.

2. Abra o arquivo `index.html` em um navegador da web.

3. Insira o nome da cidade na caixa de pesquisa e clique em "Buscar".

4. Aguarde alguns segundos para que a aplicação obtenha os dados da API e exiba as informações meteorológicas na página.

## ⚙️ Configuração da API

Para usar sua própria API de previsão do tempo, você precisará se inscrever no serviço e obter uma chave de API. Substitua a chave de API na função de solicitação da API no arquivo JavaScript pelo valor de sua chave.

```javascript
const apiKey = 'SUA_CHAVE_DE_API';
