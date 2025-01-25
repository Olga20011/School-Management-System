/* eslint-disable import/no-anonymous-default-export */

import apiCall from "./apiCall";

export default {
  async loginUser(username, password) {
    let data = {
      username: username,
      password: password,
    };
    let response = await apiCall("central/watchman/login", data);
    return response;
  },

  async fetchMyProfile() {
    let response = await apiCall('platform/webclient/my_profile', []);
    return response;
  },

  async count_users() {
    let data = { requester: "admin" };
    let response = await apiCall("user/count/all", data);
    return response;
  },

  async filter_users(page) {
    let data = { page: page };
    let response = await apiCall("user/list/all", data);
    return response;
  },

  async createUser(username, firstName, lastName, email, phone, role) {
    let data = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      phone_number: phone,
      role_id: role,
    };
    let response = await apiCall("user/create", data);
    return response;
  },

  async updateUser(userId, username, firstName, lastName, email, phone, role) {
    let data = {
      user_id: userId,
      username: username,
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      phone_number: phone,
      role_id: role,
    };
    let response = await apiCall("user/update", data);
    return response;
  },

  async resetPassword(password, rePassword) {
    let data = {
      password: password,
      re_password: rePassword,
    };
    let response = await apiCall("user/password/reset", data);
    return response;
  },

  async countAllPermissions() {
    let response = await apiCall("config/permission/count", null);
    return response;
  },

  async listAllPermissions() {
    let response = await apiCall("config/permission/filter", null);
    return response;
  },

  async listUserPermissions(userId) {
    let data = { user_id: userId };
    let response = await apiCall("user/permission/filter", data);
    return response;
  },

  async grantUserPermission(userId, permissionId) {
    let data = {
      user_id: userId,
      permission_id: permissionId,
    };
    let response = await apiCall("user/permission/grant", data);
    return response;
  },

  async denyUserPermission(userId, permissionId) {
    let data = {
      user_id: userId,
      permission_id: permissionId,
    };
    let response = await apiCall("user/permission/deny", data);
    return response;
  },

  async getUserPermissionCodes(userId) {
    let data = { user_id: userId };
    let response = await apiCall("user/permission/codes", data);
    return response;
  },

  async captiveLogin(username, password) {
    let data = {
      username: username,
      password: password,
    };
    let response = await apiCall("login/captive", data);
    return response;
  },

  async fetchUserProfiles() {
    let response = await apiCall("central/tenant/session_org", []);
    return response;
  },

  async switchProfiles(profile_id) {
    const data = {
      rental_id: profile_id
    }
    let response = await apiCall("central/tenant/switch_org", data);
    return response;
  },
  
  async exitProfile() {
    let response = await apiCall("central/tenant/exit_profile", []);
    return response;
  },

  async signup(data) {
    let response = await apiCall("central/watchman/signup", data);
    return response;
  },

  async createProfile(data) {
    let response = await apiCall("central/rental/new_profile", data);
    return response;
  },

};
