import cookies from 'js-cookie';
export const getGroup = () => cookies.get('group');
export const getUserName = () => cookies.get('username');
