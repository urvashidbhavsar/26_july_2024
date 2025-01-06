function Innerfunction() {
    return (
        <div>Inner function call</div>
    )
}

function Outerfunction() {
    return (
        <div>
            <Innerfunction />
            <div>Outer function called</div>
        </div>
    )
}
export default Outerfunction