import "./CallToAction.css"

const CallToAction = () => {
  return (
    <div className="cta">
      <h1>Food Delivery helps you
        bring food to your front door
      </h1>
      <div className="btn">
        <button style={{ backgroundColor: "#283646" }}>Download our App</button>
        <button className="btn_2">Browse food</button>
      </div>
    </div>
  )
}

export default CallToAction