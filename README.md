# Aplicação SPA

A aplicação pode ser acessado pelo seguinte [link](http://valdirluiz.github.io/app-spa/#/)

#Configurando o ambiente

Baixe o projeto com comando:
```
git clone https://github.com/valdirluiz/app-spa
``` 

Entro no diretório e baixe as dependencias e instale o app com o comando
```
npm install && bower install
``` 

Inicie o servidor
```
grunt serve
``` 

## O que é SPA

Single Page Application, como próprio nome já diz é uma aplicação que só possui uma pagina, onde as demais views são inseridas na pagina principal, deixando dessa forma a aplicação mais rápida por executar menos requests, e mais organizada. Para desenvolver SPA existem diversos frameworks disponíveis no mercado. Esta aplicação foi desenvolvido usando Angular JS. 

## O que é Angular JS

Angular Js é framework para desenvolvimento de single page aplication desenvolvido e mantido pela Google. Angular permite organizar de uma forma bastante estruturada um projeto de frontend, fornece funções e padrões que facilitam o desenvolvimento. 

## Trabalho realizado

O trabalho está resumido em três views:
 - Home, contendo o botão de login.
 - Implementação, contendo o algoritmo solicitado.
 - Meu perfil, contendo informações do usuário vindos do google, e também sua foto de perfil.

Em todas as views existe um relógio, usando ng-include para incluir, o relógio é gerenciado por factory com uma instancia singleton no sistema. Dessa forma é possível navegar entre as telas e apresentar o mesmo tempo decorrido, existe também um controlador para essa função.

O algoritmo de combinação esta implementado dentro de um factoy chamado `CombinacoesFactory` existem duas funções principais, uma retorna as combinações e outra monta as combinações, a função chamada pelo controller é `cobinaElementos`. A função implementada não é recursiva.

Para realizar o login foi criado um controlador chamado `LoginCtrl` que faz a comunição com o google usando gapi e oauth. 

## Escolhas importantes realizada no percurso

As escolhas mais importantes escolhidas no desenvolvimento são as seguintes:

 - Utilização de yeoman para geração do projeto e arquivos, deixando dessa forma uma melhor organização do projeto.
 - Utilização do grunt para gerenciar deploy.
 - Utilização de bower para gerenciar dependencias.

## Facilidades e dificuldades encotradas

As principais facilidades encontradas no desenvolvimento, foi a preparaçao do ambiente, o gerenciamento de dependencias, e o build, devido a correta escolha das ferramentas mencionadas anteriormente. 

As principais dificuldades encontradas foram o desenvolvimento do algoritmo de de análise combinatória, e a configuração com a api do google. 

## Bonus que foi desenvolvido
Foi criado um top bar, onde foi alterado o css padrão do boostrap.
Foi criado uma página Meu perfil onde mostra a foto do usuário.
O botão processar da tela de implementação só é habilitado quando os campos forem preenchidos.


