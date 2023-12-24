import { mockedGetKingdom, mockedGetKingdoms } from './mockedResponse';

import axios from 'axios';

export class Api {
  #config;
  #baseURL;

  constructor() {
    if (Api.instance) {
      return Api.instance;
    }

    Api.instance = this;
    this.#baseURL = 'http://172.16.80.131:8000';

    this.#config = [
      { name: 'getKingdomsByName', url: `${this.#baseURL}/kingdoms` },
      { name: 'getKingdomByID', url: `${this.#baseURL}/kingdom` },
    ];
  }

  async getKingdomsByName(kingdomName) {
    const configItem = this.#config.find((item) => item.name === 'getKingdomsByName');
    if (!configItem) {
      throw new Error('Не найдена конфигурация для getKingdoms');
    }

    return axios.get(configItem.url, {
      params: {
        'kingdom_name': kingdomName,
      }
    })
      .then((res) => {
        const response = res.data;
        if (response.status === 'ok') {
          return response.body;
        } else {
          mockedGetKingdoms();
        }
      })
      .catch(() => mockedGetKingdoms());
  }

  async getKingdomByID(id) {
    const configItem = this.#config.find((item) => item.name === 'getKingdomByID');
    if (!configItem) {
      throw new Error('Не найдена конфигурация для getKingdomByID');
    }

    return axios.get(configItem.url, {
      params: {
        'id': id,
      }
    })
      .then((res) => {
        const response = res.data;
        if (response.status === 'ok') {
          return response.body;
        } else {
          mockedGetKingdom();
        }
      })
      .catch(() => mockedGetKingdoms());
  }
}
