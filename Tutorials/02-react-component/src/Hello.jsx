function Hello() {

    let myName = "Deepak";
    let number = 456;

    let fullName = () => {
        return "Deepak Prajapati";
    }

    return <div>
        <h3>Hello, this is the future speaking. I am your master {myName} {fullName()}</h3>
        <p>Message no. {number}</p>
    </div>
}

export default Hello