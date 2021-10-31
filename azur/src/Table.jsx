import {Component} from 'react'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            headers: [{
                name: 'ID',
                value: 'id'
            }, {
                name: 'Имя',
                value: 'firstName'
            }, {
                name: 'Фамилия',
                value: 'lastName'
            }, {
                name: 'Почта',
                value: 'email'
            }, {
                name: 'Телефон',
                value: 'phone'
            },]
        }
    }

    getData(type) {
        this.setState({ loading: true })
        let link = ''
        type === 'big' ?
            link = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
            : link = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        data: result
                    });
                }
            ).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <button onClick={() => this.getData('small')}>Маленькая таблица</button>
                <button onClick={() => this.getData('big')}>Большая таблица</button>
                {this.state.loading ?
                    <p>Загрузка</p>
                    : <table>
                        <thead>
                            <tr>
                                {this.state.headers.map((head, i) => (
                                    <th key={i}>{head.name}</th>
                                ))}

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((el, i) => (
                                <tr key={i}>
                                    {this.state.headers.map((head, index) => (
                                        <td key={index}>{el[head.value]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </>
        )
    }
}

export default Table