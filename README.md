# Backend para Aplicação Mobile "Vamos Calcular"

Este repositório contém o backend da aplicação "Vamos Calcular", um jogo educativo de matemática destinado a crianças. O backend é desenvolvido em **Node.js** e utiliza **Express** para gerenciar rotas e **MySQL** como sistema de gerenciamento de banco de dados.

## Funcionalidades

- **Registro de Usuários:** Permite que novos usuários se registrem, armazenando informações como nome, apelido, idade e senha (criptografada).
- **Autenticação:** Implementação de autenticação de usuários usando **JSON Web Tokens (JWT)** para garantir a segurança das operações.
- **Gerenciamento de Dados:** Funcionalidades para criar, ler, atualizar e deletar dados dos usuários.
- **Conexão com Banco de Dados:** Utiliza um pool de conexões para gerenciar conexões com o banco de dados MySQL, proporcionando melhor desempenho e eficiência.
- **Tratamento de Erros:** Implementação de tratamento de erros para garantir a robustez da aplicação.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no lado do servidor.
- **Express:** Framework para construção de APIs e aplicações web.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional.
- **Nodemon:** Ferramenta de desenvolvimento para reiniciar automaticamente o servidor durante as alterações no código.
- **JWT (JSON Web Tokens):** Mecanismo de autenticação baseado em tokens.

