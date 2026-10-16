import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component rendering failed:", error, errorInfo);
  }

  handleRetry = () => {
    this.state.hasError = false;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h2>Something went wrong.</h2>
          <p>Please try again later.</p>
          <button onClick={this.handleRetry}>retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
