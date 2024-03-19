import "./dashUI.css"
import BMIWidget from "../../components/dashboard/bmi-widget/BMIWidget";
import SleepTracker from "../../components/dashboard/SleepWidget/SleepWidget";
import HeartRateWidget from "../../components/dashboard/HeartRateWidget/HeartRateWidget";

export default function DashUI() {

    return (
        <>
            <div className="container">
                {/* Divinding in 3 main rows */}
                {/* Main Row 1 */}
                <div className='row'>
                    {/* Divinding in 2 sub column of main rows */}
                    <div className="row1">
                        {/* Col 1 main row 1 */}
                        <div className="row1col1"> <BMIWidget /> </div>
                        <div className="row1col2">
                            <div className="row1col2division">
                                {/* Divinding in 2 sub row of R1C2 */}
                                <div className="row1col2row">R1C2R1</div>
                                <div className="row1col2row">
                                    {/* Divinding in 2 sub column of R1C2R2 */}
                                    <div className="stats">
                                        <div className="statsData"> <SleepTracker /> </div>
                                        <div className="statsData"><SleepTracker /></div>
                                        <div className="statsData"><SleepTracker /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Main Row 2 */}
                <div className='row'>
                    {/* Divinding in 3 sub column of main rows */}
                    <div className="row2">
                        <div className="row2col1"></div>
                        <div className="row2col2"></div>
                        <div className="row2col3"></div>
                    </div>
                </div>
                {/* Main Row 3 */}
                <div className='row'>
                    <div className="row3"></div>
                </div>
            </div>
        </>
    );
}