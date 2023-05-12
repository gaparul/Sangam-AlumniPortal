FROM node:17.9.0-alpine
WORKDIR /frontend
COPY --chown=node:node ./frontend/package*.json ./
RUN npm install --verbose
COPY --chown=node:node ./frontend/ ./
USER node
EXPOSE 3000
CMD ["npm", "run", "start"]