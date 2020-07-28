import React, {Component} from 'react'
import { Col, Row , Modal, Button} from 'react-bootstrap'

export default class Projects extends Component {
    state = {
        show: false
    }
    openModal = () => {
        this.setState({ show: true })
    }
    handleClose = () =>{
        this.setState({ show: false })
    }
    render() {
        return(
            <>
            <div className='container'>
                <h5 style={{color: '#F9AF65'}}>Projects</h5>
                <h3>Check Out Some Works.</h3>
                <Row className='justify-content-ld-center no-gutters mt-5'>
                    <Col lg={4}><img style={{padding: '30px'}} className='img-proj' src='https://www.crocosoft.ru/images/TechIcons/postgre-sql.png'/></Col>
                    {/* <a className="overlay">	                  	           
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
		     					       <h3 className="folio-title">Responsive template</h3>	     					    
		     					    	 <span className="folio-types">Development Technology: HTML5, CSS3, JS, jQuery, Gulp, Sass</span>
		     					   </div>	                      	
	                     </div>                    
	                  </a> */}
                    <Col lg={8}><img className='img-proj' src='https://miro.medium.com/max/3000/1*3f7gyFnHcBqrwXUe7bDILw.jpeg'/></Col>
                    
                   
                </Row>
                <Row className='no-gutters'>
                <Col lg={4}><img className='img-proj' src='https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'/></Col>
                <Col lg={4}><img className='img-proj'  onClick={this.openModal}  src='https://javascript30.com/images/favion-JS3.png'/></Col>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>30 days of JS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><a style={{ color: '#fff', textDecoration: 'none'}} href='https://oksanacoder.github.io/piano-keybord.github.io/'>Click here for details</a></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                  
                    </Modal.Footer>
                </Modal>
                <Col lg={4}><img className='img-proj' src='https://miro.medium.com/max/1200/1*ay9nx1XdZ3AOzx5Ev8xJEg.png'/></Col>

                    </Row>
            </div>
            </>

        )
    }
}