import React, {Component} from 'react';
import '../Style/style.scss';

class App extends Component {
    render() {
        return (
            <div>
                <div className={`corp_wrap`}>
                    <div className={`corp_img`}>

                    </div>
                    <div className={`corp_title`}>
                        Corporate Bylaws
                    </div>
                    <div className="corp_desc">
                        An internal document that details the operating rules for the corporation and are typically
                        adopted
                        at the organizational meeting of the board of directors.
                    </div>
                    <div className="cta">
                        View document
                    </div>
                    <div className={`option_wrap`}></div>
                    <div className="corp_option_sec">
                        <div className={`options`}>
                            <span className={`op_icon`}/>
                            <span className={`op_name`}>Download</span>
                        </div>
                        <div className={`options`}>
                            <span className={`op_icon`}/>
                            <span className={`op_name`}>Print</span>
                        </div>
                        <div className={`options`}>
                            <span className={`op_icon`}/>
                            <span className={`op_name delete`}>Delete</span>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;