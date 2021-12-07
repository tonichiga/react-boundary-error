import { Component } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundaryContext } from "./Context/Context";
import NotificationError from "./NotificationError";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

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

    alt.emit("View:Error", obj);
  }

  render() {
    const portal = document.getElementById("portal");

    return (
      <ErrorBoundaryContext.Provider value={this.triggerError}>
        {this.state.hasError
          ? createPortal(<NotificationError />, portal)
          : this.props.children}
      </ErrorBoundaryContext.Provider>
    );
  }
}

export default ErrorBoundary;
