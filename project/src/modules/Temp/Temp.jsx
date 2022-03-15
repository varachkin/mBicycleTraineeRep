import React, {Component} from 'react';
import "./Temp.css"

class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.Ref = React.createRef();
    }

    handlerAdd = () => {
        let text = this.Ref.current.value;
        if (text === '') {
            return;
        }
        let comments = this.state.comments;
        comments.push(text);

        this.setState({comments: comments});
        this.Ref.current.value = ''
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.Ref}/>
                <select name="" id="" ref={this.Ref}>
                    <option value="xxx">xxx</option>
                    <option value="zzz">zzz</option>
                    <option selected value="aaa">aaa</option>
                </select>
                <div>
                    <button onClick={this.handlerAdd}>Add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Temp;