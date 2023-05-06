//create a component by adding button submit1 submit3 submit3 and rendering on user click it should alert which button was clicked


const AlertMe = () => {

    const Call1 = () => {
        alert("Submit 1 button is Clicked");
    }

    const Call2 = () => {
        alert("Submit 2 button is Clicked");
    }

    const Call3 = () => {
        alert("Submit 3 button is Clicked");
    }

    

  return (
    <>
        <button onClick={Call1} >Submit1</button>
        <button onClick={Call2} >Submit2</button>
        <button onClick={Call3} >Submit3</button>
    </>
  )
}

export default AlertMe