import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import PreLoader from '../layout/PreLoader';
import LogItem from './LogItem';

const Logs = ({ logs, loading, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader></PreLoader>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs to show</p>
      ) : (
        logs.map((log) => {
          return <LogItem key={log.id} log={log}></LogItem>;
        })
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    logs: state.log.logs,
    loading: state.log.loading,
  };
};

export default connect(mapStateToProps, { getLogs })(Logs);
