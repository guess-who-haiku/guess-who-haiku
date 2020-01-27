export const selectCurrentUser = ({entities, session}) => entities.users[session.userId];
export const selectAllUsers = ({entities}) => Object.values(entities.users);
export const selectAllAuthors = ({entities}) => Object.values(entities.authors);
