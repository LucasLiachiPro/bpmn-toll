FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y curl git \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && npm install -g n \
    && n 16.14.0 \
    && npm install -g npm \
    && npm install -g webpack webpack-cli \
    && npm install -g gulp-cli \
    && npm install -g yarn \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN git clone https://github.com/bpmn-io/bpmn-js.git
WORKDIR /app/bpmn-js

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
