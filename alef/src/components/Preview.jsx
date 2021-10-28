import React from "react";

class Preview extends React.Component {
    render() {
        return (
            <>
                <div className='previewMe'>
                    <p>Персональные данные</p>
                    <p>Имя, возраст</p>
                </div>
                <div className='previewChildren'>
                    <p>Дети</p>
                    <p>Возраст</p>
                </div>
            </>
        )
    }
}

export default Preview
