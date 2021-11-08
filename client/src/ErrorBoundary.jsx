import React, { Component } from 'react';


class ErrorBoundary extends Component {
    state = { error: false};

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render () {
        if (this.state.error) {
            return (
                <div className='error'>
                    <h1>An error has ocurred in a child component!</h1>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;