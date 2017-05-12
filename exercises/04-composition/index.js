import React from 'react'

class List extends React.Component {
  render() {
    const list = this.props.topics.map(function(topic) {
      return (<li>{topic}</li>);
    });

    return (
      <ul>{list}</ul>
    )
  }
}

class Topics extends React.Component {
  render() {
    const topics_array = [
      'Component',
      'Props',
      'Composition'
    ]

    return (
      <div>
        <h4>Below is a list a of topics</h4>
        <List topics={topics_array} />
      </div>
    )
  }
}

export default Topics
