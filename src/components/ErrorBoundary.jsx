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

  componentDidCatch(error) {
    this.setState({ errorKey: this.props.errorKey });
    console.error(error);
    return;
  }

  render() {
    if (
      this.state.hasError &&
      (this.state.errorKey === undefined ||
        this.state.errorKey === this.props.errorKey)
    ) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
