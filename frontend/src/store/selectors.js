export const selectCurrentUser = ({entities, session}) => entities.users[session.userId];
