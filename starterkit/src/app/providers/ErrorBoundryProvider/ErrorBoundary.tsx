import { Spin } from "antd";
import React, { ErrorInfo, ReactNode, Suspense } from "react";

const errorData = ""; // для добавления страницы удалите данную переменную и укажите вашу страницу

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // сюда вы можете добавить отправку ошибки во внешний bi
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Suspense fallback={<Spin />}>{errorData}</Suspense>;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }
}
