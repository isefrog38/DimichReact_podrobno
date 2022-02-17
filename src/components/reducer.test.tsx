import {ACCORDION, reducer, StateType} from "./reducer";


test("collapsed should be true",() => {
    // data
    const state: StateType = {
        collapsed: false
    };

    //action
    let newState = reducer(state, {type: ACCORDION});

    //expected
    expect(newState.collapsed).toBe(true);
})

test("collapsed should be false",() => {
    // data
    const state: StateType = {
        collapsed: true
    };

    //action
    let newState = reducer(state, {type: ACCORDION});

    //expected
    expect(newState.collapsed).toBe(false);
})

test("Error",() => {
    // data
    const state: StateType = {
        collapsed: true
    };

    //action
    expect(() => {reducer(state, {type: "FAKE"})}).toThrowError();

    //expected

})
