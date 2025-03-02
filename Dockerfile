FROM cypress/cypress/factory

RUN echo 'WELCOME OMOLOLA'

WORKDIR /var/www
COPY package.json /var/www/

RUN npm install

COPY . /var/www


CMD [ "npm", "bash", "./start.sh", "run", "cy:run"]