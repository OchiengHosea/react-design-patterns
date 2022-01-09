import {useState} from "react";
import {UncontrolledOnboardingFlow} from "./UncontrolledOnboardingFlow";
import {ControlledOnboardingFlow} from "./ControlledOnboardingFlow";
const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({name:'Chloe Val'})}>Next</button>
    </>
);

const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({address:'Monrovia Street'})}>Next</button>
    </>
);

const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <button onClick={() => goToNext({card:'4345'})}>Next</button>
    </>
);

export const Register = () => {
    const [onboardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        const updatedData = {
            ...onboardingData,
            ...stepData
        }

        setOnBoardingData(updatedData);
        setCurrentIndex(currentIndex+1);

        console.log(updatedData);
    }

    return (
        // for controlled
        // <UncontrolledOnboardingFlow onFinish={data => console.log(data)}>
        //     <StepOne />
        //     <StepTwo />
        //     <StepThree />
        // </UncontrolledOnboardingFlow>

        <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
            <StepOne />
            <StepTwo />
            <StepThree />
        </ControlledOnboardingFlow>
    );
}