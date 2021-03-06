import {
  ARCHIVED,
  CURRENT_SELECT_CATEGORIES_EVENT_LIST,
  IN_PROGRESS,
  SEARCH_BAR_EVENT_LIST,
  SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE,
  SELECT_CATEGORIES_EVENT_LIST_IS_OPEN,
  SET_EVENT_FOR_HOME,
  SET_EVENT_LIST_ARCHIVED,
  SET_EVENT_LIST_IN_PROGRESS,
  SET_SELECT_CATEGORIES_EVENT_LIST,
  SET_INFO_FOR_EVENTPAGE,
  SET_VALIDATE_FORM,
  EDIT_EVENT,
  EVENT_FORM_ONLINE,
  EVENT_FORM_PRESENT,
  LOAD_EVENT_LIST_IN_PROGRESS,
  LOAD_EVENT_LIST_ARCHIVED,
  ERASE_EVENT_INFO_PAGE_DATA,
} from "../actions/events.js";

export const initialState = {
  homeEventList: [],
  eventPageListInProgress: [],
  eventPageListArchived: [],
  inProgress: true,
  archived: false,
  currentSearchBar: "",
  currentSelectCategoriesEventList: "",
  selectCategoriesEventList: [],
  selectCategoriesEventListIsOpen: false,
  selectCategoriesEventListIsClose: true,
  eventInfoPage: [],
  loadingForEventPage: true,
  eventCurrentInfo: [],
  formSuccess: false,
  edition: true,
  currentLng: null,
  currentLat: null,
  formIsOnline: false,
  formIsPresent: true,
  cityForm: ""
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EVENT_FOR_HOME:
      return {
        ...state,
        homeEventList: action.value,
        eventInfoPage: {},
        loadingForEventPage: true,
      };
    case SET_EVENT_LIST_IN_PROGRESS:
      return {
        ...state,
        eventPageListInProgress: action.value,
      };
    case SET_EVENT_LIST_ARCHIVED:
      return {
        ...state,
        eventPageListArchived: action.value,
      };
    case IN_PROGRESS:
      return {
        ...state,
        archived: false,
        inProgress: true,
        eventInfoPage: {},
        loadingForEventPage: true,
      };
    case ARCHIVED:
      return {
        ...state,
        archived: true,
        inProgress: false,
        loadingForEventPage: true,
      };
    case SEARCH_BAR_EVENT_LIST:
      return {
        ...state,
        currentSearchBar: action.value,
      };
    case SET_SELECT_CATEGORIES_EVENT_LIST:
      return {
        ...state,
        selectCategoriesEventList: action.value,
      };
    case SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE:
      return {
        ...state,
        selectCategoriesEventListIsOpen: false,
        selectCategoriesEventListIsClose: true,
      };
    case SELECT_CATEGORIES_EVENT_LIST_IS_OPEN:
      return {
        ...state,
        selectCategoriesEventListIsClose: false,
        selectCategoriesEventListIsOpen: true,
      };
    case CURRENT_SELECT_CATEGORIES_EVENT_LIST:
      return {
        ...state,
        currentSelectCategoriesEventList: action.value,
      };
    case SET_INFO_FOR_EVENTPAGE:
      return {
        ...state,
        eventInfoPage: action.value,
        loadingForEventPage: false,
      };
    case SET_VALIDATE_FORM:
      return {
        ...state,
        formSuccess: true,
      };
    case EDIT_EVENT:
      return {
        ...state,
        edition: false,
        eventInfoPage: action.values,
        loadingForEventPage: true,
      };
    case EVENT_FORM_ONLINE:
      return {
        ...state,
        formIsOnline: true,
        formIsPresent: false,
      };
    case EVENT_FORM_PRESENT:
      return {
        ...state,
        formIsOnline: false,
        formIsPresent: true,
      };
    case LOAD_EVENT_LIST_IN_PROGRESS:
      return{
        ...state,
        eventInfoPage: {},
        loadingForEventPage: true,
      };
      case LOAD_EVENT_LIST_ARCHIVED:
        return{
          ...state,
          eventInfoPage: {},
          loadingForEventPage: true,
        };
      case ERASE_EVENT_INFO_PAGE_DATA:
        return{
          ...state,
          eventInfoPage: {},
          loadingForEventPage: true,
        }
    default:
      return state;
  }
};
export default reducer;
