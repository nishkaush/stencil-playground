import { Component, h, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'nk-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) myTitle: string;
  @Prop({ reflect: true, mutable: true }) isOpen: boolean;

  handleClose() {
    this.isOpen = false;
  }

  render() {
    const aside = (
      <aside>
        <button onClick={this.handleClose.bind(this)}>Close</button>
        <h1>{this.myTitle}</h1>
      </aside>
    );
    return <Fragment>{this.isOpen && aside}</Fragment>;
  }
}
