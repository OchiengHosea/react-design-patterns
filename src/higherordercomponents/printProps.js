// Do not return jsx, but return other components which in turn return jsx
// like component factories
// sharing behavior between components
// adding extra functionality to existing components

export const printProps = Component => {
    return (props) => {
        console.log(props);
        return <Component {...props} />
    }
}