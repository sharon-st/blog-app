import "./App.css"
import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            Title: props.Title,
            data: props.Description,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.postData = this.postData.bind(this)

    }
    postData() {
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)


            if (this.state.Title === undefined && this.state.data === undefined && this.props.edit === true) {
                alert("No changes made")
            }

        
        else if (this.state.Title === undefined && this.state.data === undefined) {
          
            console.log('form is invalid: do not submit')
            alert('Cannot Submit! Empty Fields')
        }

        else {

            console.log('form is valid: submit')
            this.postData()
            alert("Submitted Successfully")
            e.target.reset();
        }

    }


    changeHandler(event) {
        let { name, value } = event.target
        this.setState({ [name]: value })
    }


    onEditorChange(evt) {
        this.setState({
            data: evt.editor.getData()
        });
    }

    handleChange(changeEvent) {

        this.setState({
            data: changeEvent.target.value
        });
    }




    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <br /><br />

                    <input
                        type="text"
                        name="Title"
                        defaultValue={this.props.Title}
                        placeholder="Title"
                        onClick={this.changeHandler}
                        onChange={this.changeHandler}
                    />
                    <br /><br />



                    <CKEditor
                        data={this.props.data}
                        defaultValue={this.props.Description}
                        onChange={this.onEditorChange}
                        onClick={this.onEditorChange}
                        placeholder="Body"

                    />

                    {/* <textarea defaultValue={this.props.data} onClick={this.handleChange} /> */}

                    {/* <EditorPreview data={this.state.data} /> */}
                    <br /><br />
                    <button type="submit" >Submit</button>
                </form>

                {/* <br />
                 <h2>{this.state.Title}</h2>
                 <h2>{this.state.Description}</h2> */}

                {/* <h2>Rendered content</h2> */}
                {/* <h2>{this.state.Title}</h2>
                <div dangerouslySetInnerHTML={{ __html: this.state.data }}></div> */}
            </div>
        );
    }
}



export default CreatePost;