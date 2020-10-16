import React, { Component } from 'react';
import styles from './styles.module.css';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import classNames from 'classnames';

class LisItem extends Component {
  constructor(props) {
    super(props);
    this.state={
        isSelected: false,
    }
  }

  handlerSelected=()=>{
      const {isSelected} = this.state;
      this.setState({
          isSelected: !isSelected,
      })
      
  }


  clickForDelete = () => {
    this.props.filterItems(this.props.obj);
  };

  render() {
    const {name, tagline, imgSrc } = this.props;
    const {isSelected}=this.state;
    const {divUser, divTextContent,iconDelete,selectedUser} = styles;

    return (
      <li onClick = {this.handlerSelected} className = { isSelected ?classNames(selectedUser):null}>
        <div className={divUser}>
          <img src={imgSrc} alt='' />
          <div className={divTextContent}>
            <h1>{name}</h1>
            <p>{tagline}</p>
          </div>
        </div>
        <Icon path={mdiDelete} size={1} onClick={this.clickForDelete} className={iconDelete} />
      </li>
    );
  }
}

export default LisItem;
