import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
  const onTechDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: 'Technician Deleted' });
  };

  return (
    <li className='collection-item'>
      <div onClick={onTechDelete}>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
