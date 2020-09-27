import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ techs, getTechs, loading }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => {
      return (
        <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
          {tech.firstName} {tech.lastName}
        </option>
      );
    })
  );
};

const mapStateToProps = (state) => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading,
  };
};

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
