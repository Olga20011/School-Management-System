/* eslint-disable import/no-anonymous-default-export */

import apiCall from "./apiCall";

export default {
  async filter_signatories(page) {
    let data = { page: page };
    let response = await apiCall("config/signatory/list/all", data);
    return response;
  },

  async get_active_signatories() {
    let data = { page: 1 };
    let response = await apiCall("config/signatory/list/active", data);
    return response;
  },

  async create_signatory(first_name, last_name, designation) {
    let data = {
      first_name: first_name,
      last_name: last_name,
      designation: designation,
    };
    let response = await apiCall("config/signatory/create", data);
    return response;
  },

  async update_signatory(signatory_id, first_name, last_name, designation) {
    let data = {
      first_name: first_name,
      last_name: last_name,
      designation: designation,
      signatory_id: signatory_id,
    };
    let response = await apiCall("config/signatory/update", data);
    return response;
  },

  async update_signatory_status(signatory_id, status) {
    let data = {
      status: status,
      signatory_id: signatory_id,
    };
    let response = await apiCall("config/signatory/update/status", data);
    return response;
  },

  async delete_signatory(signatory_id) {
    let data = { signatory_id: signatory_id };
    let response = await apiCall("config/signatory/delete", data);
    return response;
  },

  async count_signatories() {
    let data = { requester: "admin" };
    let response = await apiCall("config/signatory/list/count", data);
    return response;
  },

  async filter_roles(data) {
    let response = await apiCall("config/role/list/all", data);
    return response;
  },

  async fetchClientProfile() {
    let response = await apiCall("client/info", []);
    return response;
  },

  async updateClientProfile(data) {
    let response = await apiCall("client/update", data);
    return response;
  },

  async configureNewRole(data) {
    let response = await apiCall("user/role/new_role", data);
    return response;
  },

  async updateUserRole(data) {
    let response = await apiCall("user/role/update_role", data);
    return response;
  },

  async fetchUsers() {
    let response = await apiCall("user/user/list_users", []);
    return response;
  },
  async inviteUser(data) {
    let response = await apiCall("user/user/invite_user", data);
    return response;
  },

  async deleteUser(data) {
    let response = await apiCall("user/user/remove_user", data);
    return response;
  },
  
  
};
