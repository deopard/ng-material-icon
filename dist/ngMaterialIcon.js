/*! 
 * ng-material-icon v1.0.0
 * https://github.com/deopard/ng-material-icon#readme
 * Copyright (c) 2015 Tom Kim
 * License: MIT
 */
/**
  * @ngdoc directive
  * @name ng-material-icon:icon
  * @description
  * Create icons using Google's material design icon set
  */
(function () {
  angular
    .module('deopard.ngMaterialIcon')
    .directive('icon', Icon);

  Icon.$inject = ['MaterialIconMap'];

  function Icon (MaterialIconMap) {
    var directive = {
      template: '<i class="material-icons" aria-hidden="true"></i>',
      restrict: 'E',
      scope: true,
      replace: true,
      compile: compileFunc
    };

    return directive;

    function compileFunc (el, attrs, transclude) {
      // Icon's name
      var name = attrs.name;

      // Icon's size in number (18/24/36/48)
      var size = attrs.size || 24;

      // Whether icon is active or not. (true|false)
      var isActive = attrs['is-active'] !== 'false';

      // Icon's color. (dark|light) default is  'light'
      var color = attrs.color || 'light';

      name = MaterialIconMap[name];

      el.html(name);
      el.addClass(printClass());

      function printClass () {
        return [
          size ? 'md-' + size : '',
          isActive ? '' : 'md-inactive',
          'md-' + color
        ].join(' ');
      }
    }
  }
})();


/**
  * View full preview at
  * https://www.google.com/design/icons/
  */
