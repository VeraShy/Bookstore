export const loadState = () => {
    try {
        // const serializedState = localStorage.getItem('state');
        // if(serializedState === null) {
        //     return {}
        // };

        // return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    };
};

export const saveState = (state) => {
    try {
        // const serializedState = JSON.stringify(state);
        // localStorage.setItem('state', serializedState);
    } catch (error) {
        throw new Error("Can't save changes in Local Storage");
    };
};