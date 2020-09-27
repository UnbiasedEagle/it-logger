import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css';
import TechSelectOptions from '../techs/TechSelectOptions';
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and a tech' });
    } else {
      addLog({ message, attention, tech, date: new Date() });
      M.toast({ html: `Log added by ${tech}` });
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id='add-log-modal' style={modalStyle} className='modal'>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <TechSelectOptions></TechSelectOptions>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-blue btn blue'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { addLog })(AddLogModal);