(function () {
  'use strict';
  angular
    .module('deopard.ngMaterialIcon')
    .constant('MaterialIconMap', {
      '3d_rotation': '&#xE84d;',
      'ac_unit': '&#xEb3b;',
      'access_alarm': '&#xE190;',
      'access_alarms': '&#xE191;',
      'access_time': '&#xE192;',
      'accessibility': '&#xE84e;',
      'accessible': '&#xE914;',
      'account_balance': '&#xE84f;',
      'account_balance_wallet': '&#xE850;',
      'account_box': '&#xE851;',
      'account_circle': '&#xE853;',
      'adb': '&#xE60e;',
      'add': '&#xE145;',
      'add_a_photo': '&#xE439;',
      'add_alarm': '&#xE193;',
      'add_alert': '&#xE003;',
      'add_box': '&#xE146;',
      'add_circle': '&#xE147;',
      'add_circle_outline': '&#xE148;',
      'add_location': '&#xE567;',
      'add_shopping_cart': '&#xE854;',
      'add_to_photos': '&#xE39d;',
      'add_to_queue': '&#xE05c;',
      'adjust': '&#xE39e;',
      'airline_seat_flat': '&#xE630;',
      'airline_seat_flat_angled': '&#xE631;',
      'airline_seat_individual_suite': '&#xE632;',
      'airline_seat_legroom_extra': '&#xE633;',
      'airline_seat_legroom_normal': '&#xE634;',
      'airline_seat_legroom_reduced': '&#xE635;',
      'airline_seat_recline_extra': '&#xE636;',
      'airline_seat_recline_normal': '&#xE637;',
      'airplanemode_active': '&#xE195;',
      'airplanemode_inactive': '&#xE194;',
      'airplay': '&#xE055;',
      'airport_shuttle': '&#xEb3c;',
      'alarm': '&#xE855;',
      'alarm_add': '&#xE856;',
      'alarm_off': '&#xE857;',
      'alarm_on': '&#xE858;',
      'album': '&#xE019;',
      'all_inclusive': '&#xEb3d;',
      'all_out': '&#xE90b;',
      'android': '&#xE859;',
      'announcement': '&#xE85a;',
      'apps': '&#xE5c3;',
      'archive': '&#xE149;',
      'arrow_back': '&#xE5c4;',
      'arrow_downward': '&#xE5db;',
      'arrow_drop_down': '&#xE5c5;',
      'arrow_drop_down_circle': '&#xE5c6;',
      'arrow_drop_up': '&#xE5c7;',
      'arrow_forward': '&#xE5c8;',
      'arrow_upward': '&#xE5d8;',
      'art_track': '&#xE060;',
      'aspect_ratio': '&#xE85b;',
      'assessment': '&#xE85c;',
      'assignment': '&#xE85d;',
      'assignment_ind': '&#xE85e;',
      'assignment_late': '&#xE85f;',
      'assignment_return': '&#xE860;',
      'assignment_returned': '&#xE861;',
      'assignment_turned_in': '&#xE862;',
      'assistant': '&#xE39f;',
      'assistant_photo': '&#xE3a0;',
      'attach_file': '&#xE226;',
      'attach_money': '&#xE227;',
      'attachment': '&#xE2bc;',
      'audiotrack': '&#xE3a1;',
      'autorenew': '&#xE863;',
      'av_timer': '&#xE01b;',
      'backspace': '&#xE14a;',
      'backup': '&#xE864;',
      'battery_alert': '&#xE19c;',
      'battery_charging_full': '&#xE1a3;',
      'battery_full': '&#xE1a4;',
      'battery_std': '&#xE1a5;',
      'battery_unknown': '&#xE1a6;',
      'beach_access': '&#xEb3e;',
      'beenhere': '&#xE52d;',
      'block': '&#xE14b;',
      'bluetooth': '&#xE1a7;',
      'bluetooth_audio': '&#xE60f;',
      'bluetooth_connected': '&#xE1a8;',
      'bluetooth_disabled': '&#xE1a9;',
      'bluetooth_searching': '&#xE1aa;',
      'blur_circular': '&#xE3a2;',
      'blur_linear': '&#xE3a3;',
      'blur_off': '&#xE3a4;',
      'blur_on': '&#xE3a5;',
      'book': '&#xE865;',
      'bookmark': '&#xE866;',
      'bookmark_border': '&#xE867;',
      'border_all': '&#xE228;',
      'border_bottom': '&#xE229;',
      'border_clear': '&#xE22a;',
      'border_color': '&#xE22b;',
      'border_horizontal': '&#xE22c;',
      'border_inner': '&#xE22d;',
      'border_left': '&#xE22e;',
      'border_outer': '&#xE22f;',
      'border_right': '&#xE230;',
      'border_style': '&#xE231;',
      'border_top': '&#xE232;',
      'border_vertical': '&#xE233;',
      'brightness_1': '&#xE3a6;',
      'brightness_2': '&#xE3a7;',
      'brightness_3': '&#xE3a8;',
      'brightness_4': '&#xE3a9;',
      'brightness_5': '&#xE3aa;',
      'brightness_6': '&#xE3ab;',
      'brightness_7': '&#xE3ac;',
      'brightness_auto': '&#xE1ab;',
      'brightness_high': '&#xE1ac;',
      'brightness_low': '&#xE1ad;',
      'brightness_medium': '&#xE1ae;',
      'broken_image': '&#xE3ad;',
      'brush': '&#xE3ae;',
      'bug_report': '&#xE868;',
      'build': '&#xE869;',
      'business': '&#xE0af;',
      'business_center': '&#xEb3f;',
      'cached': '&#xE86a;',
      'cake': '&#xE7e9;',
      'call': '&#xE0b0;',
      'call_end': '&#xE0b1;',
      'call_made': '&#xE0b2;',
      'call_merge': '&#xE0b3;',
      'call_missed': '&#xE0b4;',
      'call_missed_outgoing': '&#xE0e4;',
      'call_received': '&#xE0b5;',
      'call_split': '&#xE0b6;',
      'camera': '&#xE3af;',
      'camera_alt': '&#xE3b0;',
      'camera_enhance': '&#xE8fc;',
      'camera_front': '&#xE3b1;',
      'camera_rear': '&#xE3b2;',
      'camera_roll': '&#xE3b3;',
      'cancel': '&#xE5c9;',
      'card_giftcard': '&#xE8f6;',
      'card_membership': '&#xE8f7;',
      'card_travel': '&#xE8f8;',
      'casino': '&#xEb40;',
      'cast': '&#xE307;',
      'cast_connected': '&#xE308;',
      'center_focus_strong': '&#xE3b4;',
      'center_focus_weak': '&#xE3b5;',
      'change_history': '&#xE86b;',
      'chat': '&#xE0b7;',
      'chat_bubble': '&#xE0ca;',
      'chat_bubble_outline': '&#xE0cb;',
      'check': '&#xE5ca;',
      'check_box': '&#xE834;',
      'check_box_outline_blank': '&#xE835;',
      'check_circle': '&#xE86c;',
      'chevron_left': '&#xE5cb;',
      'chevron_right': '&#xE5cc;',
      'child_care': '&#xEb41;',
      'child_friendly': '&#xEb42;',
      'chrome_reader_mode': '&#xE86d;',
      'class': '&#xE86e;',
      'clear': '&#xE14c;',
      'clear_all': '&#xE0b8;',
      'close': '&#xE5cd;',
      'closed_caption': '&#xE01c;',
      'cloud': '&#xE2bd;',
      'cloud_circle': '&#xE2be;',
      'cloud_done': '&#xE2bf;',
      'cloud_download': '&#xE2c0;',
      'cloud_off': '&#xE2c1;',
      'cloud_queue': '&#xE2c2;',
      'cloud_upload': '&#xE2c3;',
      'code': '&#xE86f;',
      'collections': '&#xE3b6;',
      'collections_bookmark': '&#xE431;',
      'color_lens': '&#xE3b7;',
      'colorize': '&#xE3b8;',
      'comment': '&#xE0b9;',
      'compare': '&#xE3b9;',
      'compare_arrows': '&#xE915;',
      'computer': '&#xE30a;',
      'confirmation_number': '&#xE638;',
      'contact_mail': '&#xE0d0;',
      'contact_phone': '&#xE0cf;',
      'contacts': '&#xE0ba;',
      'content_copy': '&#xE14d;',
      'content_cut': '&#xE14e;',
      'content_paste': '&#xE14f;',
      'control_point': '&#xE3ba;',
      'control_point_duplicate': '&#xE3bb;',
      'copyright': '&#xE90c;',
      'create': '&#xE150;',
      'create_new_folder': '&#xE2cc;',
      'credit_card': '&#xE870;',
      'crop': '&#xE3be;',
      'crop_16_9': '&#xE3bc;',
      'crop_3_2': '&#xE3bd;',
      'crop_5_4': '&#xE3bf;',
      'crop_7_5': '&#xE3c0;',
      'crop_din': '&#xE3c1;',
      'crop_free': '&#xE3c2;',
      'crop_landscape': '&#xE3c3;',
      'crop_original': '&#xE3c4;',
      'crop_portrait': '&#xE3c5;',
      'crop_rotate': '&#xE437;',
      'crop_square': '&#xE3c6;',
      'dashboard': '&#xE871;',
      'data_usage': '&#xE1af;',
      'date_range': '&#xE916;',
      'dehaze': '&#xE3c7;',
      'delete': '&#xE872;',
      'description': '&#xE873;',
      'desktop_mac': '&#xE30b;',
      'desktop_windows': '&#xE30c;',
      'details': '&#xE3c8;',
      'developer_board': '&#xE30d;',
      'developer_mode': '&#xE1b0;',
      'device_hub': '&#xE335;',
      'devices': '&#xE1b1;',
      'devices_other': '&#xE337;',
      'dialer_sip': '&#xE0bb;',
      'dialpad': '&#xE0bc;',
      'directions': '&#xE52e;',
      'directions_bike': '&#xE52f;',
      'directions_boat': '&#xE532;',
      'directions_bus': '&#xE530;',
      'directions_car': '&#xE531;',
      'directions_railway': '&#xE534;',
      'directions_run': '&#xE566;',
      'directions_subway': '&#xE533;',
      'directions_transit': '&#xE535;',
      'directions_walk': '&#xE536;',
      'disc_full': '&#xE610;',
      'dns': '&#xE875;',
      'do_not_disturb': '&#xE612;',
      'do_not_disturb_alt': '&#xE611;',
      'dock': '&#xE30e;',
      'domain': '&#xE7ee;',
      'done': '&#xE876;',
      'done_all': '&#xE877;',
      'donut_large': '&#xE917;',
      'donut_small': '&#xE918;',
      'drafts': '&#xE151;',
      'drag_handle': '&#xE25d;',
      'drive_eta': '&#xE613;',
      'dvr': '&#xE1b2;',
      'edit': '&#xE3c9;',
      'edit_location': '&#xE568;',
      'eject': '&#xE8fb;',
      'email': '&#xE0be;',
      'enhanced_encryption': '&#xE63f;',
      'equalizer': '&#xE01d;',
      'error': '&#xE000;',
      'error_outline': '&#xE001;',
      'event': '&#xE878;',
      'event_available': '&#xE614;',
      'event_busy': '&#xE615;',
      'event_note': '&#xE616;',
      'event_seat': '&#xE903;',
      'exit_to_app': '&#xE879;',
      'expand_less': '&#xE5ce;',
      'expand_more': '&#xE5cf;',
      'explicit': '&#xE01e;',
      'explore': '&#xE87a;',
      'exposure': '&#xE3ca;',
      'exposure_neg_1': '&#xE3cb;',
      'exposure_neg_2': '&#xE3cc;',
      'exposure_plus_1': '&#xE3cd;',
      'exposure_plus_2': '&#xE3ce;',
      'exposure_zero': '&#xE3cf;',
      'extension': '&#xE87b;',
      'face': '&#xE87c;',
      'fast_forward': '&#xE01f;',
      'fast_rewind': '&#xE020;',
      'favorite': '&#xE87d;',
      'favorite_border': '&#xE87e;',
      'feedback': '&#xE87f;',
      'fiber_dvr': '&#xE05d;',
      'fiber_manual_record': '&#xE061;',
      'fiber_new': '&#xE05e;',
      'fiber_pin': '&#xE06a;',
      'fiber_smart_record': '&#xE062;',
      'file_download': '&#xE2c4;',
      'file_upload': '&#xE2c6;',
      'filter': '&#xE3d3;',
      'filter_1': '&#xE3d0;',
      'filter_2': '&#xE3d1;',
      'filter_3': '&#xE3d2;',
      'filter_4': '&#xE3d4;',
      'filter_5': '&#xE3d5;',
      'filter_6': '&#xE3d6;',
      'filter_7': '&#xE3d7;',
      'filter_8': '&#xE3d8;',
      'filter_9': '&#xE3d9;',
      'filter_9_plus': '&#xE3da;',
      'filter_b_and_w': '&#xE3db;',
      'filter_center_focus': '&#xE3dc;',
      'filter_drama': '&#xE3dd;',
      'filter_frames': '&#xE3de;',
      'filter_hdr': '&#xE3df;',
      'filter_list': '&#xE152;',
      'filter_none': '&#xE3e0;',
      'filter_tilt_shift': '&#xE3e2;',
      'filter_vintage': '&#xE3e3;',
      'find_in_page': '&#xE880;',
      'find_replace': '&#xE881;',
      'fingerprint': '&#xE90d;',
      'fitness_center': '&#xEb43;',
      'flag': '&#xE153;',
      'flare': '&#xE3e4;',
      'flash_auto': '&#xE3e5;',
      'flash_off': '&#xE3e6;',
      'flash_on': '&#xE3e7;',
      'flight': '&#xE539;',
      'flight_land': '&#xE904;',
      'flight_takeoff': '&#xE905;',
      'flip': '&#xE3e8;',
      'flip_to_back': '&#xE882;',
      'flip_to_front': '&#xE883;',
      'folder': '&#xE2c7;',
      'folder_open': '&#xE2c8;',
      'folder_shared': '&#xE2c9;',
      'folder_special': '&#xE617;',
      'font_download': '&#xE167;',
      'format_align_center': '&#xE234;',
      'format_align_justify': '&#xE235;',
      'format_align_left': '&#xE236;',
      'format_align_right': '&#xE237;',
      'format_bold': '&#xE238;',
      'format_clear': '&#xE239;',
      'format_color_fill': '&#xE23a;',
      'format_color_reset': '&#xE23b;',
      'format_color_text': '&#xE23c;',
      'format_indent_decrease': '&#xE23d;',
      'format_indent_increase': '&#xE23e;',
      'format_italic': '&#xE23f;',
      'format_line_spacing': '&#xE240;',
      'format_list_bulleted': '&#xE241;',
      'format_list_numbered': '&#xE242;',
      'format_paint': '&#xE243;',
      'format_quote': '&#xE244;',
      'format_shapes': '&#xE25e;',
      'format_size': '&#xE245;',
      'format_strikethrough': '&#xE246;',
      'format_textdirection_l_to_r': '&#xE247;',
      'format_textdirection_r_to_l': '&#xE248;',
      'format_underlined': '&#xE249;',
      'forum': '&#xE0bf;',
      'forward': '&#xE154;',
      'forward_10': '&#xE056;',
      'forward_30': '&#xE057;',
      'forward_5': '&#xE058;',
      'free_breakfast': '&#xEb44;',
      'fullscreen': '&#xE5d0;',
      'fullscreen_exit': '&#xE5d1;',
      'functions': '&#xE24a;',
      'gamepad': '&#xE30f;',
      'games': '&#xE021;',
      'gavel': '&#xE90e;',
      'gesture': '&#xE155;',
      'get_app': '&#xE884;',
      'gif': '&#xE908;',
      'golf_course': '&#xEb45;',
      'gps_fixed': '&#xE1b3;',
      'gps_not_fixed': '&#xE1b4;',
      'gps_off': '&#xE1b5;',
      'grade': '&#xE885;',
      'gradient': '&#xE3e9;',
      'grain': '&#xE3ea;',
      'graphic_eq': '&#xE1b8;',
      'grid_off': '&#xE3eb;',
      'grid_on': '&#xE3ec;',
      'group': '&#xE7ef;',
      'group_add': '&#xE7f0;',
      'group_work': '&#xE886;',
      'hd': '&#xE052;',
      'hdr_off': '&#xE3ed;',
      'hdr_on': '&#xE3ee;',
      'hdr_strong': '&#xE3f1;',
      'hdr_weak': '&#xE3f2;',
      'headset': '&#xE310;',
      'headset_mic': '&#xE311;',
      'healing': '&#xE3f3;',
      'hearing': '&#xE023;',
      'help': '&#xE887;',
      'help_outline': '&#xE8fd;',
      'high_quality': '&#xE024;',
      'highlight': '&#xE25f;',
      'highlight_off': '&#xE888;',
      'history': '&#xE889;',
      'home': '&#xE88a;',
      'hot_tub': '&#xEb46;',
      'hotel': '&#xE53a;',
      'hourglass_empty': '&#xE88b;',
      'hourglass_full': '&#xE88c;',
      'http': '&#xE902;',
      'https': '&#xE88d;',
      'image': '&#xE3f4;',
      'image_aspect_ratio': '&#xE3f5;',
      'import_contacts': '&#xE0e0;',
      'import_export': '&#xE0c3;',
      'important_devices': '&#xE912;',
      'inbox': '&#xE156;',
      'indeterminate_check_box': '&#xE909;',
      'info': '&#xE88e;',
      'info_outline': '&#xE88f;',
      'input': '&#xE890;',
      'insert_chart': '&#xE24b;',
      'insert_comment': '&#xE24c;',
      'insert_drive_file': '&#xE24d;',
      'insert_emoticon': '&#xE24e;',
      'insert_invitation': '&#xE24f;',
      'insert_link': '&#xE250;',
      'insert_photo': '&#xE251;',
      'invert_colors': '&#xE891;',
      'invert_colors_off': '&#xE0c4;',
      'iso': '&#xE3f6;',
      'keyboard': '&#xE312;',
      'keyboard_arrow_down': '&#xE313;',
      'keyboard_arrow_left': '&#xE314;',
      'keyboard_arrow_right': '&#xE315;',
      'keyboard_arrow_up': '&#xE316;',
      'keyboard_backspace': '&#xE317;',
      'keyboard_capslock': '&#xE318;',
      'keyboard_hide': '&#xE31a;',
      'keyboard_return': '&#xE31b;',
      'keyboard_tab': '&#xE31c;',
      'keyboard_voice': '&#xE31d;',
      'kitchen': '&#xEb47;',
      'label': '&#xE892;',
      'label_outline': '&#xE893;',
      'landscape': '&#xE3f7;',
      'language': '&#xE894;',
      'laptop': '&#xE31e;',
      'laptop_chromebook': '&#xE31f;',
      'laptop_mac': '&#xE320;',
      'laptop_windows': '&#xE321;',
      'launch': '&#xE895;',
      'layers': '&#xE53b;',
      'layers_clear': '&#xE53c;',
      'leak_add': '&#xE3f8;',
      'leak_remove': '&#xE3f9;',
      'lens': '&#xE3fa;',
      'library_add': '&#xE02e;',
      'library_books': '&#xE02f;',
      'library_music': '&#xE030;',
      'lightbulb_outline': '&#xE90f;',
      'line_style': '&#xE919;',
      'line_weight': '&#xE91a;',
      'linear_scale': '&#xE260;',
      'link': '&#xE157;',
      'linked_camera': '&#xE438;',
      'list': '&#xE896;',
      'live_help': '&#xE0c6;',
      'live_tv': '&#xE639;',
      'local_activity': '&#xE53f;',
      'local_airport': '&#xE53d;',
      'local_atm': '&#xE53e;',
      'local_bar': '&#xE540;',
      'local_cafe': '&#xE541;',
      'local_car_wash': '&#xE542;',
      'local_convenience_store': '&#xE543;',
      'local_dining': '&#xE556;',
      'local_drink': '&#xE544;',
      'local_florist': '&#xE545;',
      'local_gas_station': '&#xE546;',
      'local_grocery_store': '&#xE547;',
      'local_hospital': '&#xE548;',
      'local_hotel': '&#xE549;',
      'local_laundry_service': '&#xE54a;',
      'local_library': '&#xE54b;',
      'local_mall': '&#xE54c;',
      'local_movies': '&#xE54d;',
      'local_offer': '&#xE54e;',
      'local_parking': '&#xE54f;',
      'local_pharmacy': '&#xE550;',
      'local_phone': '&#xE551;',
      'local_pizza': '&#xE552;',
      'local_play': '&#xE553;',
      'local_post_office': '&#xE554;',
      'local_printshop': '&#xE555;',
      'local_see': '&#xE557;',
      'local_shipping': '&#xE558;',
      'local_taxi': '&#xE559;',
      'location_city': '&#xE7f1;',
      'location_disabled': '&#xE1b6;',
      'location_off': '&#xE0c7;',
      'location_on': '&#xE0c8;',
      'location_searching': '&#xE1b7;',
      'lock': '&#xE897;',
      'lock_open': '&#xE898;',
      'lock_outline': '&#xE899;',
      'looks': '&#xE3fc;',
      'looks_3': '&#xE3fb;',
      'looks_4': '&#xE3fd;',
      'looks_5': '&#xE3fe;',
      'looks_6': '&#xE3ff;',
      'looks_one': '&#xE400;',
      'looks_two': '&#xE401;',
      'loop': '&#xE028;',
      'loupe': '&#xE402;',
      'loyalty': '&#xE89a;',
      'mail': '&#xE158;',
      'mail_outline': '&#xE0e1;',
      'map': '&#xE55b;',
      'markunread': '&#xE159;',
      'markunread_mailbox': '&#xE89b;',
      'memory': '&#xE322;',
      'menu': '&#xE5d2;',
      'merge_type': '&#xE252;',
      'message': '&#xE0c9;',
      'mic': '&#xE029;',
      'mic_none': '&#xE02a;',
      'mic_off': '&#xE02b;',
      'mms': '&#xE618;',
      'mode_comment': '&#xE253;',
      'mode_edit': '&#xE254;',
      'money_off': '&#xE25c;',
      'monochrome_photos': '&#xE403;',
      'mood': '&#xE7f2;',
      'mood_bad': '&#xE7f3;',
      'more': '&#xE619;',
      'more_horiz': '&#xE5d3;',
      'more_vert': '&#xE5d4;',
      'motorcycle': '&#xE91b;',
      'mouse': '&#xE323;',
      'move_to_inbox': '&#xE168;',
      'movie': '&#xE02c;',
      'movie_creation': '&#xE404;',
      'movie_filter': '&#xE43a;',
      'music_note': '&#xE405;',
      'music_video': '&#xE063;',
      'my_location': '&#xE55c;',
      'nature': '&#xE406;',
      'nature_people': '&#xE407;',
      'navigate_before': '&#xE408;',
      'navigate_next': '&#xE409;',
      'navigation': '&#xE55d;',
      'near_me': '&#xE569;',
      'network_cell': '&#xE1b9;',
      'network_check': '&#xE640;',
      'network_locked': '&#xE61a;',
      'network_wifi': '&#xE1ba;',
      'new_releases': '&#xE031;',
      'next_week': '&#xE16a;',
      'nfc': '&#xE1bb;',
      'no_encryption': '&#xE641;',
      'no_sim': '&#xE0cc;',
      'not_interested': '&#xE033;',
      'note_add': '&#xE89c;',
      'notifications': '&#xE7f4;',
      'notifications_active': '&#xE7f7;',
      'notifications_none': '&#xE7f5;',
      'notifications_off': '&#xE7f6;',
      'notifications_paused': '&#xE7f8;',
      'offline_pin': '&#xE90a;',
      'ondemand_video': '&#xE63a;',
      'opacity': '&#xE91c;',
      'open_in_browser': '&#xE89d;',
      'open_in_new': '&#xE89e;',
      'open_with': '&#xE89f;',
      'pages': '&#xE7f9;',
      'pageview': '&#xE8a0;',
      'palette': '&#xE40a;',
      'pan_tool': '&#xE925;',
      'panorama': '&#xE40b;',
      'panorama_fish_eye': '&#xE40c;',
      'panorama_horizontal': '&#xE40d;',
      'panorama_vertical': '&#xE40e;',
      'panorama_wide_angle': '&#xE40f;',
      'party_mode': '&#xE7fa;',
      'pause': '&#xE034;',
      'pause_circle_filled': '&#xE035;',
      'pause_circle_outline': '&#xE036;',
      'payment': '&#xE8a1;',
      'people': '&#xE7fb;',
      'people_outline': '&#xE7fc;',
      'perm_camera_mic': '&#xE8a2;',
      'perm_contact_calendar': '&#xE8a3;',
      'perm_data_setting': '&#xE8a4;',
      'perm_device_information': '&#xE8a5;',
      'perm_identity': '&#xE8a6;',
      'perm_media': '&#xE8a7;',
      'perm_phone_msg': '&#xE8a8;',
      'perm_scan_wifi': '&#xE8a9;',
      'person': '&#xE7fd;',
      'person_add': '&#xE7fe;',
      'person_outline': '&#xE7ff;',
      'person_pin': '&#xE55a;',
      'person_pin_circle': '&#xE56a;',
      'personal_video': '&#xE63b;',
      'pets': '&#xE91d;',
      'phone': '&#xE0cd;',
      'phone_android': '&#xE324;',
      'phone_bluetooth_speaker': '&#xE61b;',
      'phone_forwarded': '&#xE61c;',
      'phone_in_talk': '&#xE61d;',
      'phone_iphone': '&#xE325;',
      'phone_locked': '&#xE61e;',
      'phone_missed': '&#xE61f;',
      'phone_paused': '&#xE620;',
      'phonelink': '&#xE326;',
      'phonelink_erase': '&#xE0db;',
      'phonelink_lock': '&#xE0dc;',
      'phonelink_off': '&#xE327;',
      'phonelink_ring': '&#xE0dd;',
      'phonelink_setup': '&#xE0de;',
      'photo': '&#xE410;',
      'photo_album': '&#xE411;',
      'photo_camera': '&#xE412;',
      'photo_filter': '&#xE43b;',
      'photo_library': '&#xE413;',
      'photo_size_select_actual': '&#xE432;',
      'photo_size_select_large': '&#xE433;',
      'photo_size_select_small': '&#xE434;',
      'picture_as_pdf': '&#xE415;',
      'picture_in_picture': '&#xE8aa;',
      'picture_in_picture_alt': '&#xE911;',
      'pin_drop': '&#xE55e;',
      'place': '&#xE55f;',
      'play_arrow': '&#xE037;',
      'play_circle_filled': '&#xE038;',
      'play_circle_outline': '&#xE039;',
      'play_for_work': '&#xE906;',
      'playlist_add': '&#xE03b;',
      'playlist_add_check': '&#xE065;',
      'playlist_play': '&#xE05f;',
      'plus_one': '&#xE800;',
      'poll': '&#xE801;',
      'polymer': '&#xE8ab;',
      'pool': '&#xEb48;',
      'portable_wifi_off': '&#xE0ce;',
      'portrait': '&#xE416;',
      'power': '&#xE63c;',
      'power_input': '&#xE336;',
      'power_settings_new': '&#xE8ac;',
      'pregnant_woman': '&#xE91e;',
      'present_to_all': '&#xE0df;',
      'print': '&#xE8ad;',
      'public': '&#xE80b;',
      'publish': '&#xE255;',
      'query_builder': '&#xE8ae;',
      'question_answer': '&#xE8af;',
      'queue': '&#xE03c;',
      'queue_music': '&#xE03d;',
      'queue_play_next': '&#xE066;',
      'radio': '&#xE03e;',
      'radio_button_checked': '&#xE837;',
      'radio_button_unchecked': '&#xE836;',
      'rate_review': '&#xE560;',
      'receipt': '&#xE8b0;',
      'recent_actors': '&#xE03f;',
      'record_voice_over': '&#xE91f;',
      'redeem': '&#xE8b1;',
      'redo': '&#xE15a;',
      'refresh': '&#xE5d5;',
      'remove': '&#xE15b;',
      'remove_circle': '&#xE15c;',
      'remove_circle_outline': '&#xE15d;',
      'remove_from_queue': '&#xE067;',
      'remove_red_eye': '&#xE417;',
      'reorder': '&#xE8fe;',
      'repeat': '&#xE040;',
      'repeat_one': '&#xE041;',
      'replay': '&#xE042;',
      'replay_10': '&#xE059;',
      'replay_30': '&#xE05a;',
      'replay_5': '&#xE05b;',
      'reply': '&#xE15e;',
      'reply_all': '&#xE15f;',
      'report': '&#xE160;',
      'report_problem': '&#xE8b2;',
      'restaurant_menu': '&#xE561;',
      'restore': '&#xE8b3;',
      'ring_volume': '&#xE0d1;',
      'room': '&#xE8b4;',
      'room_service': '&#xEb49;',
      'rotate_90_degrees_ccw': '&#xE418;',
      'rotate_left': '&#xE419;',
      'rotate_right': '&#xE41a;',
      'rounded_corner': '&#xE920;',
      'router': '&#xE328;',
      'rowing': '&#xE921;',
      'rv_hookup': '&#xE642;',
      'satellite': '&#xE562;',
      'save': '&#xE161;',
      'scanner': '&#xE329;',
      'schedule': '&#xE8b5;',
      'school': '&#xE80c;',
      'screen_lock_landscape': '&#xE1be;',
      'screen_lock_portrait': '&#xE1bf;',
      'screen_lock_rotation': '&#xE1c0;',
      'screen_rotation': '&#xE1c1;',
      'screen_share': '&#xE0e2;',
      'sd_card': '&#xE623;',
      'sd_storage': '&#xE1c2;',
      'search': '&#xE8b6;',
      'security': '&#xE32a;',
      'select_all': '&#xE162;',
      'send': '&#xE163;',
      'settings': '&#xE8b8;',
      'settings_applications': '&#xE8b9;',
      'settings_backup_restore': '&#xE8ba;',
      'settings_bluetooth': '&#xE8bb;',
      'settings_brightness': '&#xE8bd;',
      'settings_cell': '&#xE8bc;',
      'settings_ethernet': '&#xE8be;',
      'settings_input_antenna': '&#xE8bf;',
      'settings_input_component': '&#xE8c0;',
      'settings_input_composite': '&#xE8c1;',
      'settings_input_hdmi': '&#xE8c2;',
      'settings_input_svideo': '&#xE8c3;',
      'settings_overscan': '&#xE8c4;',
      'settings_phone': '&#xE8c5;',
      'settings_power': '&#xE8c6;',
      'settings_remote': '&#xE8c7;',
      'settings_system_daydream': '&#xE1c3;',
      'settings_voice': '&#xE8c8;',
      'share': '&#xE80d;',
      'shop': '&#xE8c9;',
      'shop_two': '&#xE8ca;',
      'shopping_basket': '&#xE8cb;',
      'shopping_cart': '&#xE8cc;',
      'short_text': '&#xE261;',
      'shuffle': '&#xE043;',
      'signal_cellular_4_bar': '&#xE1c8;',
      'signal_cellular_connected_no_internet_4_bar': '&#xE1cd;',
      'signal_cellular_no_sim': '&#xE1ce;',
      'signal_cellular_null': '&#xE1cf;',
      'signal_cellular_off': '&#xE1d0;',
      'signal_wifi_4_bar': '&#xE1d8;',
      'signal_wifi_4_bar_lock': '&#xE1d9;',
      'signal_wifi_off': '&#xE1da;',
      'sim_card': '&#xE32b;',
      'sim_card_alert': '&#xE624;',
      'skip_next': '&#xE044;',
      'skip_previous': '&#xE045;',
      'slideshow': '&#xE41b;',
      'slow_motion_video': '&#xE068;',
      'smartphone': '&#xE32c;',
      'smoke_free': '&#xEb4a;',
      'smoking_rooms': '&#xEb4b;',
      'sms': '&#xE625;',
      'sms_failed': '&#xE626;',
      'snooze': '&#xE046;',
      'sort': '&#xE164;',
      'sort_by_alpha': '&#xE053;',
      'spa': '&#xEb4c;',
      'space_bar': '&#xE256;',
      'speaker': '&#xE32d;',
      'speaker_group': '&#xE32e;',
      'speaker_notes': '&#xE8cd;',
      'speaker_phone': '&#xE0d2;',
      'spellcheck': '&#xE8ce;',
      'star': '&#xE838;',
      'star_border': '&#xE83a;',
      'star_half': '&#xE839;',
      'stars': '&#xE8d0;',
      'stay_current_landscape': '&#xE0d3;',
      'stay_current_portrait': '&#xE0d4;',
      'stay_primary_landscape': '&#xE0d5;',
      'stay_primary_portrait': '&#xE0d6;',
      'stop': '&#xE047;',
      'stop_screen_share': '&#xE0e3;',
      'storage': '&#xE1db;',
      'store': '&#xE8d1;',
      'store_mall_directory': '&#xE563;',
      'straighten': '&#xE41c;',
      'strikethrough_s': '&#xE257;',
      'style': '&#xE41d;',
      'subdirectory_arrow_left': '&#xE5d9;',
      'subdirectory_arrow_right': '&#xE5da;',
      'subject': '&#xE8d2;',
      'subscriptions': '&#xE064;',
      'subtitles': '&#xE048;',
      'supervisor_account': '&#xE8d3;',
      'surround_sound': '&#xE049;',
      'swap_calls': '&#xE0d7;',
      'swap_horiz': '&#xE8d4;',
      'swap_vert': '&#xE8d5;',
      'swap_vertical_circle': '&#xE8d6;',
      'switch_camera': '&#xE41e;',
      'switch_video': '&#xE41f;',
      'sync': '&#xE627;',
      'sync_disabled': '&#xE628;',
      'sync_problem': '&#xE629;',
      'system_update': '&#xE62a;',
      'system_update_alt': '&#xE8d7;',
      'tab': '&#xE8d8;',
      'tab_unselected': '&#xE8d9;',
      'tablet': '&#xE32f;',
      'tablet_android': '&#xE330;',
      'tablet_mac': '&#xE331;',
      'tag_faces': '&#xE420;',
      'tap_and_play': '&#xE62b;',
      'terrain': '&#xE564;',
      'text_fields': '&#xE262;',
      'text_format': '&#xE165;',
      'textsms': '&#xE0d8;',
      'texture': '&#xE421;',
      'theaters': '&#xE8da;',
      'thumb_down': '&#xE8db;',
      'thumb_up': '&#xE8dc;',
      'thumbs_up_down': '&#xE8dd;',
      'time_to_leave': '&#xE62c;',
      'timelapse': '&#xE422;',
      'timeline': '&#xE922;',
      'timer': '&#xE425;',
      'timer_10': '&#xE423;',
      'timer_3': '&#xE424;',
      'timer_off': '&#xE426;',
      'toc': '&#xE8de;',
      'today': '&#xE8df;',
      'toll': '&#xE8e0;',
      'tonality': '&#xE427;',
      'touch_app': '&#xE913;',
      'toys': '&#xE332;',
      'track_changes': '&#xE8e1;',
      'traffic': '&#xE565;',
      'transform': '&#xE428;',
      'translate': '&#xE8e2;',
      'trending_down': '&#xE8e3;',
      'trending_flat': '&#xE8e4;',
      'trending_up': '&#xE8e5;',
      'tune': '&#xE429;',
      'turned_in': '&#xE8e6;',
      'turned_in_not': '&#xE8e7;',
      'tv': '&#xE333;',
      'unarchive': '&#xE169;',
      'undo': '&#xE166;',
      'unfold_less': '&#xE5d6;',
      'unfold_more': '&#xE5d7;',
      'update': '&#xE923;',
      'usb': '&#xE1e0;',
      'verified_user': '&#xE8e8;',
      'vertical_align_bottom': '&#xE258;',
      'vertical_align_center': '&#xE259;',
      'vertical_align_top': '&#xE25a;',
      'vibration': '&#xE62d;',
      'video_library': '&#xE04a;',
      'videocam': '&#xE04b;',
      'videocam_off': '&#xE04c;',
      'videogame_asset': '&#xE338;',
      'view_agenda': '&#xE8e9;',
      'view_array': '&#xE8ea;',
      'view_carousel': '&#xE8eb;',
      'view_column': '&#xE8ec;',
      'view_comfy': '&#xE42a;',
      'view_compact': '&#xE42b;',
      'view_day': '&#xE8ed;',
      'view_headline': '&#xE8ee;',
      'view_list': '&#xE8ef;',
      'view_module': '&#xE8f0;',
      'view_quilt': '&#xE8f1;',
      'view_stream': '&#xE8f2;',
      'view_week': '&#xE8f3;',
      'vignette': '&#xE435;',
      'visibility': '&#xE8f4;',
      'visibility_off': '&#xE8f5;',
      'voice_chat': '&#xE62e;',
      'voicemail': '&#xE0d9;',
      'volume_down': '&#xE04d;',
      'volume_mute': '&#xE04e;',
      'volume_off': '&#xE04f;',
      'volume_up': '&#xE050;',
      'vpn_key': '&#xE0da;',
      'vpn_lock': '&#xE62f;',
      'wallpaper': '&#xE1bc;',
      'warning': '&#xE002;',
      'watch': '&#xE334;',
      'watch_later': '&#xE924;',
      'wb_auto': '&#xE42c;',
      'wb_cloudy': '&#xE42d;',
      'wb_incandescent': '&#xE42e;',
      'wb_iridescent': '&#xE436;',
      'wb_sunny': '&#xE430;',
      'wc': '&#xE63d;',
      'web': '&#xE051;',
      'web_asset': '&#xE069;',
      'weekend': '&#xE16b;',
      'whatshot': '&#xE80e;',
      'widgets': '&#xE1bd;',
      'wifi': '&#xE63e;',
      'wifi_lock': '&#xE1e1;',
      'wifi_tethering': '&#xE1e2;',
      'work': '&#xE8f9;',
      'wrap_text': '&#xE25b;',
      'youtube_searched_for': '&#xE8fa;',
      'zoom_in': '&#xE8ff;',
      'zoom_out': '&#xE900;',
      'zoom_out_map': '&#xE56b;',
    });
})();