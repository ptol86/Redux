import { createSelector } from "reselect";

export const optionsListSelector = state => {
    return state.options.optionsList;
}

export const selectedIdsSelector = state => {
    return state.options.selected;
}

export const selectedOptionsListSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => selectedIds.includes(option.id))

    }
);
export const avaliableOptionsListSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => !selectedIds.includes(option.id))

    }
);

// export const selectedOptionsListSelector = state => {
//     const allOptionsList = optionsListSelector(state);
//     const selectedIds = selectedIdsSelector(state);

//     return allOptionsList.filter(option => selectedIds.includes(option.id))
// }

// export const avaliableOptionsListSelector = state => {
//     const allOptionsList = optionsListSelector(state);
//     const selectedIds = selectedIdsSelector(state);

//     return allOptionsList.filter(option => !selectedIds.includes(option.id))
// }

