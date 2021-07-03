import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => { console.log('Console is clicked!!!')}
    return (
        <header className='header'>
             <h1>Tracker Task</h1>
             <Button color='green' text='Add' onClick={onClick}/>

        </header>
    )
}

Header.defaultProps = {titile: 'Task Tracker Default'}

export default Header
