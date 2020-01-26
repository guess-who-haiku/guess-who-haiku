export const selectCurrentUser = ({entities, session}) => entities.users[session.userId];
export const selectAllUsers = ({entities}) => Object.values(entities.users);
