import React, { PropTypes, Component } from 'react'; // eslint-disable-line
import IfPermission from '@folio/stripes-components/lib/IfPermission'; // eslint-disable-line

import css from './Hello.css';


class Hello extends Component {
  componentWillMount() {
    
  }
  onClickPermission(e) {
    console.log("权限按钮进行了点击!");
  }
  render() {
  
    return(
    <IfPermission {...this.props} perm="users.edit">
	  <button onClick={this.onClickPermission} className={css.bold}>有权限则显示</button>
    </IfPermission>
    ) 
  }
}

Hello.manifest = { greetingParams: {} };

export default Hello;
