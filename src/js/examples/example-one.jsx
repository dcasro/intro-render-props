import React from 'react'

// This is our first example of how you would implement a tree/collapsible
// component normally without using any other hip techniques

// The logic and presentation is all handled within one component
// This approach does not allow for easy reuseablilty across a project

class ExampleOne extends React.Component {
  state = { isOpen: false }

  renderContent = () => {
    const { isOpen } = this.state
    if (isOpen) {
      return (
        <div className="content">
          {`Lorem ipsum dolor amet pok pok kombucha single-origin coffee,
            tumblr cloud bread wolf cardigan kinfolk. Disrupt man bun waistcoat banjo,
            kombucha green juice messenger bag deep
            v raw denim four loko intelligentsia dreamcatcher. `}
        </div>
      )
    } return null
  };

  render() {
    return (
      <div className="fc examples-page">
        <button className="button-tree" onClick={() => { this.setState({ isOpen: !this.state.isOpen })}}>
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>
        {this.renderContent()}
        {this.renderContent()}
      </div>
    )
  }
}

export default ExampleOne
