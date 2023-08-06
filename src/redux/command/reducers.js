import actions from './actions';

const { COMMANDS_READ_BEGIN, COMMANDS_READ_SUCCESS, COMMANDS_READ_ERR, WITHDRAWCOMMAND_READ_BEGIN, WITHDRAWCOMMAND_READ_ERR, WITHDRAWCOMMAND_READ_SUCCESS, WITHDRAW_READ_BEGIN, WITHDRAW_READ_ERR, WITHDRAW_READ_SUCCESS, APPROVE_BEGIN, APPROVE_ERR, APPROVE_SUCCESS } = actions;

const initialState = {
  commands: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const commandsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COMMANDS_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COMMANDS_READ_SUCCESS:
      return {
        ...state,
        commands: data,
        loading: false,
      };
    case COMMANDS_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const initialStateWith = {
  withs: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const withReducer = (state = initialStateWith, action) => {
  const { type, data, err } = action;
  switch (type) {
    case WITHDRAW_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case WITHDRAW_READ_SUCCESS:
      return {
        ...state,
        withs: data,
        loading: false,
      };
    case WITHDRAW_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

      case WITHDRAWCOMMAND_READ_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case WITHDRAWCOMMAND_READ_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case WITHDRAWCOMMAND_READ_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };

      case APPROVE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case APPROVE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};


export {  commandsReducer, withReducer  };
