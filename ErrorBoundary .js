import { Component, Children, cloneElement, PureComponent } from "react";
import { ErrorBoundaryContext } from "./Context/Context";
import tobi from "../assets/images/tobi.gif";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    let report = {};

    this.state = {
      hasError: false,
      errorReport: {},
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  triggerError = (data, window, name) => {
    this.report = {
      entryData: data,
      name: name,
      pathname: window.location.pathname,
      screenResolution: {
        width: window.outerWidth,
        height: window.outerHeight,
      },
    };
  };

  componentDidCatch(error) {
    const obj = {
      report: this.report,
      message: error.message,
    };

    alt.emit("View:Error", JSON.stringify(obj));
  }

  render() {
    return (
      <ErrorBoundaryContext.Provider value={this.triggerError}>
        {this.state.hasError ? (
          <img src={tobi} alt="" width="150" height="150" />
        ) : (
          this.props.children
        )}
      </ErrorBoundaryContext.Provider>
    );
  }
}

export default ErrorBoundary;
