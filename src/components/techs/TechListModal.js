import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicians List</h4>
        <ul className='collection'>
          {!loading &&
            techs &&
            techs.map((tech) => {
              return <TechItem tech={tech} key={tech.id}></TechItem>;
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading,
  };
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
