import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

      // When a child component throws an error
    static getDerivedStateFromError() {
        return { hasError: true };
    }

  // Log the error for debugging
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBBoundary caught an error", error, errorInfo);
    }

    //optional: retry button
    handleRetry = () => {
        this.setState({ hasError: false });
    }

    render() {
        if(this.state.hasError) {
            return (
                <div style ={{ padding: '20px', textAlign: 'center' }}>
                    <h2>Something went wrong....</h2>
                    <button onClick={this.handleRetry}> Try Again</button>
                </div>
            );

        }
        return this.props.children; // Render child components if no error
        }
    }

export default ErrorBoundary;