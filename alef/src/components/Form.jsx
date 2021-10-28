import React from "react";
import { connect } from "react-redux";

function mapstatetoprops(state) {
    return {
        data: state.data
    }
}

function mapdispatchtoprops (dispatch){

}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                age: '',
                children: []
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addChild = this.addChild.bind(this)
    }


    addChild() {
        let data = this.state.data
        this.state.data.children = [...this.state.data.children, { id: Date.now(), nameChild: '', ageChild: '' }]
        this.setState({ data })

    }

    delButton(i) {
        console.log(i)
        let data = this.state.data
        data.children.splice(i, 1)
        this.setState({ data })
    }

    handleInput(event) {
        let data = this.state.data
        if (event.target.name === 'nameChild' || event.target.name === 'ageChild') {
            data.children.forEach((child, i) => {
                if (i == event.target.id) {
                    child[event.target.name] = event.target.value
                }
            })
        } else {
            data[event.target.name] = event.target.value
        }
        this.setState({ data })
    }

    saveButton() {
        let data = this.state.data

    }

    render() {
        console.log(this.props.data)
        return (
            <>
                <div className='me'>
                    <h2>Персональные данные</h2>
                    <p>Имя</p>
                    <input name='name' onInput={this.handleInput} />
                    <p>Возраст</p>
                    <input name='age' onInput={this.handleInput} />
                </div>
                <div className='children'>
                    <h2>Дети (макс. 5)</h2>
                    <button disabled={this.state.data.children.length === 5} id='addButton' onClick={this.addChild}>+ Добавить ребенка</button>
                    {this.state.data.children.map((child, i) =>
                        <p>
                            Имя
                            <input value={child.nameChild} name='nameChild' id={i} onInput={this.handleInput} />
                            Возраст
                            <input value={child.ageChild} name='ageChild' id={i} onInput={this.handleInput} />
                            <button onClick={() => this.delButton(i)}>Удалить</button>
                        </p>
                    )}
                    <button id='saveButton' onClick={() => this.saveButton()}>Сохранить</button>
                </div>

            </>
        )
    }
}

export default connect(mapstatetoprops)(Form)
