import { LoginSuccessType, LoginFailedType, RegisterSuccessType, RegisterFailedType, LoginPendingType, RegisterPendingType, RegisterResetType, FindPasswordSuccessType, FindPasswordPendingType, FindPasswordFailedType } from '../action/user';
import { UserInfoState, userInfoDefaultValue } from '../state/user';
import { RequestStatus } from '../common/request_status';

export function userState(state: UserInfoState = userInfoDefaultValue, action: any): UserInfoState {
    switch (action.type) {
        case LoginSuccessType: {
            return { ...state, userInfo: action.value.result.user, loginStatus: { status: RequestStatus.success, message: action.value.message } };
        }
        case LoginFailedType: {
            return { ...state, loginStatus: { status: RequestStatus.failed, message: action.value } };
        }
        case LoginPendingType: {
            return { ...state, loginStatus: { status: RequestStatus.pending } };
        }
        case RegisterSuccessType: {
            return { ...state, registerStatus: { status: RequestStatus.success, message: 'register success, please login' } };
        }
        case RegisterFailedType: {
            return { ...state, registerStatus: { status: RequestStatus.failed, message: action.value } };
        }
        case RegisterPendingType: {
            return { ...state, registerStatus: { status: RequestStatus.pending } };
        }
        case RegisterResetType: {
            return { ...state, registerStatus: { status: RequestStatus.none, message: '' } };
        }
        case FindPasswordSuccessType: {
            return { ...state, findPasswordStatus: { status: RequestStatus.success, message: 'send a mail include a new password to you, please check' } };
        }
        case FindPasswordFailedType: {
            return { ...state, findPasswordStatus: { status: RequestStatus.failed, message: action.value } };
        }
        case FindPasswordPendingType: {
            return { ...state, findPasswordStatus: { status: RequestStatus.pending } };
        }
        default:
            return state;
    }
}