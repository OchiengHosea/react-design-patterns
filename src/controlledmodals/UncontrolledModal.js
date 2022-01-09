import styled from "styled-components";
import {useState} from "react";
const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, .5);
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <button onClick={() => setShouldShow(true)}>show</button>
            {shouldShow && (
                <ModalBackground>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>Hide modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}