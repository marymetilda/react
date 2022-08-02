import {useRef, useState, useLayoutEffect} from 'react';

function useTest() {
    const labelRef = useRef();
    return labelRef;
}
function useTooltip(){
    const [showToolTip, setShowTooltip] = useState(false);

    const refObj = useRef();
    const labelRef = useRef();

    useLayoutEffect(() => {
        if (showToolTip) {
            console.log(labelRef.current);
            // console.log(refObj.current);

            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = refObj.current.getBoundingClientRect().width;

            refObj.current.style.left = `${-(width2 - width1) / 2}px`;
        }
    }, [showToolTip]);

    return [showToolTip, setShowTooltip, labelRef, refObj]
}


export {
    useTest,
    useTooltip
};