import React from 'react';
import {Layout, Divider, Card, Icon, Spin, Alert, Row, Col, Button, Tag, message, Table, Collapse, Steps, Modal, Upload} from 'antd';


class DefaultCall extends React.Component {

  constructor(props) {
    super(props);

    this.title = 'Call API';
    this.state = {
        fileUploaded: false,
        file: undefined,
        fileReader: undefined,
    };
  }

  isComplete() {
    if (this.props.jobResult === undefined)
        return false;
    else
    {
        console.log(this.props.jobResult);
        return true;
    }
  }
  
  processFile(file) {
    let reader = new FileReader();

    reader.onload = (e => {
      this.setState({
        fileUploaded: true,
        file: file,
        fileReader: reader,
      });
    });

    reader.readAsDataURL(file);
  }

  render() {
    if (this.isComplete())
        return(<div><p>Complete</p>
            <div>
              <Divider orientation="left">Job Results</Divider>
              <Table pagination={false} columns={this.props.jobKeys} dataSource={this.props.jobResult} />
            </div>
        </div>);
    else
    {
      return(
        <React.Fragment>
        <div><p>
            Now that the Job contract has been funded you are able to call the API on the Agent. Select a file to be analyzed by dragging and dropping the file onto the upload
            area or by clicking the upload area to initiate the file-chooser dialog. Once you have chosen a file to analyze, click the "Call Agent API" button to initate the API call. This
            will prompt one further interaction with MetaMask to sign your API request before submitting the request to the Agent. This interaction does not initiate a transaction
            or transfer any additional funds.
        </p>

        {
            !this.state.fileUploaded &&
            <React.Fragment>
                <br/>
                <br/>
                <Upload.Dragger name="file" accept=".jpg,.jpeg,.png" beforeUpload={(file)=>{ this.processFile(file); return false; }} >
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click for file-chooser dialog or drag a file to this area to be analyzed.</p>
                </Upload.Dragger>
            </React.Fragment>
        }
        <table><tbody>
            <tr>
                <td><b>File:</b></td>
                <td>{this.state.file ? `${this.state.file.name}` : '(not uploaded)'}</td>
        </tr>
        </tbody>
        </table>

        <br/>
        <br/>
        <Button type="primary" onClick={() => {this.props.showModalCallback(this.props.callModal); this.props.callApiCallback(this.state)}} disabled={!this.state.fileUploaded} >Call Agent API</Button>
        </div>
        </React.Fragment>
        )
    }
  }
}

export default DefaultCall;