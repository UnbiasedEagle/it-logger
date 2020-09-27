import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import Moment from 'react-moment';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onLogDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={() => setCurrentLog(log)}
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID#{log.id}</span> last updated by
          <span className='black-text'> {log.tech}</span> on{' '}
          <Moment format='DD/MM/YYYY'>{log.date}</Moment>
        </span>
        <a className='secondary-content' onClick={onLogDelete} href='!#'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrentLog })(LogItem);
