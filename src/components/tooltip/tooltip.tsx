import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'nk-tooltip',
  styleUrl: 'tooltip.css',
})
export class Tooltip {
  @State() showing = false; // won't be accessible from outside this comp
  @Prop() explanationText = 'No Info provided'; // this will be accessible
  @Prop() showExplanationText = false; // this too is accessible

  // adding method decorator allows you to access this method from outside
  @Method()
  handleIconClick() {
    this.showExplanationText = !this.showExplanationText;
    this.showing = !this.showing;
    console.log('showing - ', this.showing);
  }

  render() {
    return (
      <div>
        <slot></slot>
        &nbsp;
        <span id="my-icon" onClick={this.handleIconClick.bind(this)}>
          ?
        </span>
        {this.showExplanationText && <span id="explanation">{this.explanationText}</span>}
      </div>
    );
  }
}
