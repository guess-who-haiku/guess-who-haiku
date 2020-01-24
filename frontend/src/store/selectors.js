export const selectCurrentUser = ({entities, session}) => entities.users[session.userId];

export const selectAllAuthors = ({entities}) => Object.values(entities.authors) //double-check this selector