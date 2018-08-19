import React, { Fragment } from 'react'

// In this second example we use the render prop technique
// all the logic of the tree component is handled seperately elsewhere
// The onclick function and the current state of the button is all handled there
// and is easily passed down to wherever you want

// Within our presentational component now we can just call our Tree Component
// And call on the render prop, pull out the props we need to display what we want
// and thats it!

class Tree extends React.Component {
  state = { isOpen: false }

  onButtonClick = () => {
    this.setState(
      ({isOpen}) => ({ isOpen: !isOpen})
    )
  }

  getStateAndHelpers = () => {
    return {
      isOpen: this.state.isOpen,
      onButtonClick: this.onButtonClick,
    }
  }

  render() {
    return this.props.render(this.getStateAndHelpers())
  }
}


class ExampleTwo extends React.Component {
  renderContent = (isOpen) => {
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
    console.log('here')
    return (
      <div className="fc examples-page">
        <Tree render={({isOpen, onButtonClick}) => (
          <Fragment>
            <button
              className="button-tree"
              onClick={onButtonClick}
            >
              {isOpen ? 'Close' : 'Open'}
            </button>
            {this.renderContent(isOpen)}
            {this.renderContent(isOpen)}
          </Fragment>
        )}>
        </Tree>
      </div>
    )
  }
}

export default ExampleTwo
