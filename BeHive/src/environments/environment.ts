// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  registrationServiceUrl: 'https://weiwu.online:8443/RegistrationService',
  addSkillsServiceUrl: '/admin/skills',
  getAllSkillsService: '/skills',
  authenticationServiceUrl: 'https://weiwu.online:8443/AuthService',
  userServiceUrl: 'https://weiwu.online:8443/UserService',
  registerEndpoint: '/register',
  loginEndpoint: '/login',
  logoutEndpoint: '/logout',
  userDataUrl: 'https://weiwu.online:8443/UserService',
  userDataEndpoint: '/user',
  userAddSkillEndpoint: '/user/skills',
  isLogin: true,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
