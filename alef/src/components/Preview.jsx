import React from "react";
import { connect } from "react-redux";

function mapstatetoprops(state) {
    return {
        data: state.data
    }
}

class Preview extends React.Component {
    render() {
        return (
            <>
                <div className='previewMe'>
                    <p>Персональные данные</p>
                    <p style={{fontWeight: 'bold'}}>{this.props.data.name || '—'}, {this.props.data.age || '—'} лет</p>
                </div>
                <div className='previewChildren'>
                    <p>Дети</p>

                    {this.props.data.children.map((child, i) => (
                        <p className='child' key={i}>{child.nameChild}, {child.ageChild} лет</p>

                    ))}
                </div>
            </>
        )
    }
}

export default connect(mapstatetoprops)(Preview)
