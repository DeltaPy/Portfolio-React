import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ProgressBar = (props) => {
    const { completed, text } = props;


    return (
        <VisibilitySensor>
            {({ isVisible }) => {
            const a = isVisible ? completed : 0;
            const containerStyles = {
                height: '40%',
                width: '100%',
                backgroundColor: "white",
                borderRadius: 3,
                margin: 15
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
                paddingTop: 9,
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
