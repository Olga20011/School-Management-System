/* eslint-disable import/no-anonymous-default-export */

import apiCall from "./apiCall";

export default {
  async startNewPeriod(opening_date, closing_date) {
    let data = {
      opening_date: opening_date,
      closing_date: closing_date,
    };
    let response = await apiCall("period/start", data);
    return response;
  },

  async getCurrentPeriod() {
    let data = { client: "web" };
    let response = await apiCall("period/current", data);
    return response;
  },

  async switchPeriod(period_id) {
    let data = { period_id: period_id };
    let response = await apiCall("period/switch", data);
    return response;
  },

  async listPeriods() {
    let response = await apiCall("period/list", []);
    return response;
  },
};
