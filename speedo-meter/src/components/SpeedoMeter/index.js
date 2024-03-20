import './index.css'
import {Component} from 'react'

class SpeedoMeter extends Component{
    state={speed:0}

    onClickApplyBrakeButton = () => {
        const {speed} = this.state
        
        if (speed >0 ){
            this.setState(prevState =>({speed :prevState.speed-10}))
        }

    }
    onClickAcceleratorButton = () => {
        const {speed} = this.state
        if (speed < 200){
            this.setState(prevState => ({speed:prevState.speed+10}))
        }
    }
    render(){
        const {speed} = this.state
        return(
            <div className="bg-container">
                <div className="speedometer-container">
                    <h1 className="heading">SPEEDOMETER</h1>
                    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="image" alt="speedometer"/>
                    <h1 className="para">Speed is {speed}mph</h1>
                    <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
                    <div className="buttons-container">
                        <button className="button accelerator-button" type="button" onClick={this.onClickAcceleratorButton}>Accelerate</button>
                        <button className="button brake-button" type="button" onClick={this.onClickApplyBrakeButton}>Apply Brake</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SpeedoMeter;