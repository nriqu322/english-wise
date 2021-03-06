import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { callAppoinments } from '../services/englishWiseApi';
import { getAppoinments } from '../actions/index';
import ScheduleCard from './ScheduleCard';

const UserSchedule = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const appoinments = useSelector(state => state.appoinments.appoinments);
  let appoinmentArray = [];

  useEffect(() => {
    if (user) {
      callAppoinments(user.id)
        .then(data => {
          if (data.error) {
            toast.error(data.error);
          } else {
            dispatch(getAppoinments(data));
          }
        });
    }
  }, [user, dispatch]);

  if (appoinments && appoinmentArray.length === 0) {
    appoinmentArray = appoinments
      .map(appoinment => (
        <ScheduleCard
          key={appoinment.id}
          id={appoinment.id}
          schedule={appoinment.schedule}
          teacherId={appoinment.teacher_id}
        />
      ));
  }

  return (
    <div>
      <div className="schedule-title d-flex justify-content-center my-3">My Schedule</div>
      {appoinmentArray.length !== 0 ? (
        <Table striped bordered hover className="schedule-table mx-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Schedule</th>
              <th>Teacher Id</th>
            </tr>
          </thead>
          <tbody>
            {appoinmentArray.map(appoinment => (
              <tr key={appoinment.id}>{appoinment}</tr>
            ))}
          </tbody>
        </Table>
      ) : <div>You have no appoinments, please schedule with our teachers.</div>}
    </div>
  );
};

export default UserSchedule;
