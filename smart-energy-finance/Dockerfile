ARG BUILD_FROM=ghcr.io/hassio-addons/base:15.0.7
FROM ${BUILD_FROM}

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache \
    bash \
    jq \
    tzdata \
    nodejs-lts \
    npm \
  || apk add --no-cache \
    bash \
    jq \
    tzdata \
    "nodejs~22" \
    "npm~10"

RUN npm install -g node-red@4.1.4 \
  && npm cache clean --force

WORKDIR /opt
RUN npm i --omit=dev --no-audit --no-fund \
    node-red-contrib-home-assistant-websocket \
  && npm cache clean --force

WORKDIR /addon
COPY package.json /addon/package.json
RUN npm install --omit=dev --no-audit --no-fund \
    ws \
  && npm cache clean --force

COPY . /addon

RUN mkdir -p /etc/node-red \
  && cp /addon/dashboard_sync_smart_energy_finance.js /etc/node-red/dashboard_sync.js \
  && chmod a+x /etc/node-red/dashboard_sync.js

RUN chmod a+x /addon/run.sh

ENTRYPOINT ["/addon/run.sh"]
