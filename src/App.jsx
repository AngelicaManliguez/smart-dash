import { useState } from 'react'
import './App.css'
import Webcam from 'react-webcam';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ToggleSwitch = () => {
  const [toggles, setToggles] = useState({
    seatbelt: false,
    distraction: false,
    fatigue: false,
    facial: false,
    smoke: false,
    fire: false,
    passenger: false,
    weapons: false,
  });

  const handleToggle = (name) => {
    setToggles((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };



  return (
    <>
      <div className="smart-dash-container">
        <h1 className="smart-dash-title">SMART DASH</h1>
        <div className="smart-dash-layout">

          <div className="smart-dash-section-left">
            <div className={`toggle-item ${toggles.seatbelt ? "on" : ""}`}>
              <h5 className="toggle-label">Seatbelt Detection</h5>
              <div className={`toggle-switch ${toggles.seatbelt ? "on" : ""}`} onClick={() => handleToggle("seatbelt")}>
                <div className="slider"></div>
              </div>
            </div> 

            <div className={`toggle-item ${toggles.distraction ? "on" : ""}`}>
              <h5 className="toggle-label">Driver Distraction Detection</h5>
              <div className={`toggle-switch ${toggles.distraction ? "on" : ""}`} onClick={() => handleToggle("distraction")}>
                <div className="slider"></div>
              </div>
            </div>

            <div className={`toggle-item ${toggles.fatigue ? "on" : ""}`}>
              <h5 className="toggle-label">Drivers Fatigue or Sleep Detection</h5>
              <div className={`toggle-switch ${toggles.fatigue ? "on" : ""}`} onClick={() => handleToggle("fatigue")}>
                <div className="slider"></div>
              </div>
            </div>

            <div className={`toggle-item ${toggles.facial ? "on" : ""}`}>
              <h5 className="toggle-label">Facial Expression Analysis</h5>
              <div className={`toggle-switch ${toggles.facial ? "on" : ""}`} onClick={() => handleToggle("facial")}>
                <div className="slider"></div>
              </div>
            </div>
          </div>

          <div className="smart-dash-webcam">
            <Webcam className="webcam" />
          </div>

          <div className="smart-dash-section-right">
            <div className={`toggle-item ${toggles.smoke ? "on" : ""}`}>
              <div className={`toggle-switch ${toggles.smoke ? "on" : ""}`} onClick={() => handleToggle("smoke")}>
                <div className="slider"></div>
              </div>
              <h5 className="toggle-label">Smoke Detection</h5>
            </div>

            <div className={`toggle-item ${toggles.fire ? "on" : ""}`}>
              <div className={`toggle-switch ${toggles.fire ? "on" : ""}`} onClick={() => handleToggle("fire")}>
                <div className="slider"></div>
              </div>
              <h5 className="toggle-label">Fire Detection</h5>
            </div>

            <div className={`toggle-item ${toggles.passenger ? "on" : ""}`}>
              <div className={`toggle-switch ${toggles.passenger ? "on" : ""}`} onClick={() => handleToggle("passenger")}>
                <div className="slider"></div>
              </div>
              <h5 className="toggle-label">Passenger Detection</h5>
            </div>

            <div className={`toggle-item ${toggles.weapons ? "on" : ""}`}>
              <div className={`toggle-switch ${toggles.weapons ? "on" : ""}`} onClick={() => handleToggle("weapons")}>
                <div className="slider"></div>
              </div>
              <h5 className="toggle-label">Deadly Weapon Detection</h5>
            </div>
          </div>
        </div>

        <div className='models-grid'>
          <div className='models-container'>
            <h3 className='label'>SEATBELT DETECTION</h3>
            <p> The Seat Belt Detection employs computer vision-based object detection to monitor seat belt usage in real time. Cameras are strategically placed to analyze whether the driver and passengers have fastened their seat belts properly. If the system detects an unfastened seat belt, it triggers an audible alert to notify the driver, ensuring immediate corrective action. This feature is essential for promoting safety compliance in ride-hailing services and personal vehicles.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>DRIVER DISTRACTION DETECTION</h3>
            <p>Using computer vision object detection, this system identifies signs of driver distraction by analyzing head position, gaze direction, and hand movements. It can detect behaviors such as looking away from the road, using a mobile phone, or eating while driving. When distraction is detected, the system activates an audible alert to refocus the driver’s attention. This straightforward approach enhances road safety by reducing the risk of accidents caused by inattentiveness.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>DRIVERS FATIGUE OR SLEEP DETECTION</h3>
            <p>Using computer vision object detection, this system identifies signs of driver distraction by analyzing head position, gaze direction, and hand movements. It can detect behaviors such as looking away from the road, using a mobile phone, or eating while driving. When distraction is detected, the system activates an audible alert to refocus the driver’s attention. This straightforward approach enhances road safety by reducing the risk of accidents caused by inattentiveness.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>FACIAL EXPRESSION ANALYSIS</h3>
            <p>This system leverages computer vision to monitor the driver’s facial expressions and detect signs of stress, frustration, or emotional distraction. By analyzing microexpressions, the system identifies potential emotional impairments to safe driving. If concerning patterns are detected, an audible alert is issued to prompt the driver to stay focused and calm. This feature promotes emotional awareness and safer driving habits.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>SMOKE DETECTION</h3>
            <p>The In-Car Smoke Detection system uses computer vision object detection to identify smoke or vapor within the vehicle. It detects the visual characteristics of smoke from cigarettes, vaping, or potential fires. Upon detection, an audible alert is triggered, prompting the driver or passengers to take action. This system ensures compliance with no-smoking policies and helps maintain a safe in-car environment.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={87.2} label="87.2%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={83.9} label="83.9%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={78.7} label="78.7%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>FIRE DETECTION</h3>
            <p>This feature utilizes computer vision to detect visual indicators of fire, such as flames or smoke, inside the vehicle. When the system identifies a potential fire, it immediately sounds an audible alert, allowing occupants to respond quickly. By focusing on early detection, this system minimizes risks and ensures passenger safety in ride-hailing or personal vehicles.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>PASSENGER DETECTION</h3>
            <p>The Passenger Detection system uses computer vision to count the number of passengers inside the vehicle. Cameras analyze the seating area to ensure the number of occupants does not exceed the vehicle's capacity. If the passenger count is too high, the system activates an audible alert to inform the driver. This feature enhances safety and ensures compliance with ride-hailing regulations.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.4} label="98.4%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={95.5} label="95.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.5} label="95.5%"/>
              </div>
            </div>
          </div>

          <div className='models-container'>
            <h3 className='label'>DEADLY WEAPON DETECTION</h3>
            <p>The Deadly Weapons Exposed Recognition system uses computer vision to detect visible weapons such as guns, knives, or other dangerous objects inside the vehicle. If a weapon is identified, the system triggers an audible alert to warn the driver and passengers. This quick response mechanism enhances in-car security and ensures immediate awareness of potential threats.</p>
            <div className='metrics'>
              <div className="metric-item">
                <p>mAP</p>
                <ProgressBar variant="success" now={98.6} label="98.6%"/>
              </div>
              <div className="metric-item">
                <p>Precision</p>
                <ProgressBar variant="info" now={98.5} label="98.5%"/>
              </div>
              <div className="metric-item">
                <p>Recall</p>
                <ProgressBar variant="warning" now={95.1} label="95.1%"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className='credits'> &copy; 2025 Smart Dash. All rights reserved.</p>
          <p className='developer'>Developed by Noriel Achero and Angelica Mae Manliguez</p>
        </div>
      </footer>
    </>
  );
};
export default ToggleSwitch
