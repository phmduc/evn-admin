import axios from 'axios';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';


const {commandsReadBegin, commandsReadErr, commandsReadSuccess,  withdrawsReadBegin, withdrawsReadErr, withdrawsReadSuccess, approveBegin, approveErr, approveSuccess, withdrawCommandReadBegin, withdrawCommandReadErr, withdrawCommandReadSuccess } = actions;

const commandGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(commandsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/orders/all');
      dispatch(commandsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(commandsReadErr(err));
    }
  };
};
const withdrawGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(withdrawsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/cash-requests/all');
      dispatch(withdrawsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(withdrawsReadErr(err));
    }
  };
};

const withdrawCommand = (data) => {
  return async (dispatch) => {
    try {
      dispatch(withdrawCommandReadBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/cash-requests/create', data);
      dispatch(withdrawCommandReadSuccess(initialState.data));
      toast.success('Tạo lệnh rút thành công')
    } catch (err) {
      dispatch(approveErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

const approveGetData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(approveBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/cash-requests/accept', data);
      dispatch(approveSuccess(initialState.data));
      toast.success('Phê duyệt thành công')
    } catch (err) {
      dispatch(approveErr(err.response.data.message));
      toast.error(err.response.data.message)

    }
  };
};



export { commandGetData, withdrawGetData, approveGetData, withdrawCommand };
