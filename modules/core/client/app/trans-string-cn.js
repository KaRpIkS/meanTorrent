(function (app) {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module(app.applicationModuleName)
    .config(transConfig);

  // **************************************************
  // 中 文 翻 译
  // --------------------------------------------------
  // 请不要修改翻译部分之外的代码
  // **************************************************

  var stringcn = {
    COMINGSOON: '开发中，请稍候...',

    //client topbar menu
    MENU_CHAT: '聊天室',
    MENU_TORRENTS: '种子',
    MENU_UPLOAD: '发布',
    MENU_FORUMS: '论坛',
    MENU_RANKING: '排行榜',
    MENU_RULES: '规则',
    MENU_VIP: 'VIP',
    MENU_ADMIN: '管理中心',

    //sub menu of torrents
    MENU_TORRENTS_SUB: {
      SUB_MOVIE: '电影',
      SUB_MTV: 'MTV',
      SUB_MUSIC: '音乐',
      SUB_OTHER: '其它'
    },

    //client account menu
    SIGNOUT: '退出登录',
    SIGNIN: '登录',
    SIGNUP: '注册',
    EDIT_PROFILE: '修改个人信息',
    EDIT_PROFILE_PIC: '修改个人头像',
    CHANGE_PASSWORD: '修改登录密码',
    MANAGE_SOCIAL_ACCOUNTS: '管理社交帐号'
  };

  // **************************************************
  // 中文翻译结束
  // **************************************************

  // config $translateProvider
  transConfig.$inject = ['$translateProvider'];
  function transConfig($translateProvider) {
    $translateProvider.translations('cn', stringcn);
  }

}(ApplicationConfiguration));
