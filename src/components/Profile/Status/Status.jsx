import React, {useEffect, useState} from "react";

//class component!!!
// class Status extends React.Component {
//
//     state = {
//         isChange: false,
//         status: this.props.status
//     };
//
//     onStatusToChange = () => {
//         this.setState({
//             isChange: !this.state.isChange,
//         });
//
//
//     };
//     onStatusChanged = () => {
//         this.setState({
//             isChange: !this.state.isChange,
//         });
//
//         this.props.updateStatus(this.state.status)
//     };
//
//     onChangeStatus = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     };
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//         console.log('componentDidUpdate');
//     }
//
//     render() {
//
//         console.log('render');
//         return (
//             <div>
//                 {
//                     !this.state.isChange ?
//
//                         <div onDoubleClick={this.onStatusToChange}>{this.props.status||'no status'}</div> :
//
//                         <input
//                             onChange={this.onChangeStatus}
//                             autoFocus={true}
//                             onBlur={this.onStatusChanged}
//                             type="text"
//                             value={this.state.status}
//                         />
//                 }
//             </div>
//
//         )
//     }
// }


const Status = props => {

    let [isChange, setIsChange] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const onStatusToChange = () => {
        setIsChange(true);
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    };

    const onStatusChanged = () => {
        setIsChange(false);

        props.updateStatus(status)
    };

    return (
        <div>
            {
                !isChange ?

                    <div onDoubleClick={onStatusToChange}>{props.status || 'no status'}</div> :

                    <input
                        onChange={onChangeStatus}
                        autoFocus={true}
                        onBlur={onStatusChanged}
                        type="text"
                        value={status}
                    />
            }
        </div>
    )
};
export default Status
