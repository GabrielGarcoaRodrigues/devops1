# Usando imagem base
FROM node:18

# Criando diretório de trabalho
WORKDIR /app

# Copiando arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Porta exposta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
