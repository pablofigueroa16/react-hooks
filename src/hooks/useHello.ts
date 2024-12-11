import * as React from 'react';

export const useHello = () => {
    const [state, setState] = React.useState("");

    return [
        state,
        setState
    ]
};