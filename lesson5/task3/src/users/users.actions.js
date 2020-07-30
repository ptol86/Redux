
export const FILTER_TEXT = "INPUT/FILTER_TEXT";


export const inputFilterText = (text) => {
    return {
        type: FILTER_TEXT,
        payload: {
            text,
        }
        
    }
}




