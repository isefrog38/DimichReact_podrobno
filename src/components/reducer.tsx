export const ACCORDION = "ACCORDION";
type ActionType = { type: string }
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case ACCORDION :
            return {
                ...state, collapsed:
                    !state.collapsed};
        default:
            /*return state*/
            throw new Error("Bad action type")
    }
}
