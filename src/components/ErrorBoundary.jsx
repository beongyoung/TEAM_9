import { Component } from "react";

// from monument gallery
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps) {
    if (this.props.errorKey !== prevProps.errorKey) {
      setTimeout(() => this.setState({ hasError: false }), 100);
    }
  }

  componentDidCatch(error) {
    //this.setState({ errorKey: this.props.errorKey });
    console.error(error);
    return;
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
