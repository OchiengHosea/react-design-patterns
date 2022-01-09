export default function UserInfo({user}) {
    const {name, age, hairColor} = user || {};
    return(
        <>
            <p>User: {name}</p>
            <p>Age: {age}</p>
            <p>HairColor: {hairColor}</p>
        </>
    )
}