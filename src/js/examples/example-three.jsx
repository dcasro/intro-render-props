import React, { Fragment } from 'react'

// In this final example I just wanted to show that you can use the
// render prop technique without even using the 'render prop'

// You can use children as the way to pass the props/helpers down
// In the presentational component now you can simply pull the
// same props as before from the children prop and render what you need
// right inline, just a little small thing that can make it a tad bit easier
// to read and all the cool kids are doing it


class Tree extends React.Component {
  state = { isOpen: false }

  onButtonClick = () => {
    this.setState(
      ({isOpen}) => ({ isOpen: !isOpen})
    )
  }

  getStateAndHelpers = () => {
    console.log(this.state)
    return {
      isOpen: this.state.isOpen,
      onButtonClick: this.onButtonClick,
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

class ExampleThree extends React.Component {
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
    return (
      <div className="fc examples-page">
        <Tree>
          {({ isOpen, onButtonClick}) => (
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
          )}
        </Tree>
      </div>
    )
  }
}

export default ExampleThree
