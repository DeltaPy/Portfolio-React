import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ProgressBar = (props) => {
    const { completed, text } = props;
    var isSeen = false;
    var a = 0;
    return (
        <VisibilitySensor>
            {({ isVisible }) => {
            if(isSeen === false && isVisible === true) {
                a = completed;
                isSeen = true;
            }
            const containerStyles = {
                height: '100%',
                backgroundColor: "white",
                borderRadius: 3,
            }
            const labelStyles = {
                
                color: 'white',
                fontWeight: 'bold'
            }
            const fillerStyles = {
                height: '100%',
                backgroundColor: '#FF4532',
                borderRadius: 'inherit',
                textAlign: 'center',
                padding: 6,
                transition: 'width 2s ease-in-out',
                width: `${a}%`,
            }
            return(
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{`${text}`}</span>
                    </div>
                </div>
                );
            }}
        </VisibilitySensor>
    )
}
export default ProgressBar