import React from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader.react';



class AdminDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            admin :{
            "id":0,
            "name":'',
            "rating":4.5
        }
       
    }}

    adminData= {
        name:"Suresh",
        alt:"Admin Logo",
        logo:"/images/admin.jpg",
        subhead:"Admin Page"
    }

   
    handleInput = (event)=>{

        let val = event.target.value;
        let nam = event.target.name;

        this.setState( prevState => ({ admin : 
            {...prevState.admin, [nam]: val } }
         
    ));}

    handleSubmit = (event) =>{
        event.preventDefault();
       
         fetch("http://localhost:4040/drivers",{
             "method":'POST',
             "body":JSON.stringify(this.state.admin),
             headers:{
                 "Content-Type":"application/json"
             }
         }).then(res => console.log(res.json()))
    }
    render() {
        return (
            <div >

            <DashBoardHeader data={this.adminData} ></DashBoardHeader>
            <form onSubmit={this.handleSubmit} className="col-md-6">
            <div className="form-group">
                <label htmlFor="">Id</label>
                <input type="text" name="id"
                         onChange={this.handleInput} class="form-control"/>
                         </div>
                         <div className="form-group">
                <label htmlFor="">Driver Name</label>
                <input type="text" name="name"  onChange={this.handleInput} class="form-control"/>
                </div>
                <div className="form-group">
                <label htmlFor="">Rating</label>
                <input type="text" onChange={this.handleInput} class="form-control"/>
                </div>
                <div className="form-group">
                <input type="submit" value="Add" className='btn btn-danger'/>
                </div>
            </form>
            </div>
        );
    }
}

export default AdminDashBoard;