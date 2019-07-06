import {
  STATUS_AVAILABLE,
  STATUS_CREATING,
  STATUS_DEPLOYMENT_ERROR,
  STATUS_MODEL_ERROR,
  STATUS_PACKAGING,
  STATUS_RUNNING,
} from 'utils/Enums';

export const DEFAULT_INTERVAL_MS = 60000;
export const DEFAULT_CHART_UPDATE_INTERVAL_MS = 5000;
export const NOTIFICATION_TIMEOUT = 10000;
export const PLACEHOLDER_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

/**
 * Localizer function
 * @param {String} key - Key to be localized
 * @return {*}
 */
export const loc = (key) => {
  if (window && window.EUI && window.EUI.Localizer) {
    return window.EUI.Localizer.loc[key] || key;
  }
  return key;
};

export const SORTING_OPTIONS = [
  { name: loc('NEWEST_TO_OLDEST'), by: 'date', order: 'desc' },
  { name: loc('OLDEST_TO_NEWEST'), by: 'date', order: 'asc' },
  { name: loc('ALPHABETICAL_A_Z'), by: 'name', order: 'desc' },
  { name: loc('ALPHABETICAL_Z_A'), by: 'name', order: 'asc' },
];
export const SORTING_OPTIONS_INFO_PAGE = [
  { name: loc('ALPHABETICAL_A_Z'), by: 'name', order: 'desc' },
  { name: loc('ALPHABETICAL_Z_A'), by: 'name', order: 'asc' },
];

export const DEFAULT_FILTERS = [
  { name: STATUS_CREATING, checked: false },
  { name: STATUS_PACKAGING, checked: false },
  { name: STATUS_RUNNING, checked: false },
  { name: STATUS_AVAILABLE, checked: false },
  { name: STATUS_MODEL_ERROR, checked: false },
  { name: STATUS_DEPLOYMENT_ERROR, checked: false },
];

export const FLOW_FILTERS = [
  { name: STATUS_RUNNING, checked: false },
  { name: STATUS_AVAILABLE, checked: false },
];

export const DRAG_DROP_EVENTS = [
  'drag',
  'dragstart',
  'dragend',
  'dragover',
  'dragenter',
  'dragleave',
  'drop',
];

export const APPLICATIONS = [
  { name: loc('DASHBOARD'), route: 'dashboard' },
  { name: loc('MODEL_LIST'), route: 'model-list' },
  { name: loc('FLOW_CATALOGUE'), route: 'flow-catalogue' },
];

export const MODEL_DETAIL_MENUS = [
  {
    name: 'MODEL_INFORMATION',
    title: loc('MODEL_INFORMATION'),
  },
  {
    name: 'MONITORING_INFORMATION',
    title: loc('MONITORING_INFORMATION'),
  },
  {
    name: 'REWARD',
    title: loc('REWARD'),
  },
];

export const MONITORING_CHART_LEGEND = [
  { name: loc('MIN'), prop: 'min', postfix: 's' },
  { name: loc('MAX'), prop: 'max', postfix: 's' },
  { name: loc('AVG'), prop: 'avg', postfix: 's' },
  { name: loc('CURRENT'), prop: 'current', postfix: 's' },
];

export const MODEL_INFO_TABLE = [
  { name: loc('DATE_OF_ONBOARDING'), prop: 'created' },
  { name: loc('MODEL_NAME'), prop: 'name' },
  { name: loc('MODEL_VERSION'), prop: 'version' },
  { name: loc('MODEL_DESCRIPTION'), prop: 'description' },
  { name: loc('NUMBER_OF_INSTANCES'), prop: 'replicas' },
];

export const DEFAULT_ERROR_NOTIFICATION = {
  title: loc('ERROR_OCCURRED'),
  description: loc('CHECK_ERROR'),
  timeout: 3000,
};

// Interval in minutes
export const MONITORING_INTERVALS = [
  { name: loc('LAST_5_MINUTES'), value: 5 },
  { name: loc('LAST_HOUR'), value: 60 },
  { name: loc('LAST_DAY'), value: 1440 },
  { name: loc('LAST_WEEK'), value: 10080 },
  { name: loc('LAST_MONTH'), value: 43200 },
  { name: loc('LAST_YEAR'), value: 525600 },
];

export const DEFAULT_CHART_TITLES = [
  { name: loc('LATENCY'), unit: 'ms' },
  { name: loc('REQUEST_RATE'), unit: 'req/s' },
];
