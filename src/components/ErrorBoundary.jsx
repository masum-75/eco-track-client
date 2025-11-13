import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(){ return { hasError: true }; }
  componentDidCatch(error, info){ console.error('ErrorBoundary', error, info); }
  render(){
    if (this.state.hasError) return <div className="p-6 text-center">Something went wrong. Please refresh or try again later.</div>;
    return this.props.children;
  }
}