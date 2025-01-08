function Internal() {
    // for internal css create an object 
    let mycss = {
        color: "blue",
        border: "2px solid blue",
        padding: "20px"
    }
    return (
        <div>
            <div style={mycss}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, veniam optio? Sapiente molestiae quae, sint voluptatem, nulla quas optio quidem doloribus aliquam similique vitae, placeat laboriosam. Assumenda in sequi repellat?
            </div>
        </div>
    )
}
export default Internal