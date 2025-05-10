# Usa un'immagine Node.js ufficiale
FROM node:16

# Imposta la cartella di lavoro
WORKDIR /app

# Copia il package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice
COPY . .

# Espone la porta
EXPOSE 3000

# Comando per avviare l'app
CMD ["npm", "start"]
