import * as types from '../util/ActionTypes'
import { Navigator_ } from "../components/NavigationPage"
import { NavigationActions } from "react-navigation"
import * as constant from '../util/Constant'

const Original_Action = Navigator_.router.getActionForPathAndParams(constant.route_pathName.addGoldBugPage1);
const Original_State = Navigator_.router.getStateForAction(Original_Action);//用action和旧状态返回新状态，没有旧状态

const init_state = {
       index:0,

       routes:[
            {key:"0",routeName:"AddGoldBugPage1",params:{}},
       ]
}

console.log("Original_State");
console.log(Original_State);

export default function NavigatorReducer(state = Original_State, action = {}) {
    switch (action.type) {
        case types.PUSH: {
            //1.创建跳转的action
            let pushAction = NavigationActions.navigate({
                routeName: action.payload.key,
                params: action.payload.params
            });

            //2.获取新的状态
            let newState = Navigator_.router.getStateForAction(pushAction, state);

            return newState;
        }
        case types.POP: {
            //弹出，注意返回
            let backAction = NavigationActions.back();
            let newState = Navigator_.router.getStateForAction(backAction, state);

            return newState;
        }
        case types.RESET: {
            //重置，到最开始的页面去
            let resetAction = NavigationActions.reset({
                actions: [Original_Action],
                index: 0
            });

            return newState;
        }
        case types.GOBACK: {
            for (let i = state.index; i >= 0; i--) {
                let routeName = state.routes[i].routeName;
                if (routeName == action.payload.routeName) {
                    let key = state.routes[i].key;
                    let backToAction = NavigationActions.back(key);
                    let newState = Navigator_.router.getStateForAction(backToAction, state);
                    return newState;
                }
            }
            return state;
        }
        default: {
            return state;
        }
    }


} 