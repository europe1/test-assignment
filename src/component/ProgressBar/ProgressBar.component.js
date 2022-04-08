import React from 'react';
import './index.css';

/** @namespace Component/ProgressBar/Component */
class ProgressBar extends React.PureComponent {
  renderBar(active, animate) {
    return (
      <div className={'progress-bar-back' + (active ? ' active' : '')}>
        <div className={'progress-bar-color' + (animate ? ' animate' : '')}></div>
      </div>
    );
  }

  isStepComplete(stepIndex) {
    const currentStepIndex = this.props.steps.findIndex(step => step === this.props.currentStep);
    return currentStepIndex > stepIndex;
  }

  isCurrentStep(stepIndex) {
    return this.props.steps[stepIndex] === this.props.currentStep;
  }

  renderStep(number, title, current, complete) {
    return (
      <div className={'progress-step' + (current || complete ? ' active' : '')}>
        <div className='progress-step-num'>{complete ? (
          <div className='checkmark'>
            <div className='stem'></div>
            <div className='kick'></div>
          </div>
        ) : number.toString()}</div>
        <div className='progress-step-title'>{title.toString()}</div>
      </div>
    );
  }

  renderProgressBar() {
    const bar = [];
    this.props.steps.forEach((step, index) => {
      bar.push(this.renderBar(this.isStepComplete(index) || this.isCurrentStep(index),
        this.isCurrentStep(index)));
      if (index !== this.props.steps.length - 1) {
        bar.push(this.renderStep(index+1, this.props.titles[index],
          this.isCurrentStep(index), this.isStepComplete(index)));
      }
    });
    return bar;
  }

  render() {
    return (
      <div className='progress-bar'>
        {this.renderProgressBar()}
      </div>
    );
  }
}

export default ProgressBar;
