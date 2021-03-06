const baseUrl = 'https://english-wise-api.herokuapp.com/';

const userLogin = async props => {
  const { email, password } = props;
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  try {
    const response = await fetch(`${baseUrl}/login`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: 'Error, please try again.',
    };
  }
};

const userSignup = async user => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${baseUrl}/signup`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: 'Error, please try again.',
    };
  }
};

const autoLogin = async token => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${baseUrl}/auto_login`, config);
  const data = await response.json();
  return data;
};

const getTeachers = async () => {
  const response = await fetch(`${baseUrl}/teachers`);
  const data = await response.json();
  return data;
};

const createAppoinment = async appoinment => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(appoinment),
  };
  const response = await fetch(`${baseUrl}/appoinments`, config);
  const data = await response.json();
  return data;
};

const callAppoinments = async id => {
  const response = await fetch(`${baseUrl}/users/${id}/appoinments`);
  const data = await response.json();
  return data;
};

export {
  userLogin, userSignup, autoLogin, getTeachers, createAppoinment, callAppoinments,
};
