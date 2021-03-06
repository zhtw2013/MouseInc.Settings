export default {
  doc: '使用手册',
  index: '快速设置',
  switch: '功能开关',
  exclude: '排除列表',
  gesture: '鼠标手势',
  settings: '手势设置',
  list: '手势列表',
  global: '通用手势',
  custom: '特定手势',
  other: '其它设置',
  edge: '边缘滚动',
  copy: '复制增强',
  hotkey: '全局热键',
  keycast: '按键回显',
  i18n: '多语言',

  reset: '重置',
  save: '保存',

  warning: '警告',
  reset_tips1: '此操作将会丢失所有自定义设置，请小心操作！',
  reset_tips2: '是否继续？',
  reset_ok: '重置成功',
  save_ok: '保存成功',

  mousegesture: '鼠标手势',
  wheelswitch: '滚轮切换',
  // keycast: '按键回显',
  wheelaltcontrol: '快速音量调节',
  volumecontrolsound: '音效回馈',
  wheeledge: '边缘滚动',
  clipboardmanager: '复制增强',
  ignorefullscreen: '忽略全屏',
  wheelthrough: '滚轮穿透',
  wheelnatural: '自然滚动',

  mousegesture_label: '按住鼠标右键持续移动画出形状，放开右键即可触发对应动作',
  wheelswitch_label: '按住鼠标右键时，滚动滚轮可以进行切换标签页动作（依赖鼠标手势开关）',
  keycast_label: '在屏幕上显示键盘按键，方便录制教程',
  wheelaltcontrol_label: '按住Alt时滚动滚轮调节音量大小，按下滚轮静音',
  volumecontrolsound_label: '音量调节时播放音效',
  wheeledge_label: '鼠标滚轮在屏幕四个边滚动、按下时触发的功能',
  clipboardmanager_label: '选中文字快速按下两次Ctrl+C后，会弹出快捷操作菜单',
  ignorefullscreen_label: '当前程序如果是一个全屏程序，会自动暂停MouseInc功能',
  wheelthrough_label: '不在焦点的窗口可以自由滚动，Win10系统已经自带',
  wheelnatural_label: '滚轮反向，和Mac OS X一致',

  exclude_tips1: '默认配置下，画手势Z可以添加程序到列表中',
  exclude_tips2: '在列表中的程序不会启用鼠标手势等功能，忽略大小写。',
  exclude_tips3: '当前排除程序列表：',
  exclude_warning: '请输入正确的程序名',

  add: '添加',

  open_label: '开启',
  addmode_label: '添加模式',
  drawcolor_label: '手势颜色',
  drawresult_label: '显示操作',
  drawtrace_label: '显示轨迹',
  tracearrow_label: '轨迹箭头',
  tracewidth_label: '轨迹宽度',
  failcolor_label: '失败颜色',
  startdistance_label: '触发距离',
  timeout_label: '停顿超时',
  restoreevent_label: '还原事件',
  sensitive_label: '识别灵敏度',

  more_setting: '更多设置',

  addmode_tip: '开启后画出未识别的手势将会打开添加界面，添加后记得按F5刷新设置页面。',
  startdistance_tip: '按下鼠标右键以后移动超过这个距离才会开启手势',
  timeout_tip: '鼠标超过这个时间未移动，会中断手势',
  restoreevent_tip: '手势失效时是否还原鼠标按下事件',
  startdistance_unit: '（像素）',
  timeout_unit: '（毫秒）',

  list_tips1: '这里列出所有手势的形状和名称，打开',
  list_tips2: '添加模式',
  list_tips3: '后可以添加未识别的手势。添加后记得按F5刷新设置页面。',
  list_warning: '确定删除此手势？',

  match_tips: '在没有特别设置的情况下，这里的手势会对全部程序生效。',
  match_warning: '确定删除此项吗？',
  modify_gesture: '修改手势',
  add_gesture: '添加手势',

  custom_tips: '这里对指定程序设置的手势会优先于通用手势响应。',
  custom_list: '程序列表：',
  custom_warning: '确定删除此分组？',
  custom_edit: '编辑分组名称',

  modify: '修改',
  clone: '克隆',
  delete: '删除',

  valid: '有效',
  sign: '手势',
  name: '名称',
  actions: '动作',
  operate: '操作',

  ok: '确定',

  edge_tips1: '鼠标滚轮在屏幕四个边滚动、按下时触发的功能。',
  upactions: '向上动作',
  downactions: '向下动作',
  pressactions: '按下动作',
  location: '位置',
  edge_tips2: '屏幕',
  edge_tips3: '边缘滚动功能',

  Left: '左',
  Top: '上',
  Right: '右',
  Bottom: '下',

  copy_tips1: '选中文字快速按下两次Ctrl+C后，会弹出快捷操作菜单。空白名称代表分割线，可通过拖拽调整菜单顺序。',
  modify_menu: '修改菜单项',
  add_menu: '添加菜单项',

  hotkey_tips1: '直接使用快捷键触发动作',
  keys: '快捷键',
  modify_keys: '修改快捷键',
  add_keys: '添加快捷键',

  ignoresingle_label: '忽略单字符',
  backgroundcolor_label: '背景颜色',
  textshadowcolor_label: '阴影颜色',
  textcolor_label: '文字颜色',
  x_label: 'X偏移',
  y_label: 'Y偏移',
  space_label: '间距',
  fontsize_label: '字体大小',
  fade_label: '消失时间',
  x_tips: '窗口相对屏幕左边偏移，如果是负数则相对右边',
  y_tips: '窗口相对屏幕顶部偏移，如果是负数则相对底部',

  LanguageSelect: '请选择语言',
  auto: '自动',
  'en-US': '英语',
  'zh-CN': '中文简体',
  'zh-TW': '中文繁体'
}
