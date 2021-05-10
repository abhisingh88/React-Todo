import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <div className='bg-dark text-light' style={footerstyle}>
            <footer className='text-center py-3'>
                Copyright &copy; MyTodoList.com
            </footer>
        </div>
    )
}
