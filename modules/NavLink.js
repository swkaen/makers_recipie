/**
 * Created by swkaen on 西暦16/09/08.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})