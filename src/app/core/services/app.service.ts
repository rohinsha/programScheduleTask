import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private config: any = {};
  private userInfo: any = {};
  private statesList: any[] = [];

  setUserInfo(info) {
    this.userInfo = info;
  }

  getUserInfo() {
    return this.userInfo;
  }

  setConfig(config) {
    this.config = config[config.env];
  }

  getConfigParam(param) {

    return this.config[param];
}

  setStatesList(list) {
    this.statesList = list;
  }

  getStatesList() {
    return this.statesList;
  }

  logout() {
    this.setUserInfo({});
  }
}
